  var margin = {top: 33, left: 40, right: 30, bottom: 33},
      width  = 960 - margin.left - margin.right,
      height = 500  - margin.top  - margin.bottom

  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var x2 = d3.scaleLinear()
      .domain([0,100])
      .range ([0,width])
      .clamp(true),
    y2 = d3.scaleLinear().range([height, 0]),
    z2 = d3.scaleOrdinal(d3.schemeCategory20);

	var line2 = d3.line()
	    .curve(d3.curveBasis)
	    .x(function(d) { return x2(d.time); })
	    .y(function(d) { return y2(d.surv); });

	var bisectDate = d3.bisector(function(d) { return d.time; }).left;

	 // kom ihåg att lägga data på brett format 
	var stratas = ["strata_1", "strata_2", "strata_3", "strata_4"].map(function(strata) {
		    return {
		      id: strata,
		      vals: jsondata.map(function(d) {

		      	if( typeof d[strata] == "undefined"){
		      		return undefined
		      	}else{
		        return {time: d.time, surv: d[strata]};
		    	}

		      })
		    };
		  });

	stratas.forEach(function(d){
		d.vals = d.vals.filter(function(d){return typeof d != "undefined"})
	})

	var svg2 = d3.select("#panel2")
          .append("svg")
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("viewBox","0 0 " + (width + margin.left + margin.right)  + " " + (height + margin.top + margin.bottom))
          .classed("svg-content-responsive", true)

	g2 = svg2.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	x2.domain(d3.extent(jsondata, function(d) { return d.time; }));

	y2.domain([
		d3.min(stratas, function(s) { return d3.min(s.vals, function(d) { return d.surv; }); }),
		d3.max(stratas, function(s) { return d3.max(s.vals, function(d) { return d.surv; }); })
		]);

	z2.domain(stratas.map(function(s) { return s.id; }));

	g2.append("g")
	  .attr("class", "axis axis--x")
	  .attr("transform", "translate(0," + height + ")")
	  .call(d3.axisBottom(x2).ticks(6));

	g2.append("g")
	  .attr("class", "axis axis--y")
	  .call(d3.axisLeft(y2))
	.append("text")
	  .attr("transform", "rotate(-90)")
	  .attr("y", 6)
	  .attr("dy", "0.71em")
	  .attr("fill", "#000")
	  .text("Survival of vulnerabilities over latest 45 days");

	var survline = g2.selectAll(".survline")
	 .data(stratas)
	 .enter().append("g")
	   .attr("class", "survline");

	survline.append("path")
	  .attr("class", "line")
	  .attr("d", function(d) { return line2(d.vals); })
	  .style("stroke", function(d) { return z2(d.id); });

////////////////////////////////////////////////////////////////////////////////
//--------------------------- mouseover effects --------------------------------
//-------------------------------- line ----------------------------------------
////////////////////////////////////////////////////////////////////////////////

// Define the div for the tooltip
var div2 = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add a placeholder for the effects (PW)
var mouseG = svg2.append("g")
  .attr("class", "mouse-over-effects")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
mouseG.append("path") // this is the black vertical line to follow mouse
  .attr("class", "mouse-line")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .style("opacity", "0");
*/

mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
  .attr('width', width) // can't catch mouse events on a g element
  .attr('height', height)
  .attr('fill', 'none')
  .attr('pointer-events', 'all')
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .on('mouseover', function() { // on mouse in show line, circles and text
   // d3.select(".mouse-line")
   //   .style("opacity", "1");
    d3.selectAll(".mouse-per-line circle")
      .style("opacity", "1");
    d3.selectAll(".mouse-per-line text")
      .style("opacity", "1");
  })
  .on('mouseout', function() { // on mouse out hide line, circles and text
   // d3.select(".mouse-line")
   //   .style("opacity", "0");
    d3.selectAll(".mouse-per-line circle")
      .style("opacity", "0");
    d3.selectAll(".mouse-per-line text")
      .style("opacity", "0");
  })
  .on('mousemove', function() { // mouse moving over canvas
    var mouse = d3.mouse(this);
    d3.select(".mouse-line")
      .attr("d", function() {
        var d = "M" + mouse[0]+ "," + height;
        d += " " + mouse[0] + "," + 0;
        return d;
      });

// *** of secondary importance ***
  // variable lines contain the actual lines (PW)
  var lines = document.getElementsByClassName('line');

  // create g element for every line ()
  var mousePerLine = mouseG.selectAll('.mouse-per-line')
    .data(d3.selectAll(".line").data())
    .enter()
    .append("g")
    .attr("class", "mouse-per-line")
		.attr("name", function(d){ return d.index; })
		.on("mouseover", function(d) {

		div.transition()
				.duration(200)
				.style("opacity", .9);
		div	.html("row one" + "<br/>"  + "row two")
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		})
		.on("mouseout", function(d) {
		div.transition()
				.duration(500)
				.style("opacity", 0);
		});


  // append circles for mouseover
  mousePerLine.append("circle")
    .attr("r", 7)
    .attr("stroke", function(d, i){return z2("strata_" +(i+1));})
    .style("fill", "none")
    .style("stroke-width", "1px")
    .style("opacity", "0");


// function for intersection markers
        d3.selectAll(".mouse-per-line")
          .attr("transform", function(d, i) {
            //for each datapoint get the y value for the corresponding x value of
            // the cursor stored in first position of array "mouse"

            //console.log(width/mouse[0])
            var xDate = x2.invert(mouse[0]), // the current value on the x scale to look for
                bisect = d3.bisector(function(d) { return d.time; }).right; //
                idx = bisect(d.vals, xDate); //
							console.log(idx)

            // bisectors work like in the following example:
            // var bisect = d3.bisector(function(d) { return d.x; }).right;
            // above bisector will find any numbers index where it inserted into array "x"
            // var gg = [{x:10},{x:15},{x:20}]
            // bisect(gg, 17); // ger index = 2 dvs mellan 15 och 20

            var beginning = 0, //start searching at zero
                end = lines[i].getTotalLength(), // entire length of line defines area of search
                target = null; // this we would like to find out

            while (true){
              target = Math.floor((beginning + end) / 2);
              pos = lines[i].getPointAtLength(target);
              if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                  break;
              }
              if (pos.x > mouse[0])      end = target;
              else if (pos.x < mouse[0]) beginning = target;
              else break; //position found
            }

            //d3.select(this).select('text')
            //  .text(y.invert(pos.y).toFixed(2));

			//d3.selectAll("[name $='"+i+"_.text']").attr("fill", "grey") // a bit of a hack! (PW)
            // .text(y.invert(pos.y).toFixed(2));
            var severity = ["1", "2", "3", "4"]
            d3.selectAll(".legend:nth-child("+(3 + i)+")").select("text").text("Severity " + (i+1) +": "+ Math.round(y2.invert(pos.y)*100)/100)

            return "translate(" + mouse[0] + "," + pos.y +")";
          });
});
//------------------------------ end line --------------------------------------

//------------------------------- legend ---------------------------------------
 var legendRectSize = 18;                                 
 var legendSpacing = 4;

var color = d3.scaleOrdinal(d3.schemeCategory20);

        var legend = svg2.selectAll('.legend')                     
          .data([color(0), color(1), color(2), color(3)])                                   
          .enter()                                                
          .append('g')                                            
          .attr('class', 'legend')                                
          .attr('transform', function(d, i) {                     
            var height = legendRectSize + legendSpacing;          
            var offset =  height * color.domain().length / 2;     
            var horz = -2 * legendRectSize;                       
            var vert = i * height - offset;                       
            return 'translate(' + (width - 50) + ',' + (vert + margin.left + 50) + ')';
          });                                                     

        legend.append('rect')                                     
          .attr('width', legendRectSize)                          
          .attr('height', legendRectSize)                         
          .style('fill', function(d){return d})                   
          //.style('stroke', "red");                                

        legend.append('text')                                     
          .attr('x', legendRectSize + legendSpacing)              
          .attr('y', legendRectSize - legendSpacing)              
          .text(function(d, i) { return "Severity " + (i+1) +": 1" });                       
