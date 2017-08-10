
var margin = {top: 33, left: 40, right: 30, bottom: 75},
    width  = 960 - margin.left - margin.right,
    height = 500  - margin.top  - margin.bottom

var color = d3.scaleOrdinal(d3.schemeCategory10);

var x4 = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y4 = d3.scaleLinear().rangeRound([height, 0]);


var svg4 = d3.select("#panel4")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox","0 0 " + (width + margin.left + margin.right)  + " " + (height + margin.top + margin.bottom))
        .classed("svg-content-responsive", true)

g4 = svg4.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%Y-%m-%d");

var data = backlog


x4.domain(data.map(function(d) { return parseTime(d.time); }));
y4.domain(
  [
  0, 
  d3.max(data, function(d) { return d.backlog; })
  ]
  ).nice();

var line = d3.line()
    .x(function(d) { return x4(parseTime(d.time)); })
    .y(function(d) { return y4(d.backlog); });


var ticks = data.filter(function(d, i) { return !(i % 4); })
             .map(function(d) { return d.time; })

g4.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + (height- 300) + ")")
  .call(d3.axisBottom(x4)
    .tickFormat(d3.timeFormat("%Y")).tickValues(ticks))
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)")
