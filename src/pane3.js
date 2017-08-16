
var margin = {top: 33, left: 40, right: 30, bottom: 33},
    width  = 960 - margin.left - margin.right,
    height = 500  - margin.top  - margin.bottom

var color = d3.scaleOrdinal(d3.schemeCategory20);

var x_date = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y_backlogdelta = d3.scaleLinear().rangeRound([height, 0]);

var svg = d3.select("#panel3")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox","0 0 " + (width + margin.left + margin.right)  + " " + (height + margin.top + margin.bottom))
        .classed("svg-content-responsive", true)

g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = backlog

x_date.domain(data.map(function(d) { return d.time; }));
y_backlogdelta.domain(
  [
  d3.min(data, function(d) { return d.backlogDelta; }), 
  d3.max(data, function(d) { return d.backlogDelta; })
  ]
  ).nice();

g.append("g")
  .attr("class", "axis axis--x_date")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x_date).tickValues(x_date.domain().filter(function(d, i) { return !(i % 6); })))
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "2.2em")
        .attr("dy", ".65em")
        //.attr("transform", "rotate(-65)")
  

g.append("g")
  .attr("class", "axis axis--y_backlogdelta")
  .call(d3.axisLeft(y_backlogdelta))
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
      .attr("x", function(d) { return x_date(d.time); })
      .attr("y", function(d) { return y_backlogdelta(d.backlogDelta); })
      .attr("width", x_date.bandwidth())
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
                return y_backlogdelta(d.backlogDelta);
            } else {
                return y_backlogdelta(0);
            }

        })
        .attr("x", function(d) {
            return x_date(d.time);
        })
        .attr("height", function(d) {
            return Math.abs(y_backlogdelta(d.backlogDelta) - y_backlogdelta(0));
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
	