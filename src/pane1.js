
var margin = {top: 33, left: 40, right: 30, bottom: 33},
    width  = 960 - margin.left - margin.right,
    height = 500  - margin.top  - margin.bottom

var color = d3.scaleOrdinal(d3.schemeCategory10);

var x_date = d3.scaleTime().range([0, width]),
    y_backlog = d3.scaleLinear().rangeRound([height, 0]);


var svg = d3.select("#panel1")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox","0 0 " + (width + margin.left + margin.right)  + " " + (height + margin.top + margin.bottom))
        .classed("svg-content-responsive", true)

g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%Y-%m-%d");

var data = backlog

x_date.domain(d3.extent(data, function(d) { return parseTime(d.time); }));
y_backlog.domain(
  [
  0, 
  d3.max(data, function(d) { return d.backlog; })
  ]
  ).nice();

var line = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog); });

var line_influx = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog/3+ 20); });



g.append("g")
  .attr("class", "axis axis--x_date")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x_date))//.tickValues(x_date.domain().filter(function(d, i) { return !(i % 6); })))
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "2.2em")
        .attr("dy", ".65em")
        //.attr("transform", "rotate(-65)")
  

g.append("g")
  .attr("class", "axis axis--y_backlog")
  .call(d3.axisLeft(y_backlog))
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("fill", "#000")
  .text("Size of backlog");

var path1 = g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#1f77b4")
    .attr("stroke-width", 1.5)
    .attr("class", "liness")
    .attr("d", line)
    .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.Celsius + " Celsius");
            d3.select("#_yr")
                .text("Month: " + d.time);
            d3.select("#degrree")
                .text("Number of patches:" + d.backlog);
        });

var totalLength = path1.node().getTotalLength();

path1
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(3000)
    .attr("stroke-dashoffset", 0);


var path2 = g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#ff7f0e")
    .attr("stroke-width", 1.5)
    .attr("class", "line_influx")
    .attr("d", line_influx);

var totalLength = path2.node().getTotalLength();

path2
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(3000)
    .attr("stroke-dashoffset", 0);

svg.append("g")
    .attr("class", "infowin")
    .attr("transform", "translate(70, 30)")
    .append("text")
    .attr("id", "_yr");

svg.append("g")
    .attr("class", "infowin")
    .attr("transform", "translate(200, 30)")
    .append("text")
    .attr("id","degrree");

//------------------------------- legend ---------------------------------------
 var legendRectSize = 18;                                 
 var legendSpacing = 4;

var color = d3.scaleOrdinal(d3.schemeCategory20);
var legendLabel = ["Backlog", "New patches"]

        var legend = svg.selectAll('.legend')                     
          .data(["#1f77b4", "#ff7f0e"])                                   
          .enter()                                                
          .append('g')                                            
          .attr('class', 'legend')                                
          .attr('transform', function(d, i) {                     
            var height = legendRectSize + legendSpacing;          
            var offset =  height * color.domain().length / 2;     
            var horz = -2 * legendRectSize;                       
            var vert = i * height - offset;                       
            return 'translate(' + (width) + ',' + (vert + margin.left ) + ')';
          });                                                     

        legend.append('rect')                                     
          .attr('width', legendRectSize)                          
          .attr('height', legendRectSize)                         
          .style('fill', function(d){return d})                   
          //.style('stroke', "red");                                

        legend.append('text')                                     
          .attr('x', legendRectSize + legendSpacing)              
          .attr('y', legendRectSize - legendSpacing)              
          .text(function(d, i) { return legendLabel[i] });                       
