
var margin = {top: 33, left: 40, right: 30, bottom: 33},
    width  = 960 - margin.left - margin.right,
    height = 500  - margin.top  - margin.bottom

var color = d3.scaleOrdinal(d3.schemeCategory20);

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var svg = d3.select("#panel3")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox","0 0 " + (width + margin.left + margin.right)  + " " + (height + margin.top + margin.bottom))
        .classed("svg-content-responsive", true)

g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = backlog

x.domain(data.map(function(d) { return d.time; }));
y.domain(
  [
  d3.min(data, function(d) { return d.backlogDelta; }), 
  d3.max(data, function(d) { return d.backlogDelta; })
  ]
  ).nice();

g.append("g")
  .attr("class", "axis axis--xx")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).tickValues(x.domain().filter(function(d, i) { return !(i % 6); })))
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "2.2em")
        .attr("dy", ".65em")
        //.attr("transform", "rotate(-65)")
  

g.append("g")
  .attr("class", "axis axis--yy")
  .call(d3.axisLeft(y))
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("fill", "#000")
  .text("Change to backlog");

g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.time); })
      .attr("y", function(d) { return y(d.backlogDelta); })
      .attr("width", x.bandwidth())
      .attr("class", function(d) {

            if (d.backlogDelta < 0){
                return "bar negative";
            } else {
                return "bar positive";
            }

        })
        .attr("data-yr", function(d){
            return d.time;
        })
        .attr("data-c", function(d){
            return d.backlogDelta;
        })
        .attr("title", function(d){
            return (d.time + ": " + d.backlogDelta + " °C")
        })
        .attr("y", function(d) {

            if (d.backlogDelta > 0){
                return y(d.backlogDelta);
            } else {
                return y(0);
            }

        })
        .attr("x", function(d) {
            return x(d.time);
        })
        .attr("height", function(d) {
            return Math.abs(y(d.backlogDelta) - y(0));
        })
        .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.Celsius + " Celsius");
            d3.select("#_yr3")
                .text("Month: " + d.time);
            d3.select("#degrree3")
                .text("Change:" + d.backlogDelta);
        });


svg.append("g")
    .attr("class", "infowin")
    .attr("transform", "translate(70, 30)")
    .append("text")
    .attr("id", "_yr3");

svg.append("g")
    .attr("class", "infowin")
    .attr("transform", "translate(200, 30)")
    .append("text")
    .attr("id","degrree3");
	