chooseOs = function(os){

  if(os == "Linux"){

backlog = [{"year":2012,"month":1,"backlogDelta":7,"time":"2012-01-01","backlog":7},{"year":2012,"month":2,"backlogDelta":3,"time":"2012-02-01","backlog":10},{"year":2012,"month":3,"backlogDelta":7,"time":"2012-03-01","backlog":17},{"year":2012,"month":4,"backlogDelta":5,"time":"2012-04-01","backlog":22},{"year":2012,"month":5,"backlogDelta":7,"time":"2012-05-01","backlog":29},{"year":2012,"month":6,"backlogDelta":-10,"time":"2012-06-01","backlog":19},{"year":2012,"month":7,"backlogDelta":8,"time":"2012-07-01","backlog":27},{"year":2012,"month":8,"backlogDelta":-11,"time":"2012-08-01","backlog":16},{"year":2012,"month":9,"backlogDelta":9,"time":"2012-09-01","backlog":25},{"year":2012,"month":10,"backlogDelta":8,"time":"2012-10-01","backlog":33},{"year":2012,"month":11,"backlogDelta":8,"time":"2012-11-01","backlog":41},{"year":2012,"month":12,"backlogDelta":10,"time":"2012-12-01","backlog":51},{"year":2013,"month":1,"backlogDelta":5,"time":"2013-01-01","backlog":56},{"year":2013,"month":2,"backlogDelta":-6,"time":"2013-02-01","backlog":50},{"year":2013,"month":3,"backlogDelta":-8,"time":"2013-03-01","backlog":42},{"year":2013,"month":4,"backlogDelta":-4,"time":"2013-04-01","backlog":38},{"year":2013,"month":5,"backlogDelta":-5,"time":"2013-05-01","backlog":33},{"year":2013,"month":6,"backlogDelta":6,"time":"2013-06-01","backlog":39},{"year":2013,"month":7,"backlogDelta":-3,"time":"2013-07-01","backlog":36},{"year":2013,"month":8,"backlogDelta":-7,"time":"2013-08-01","backlog":29}];

var data = backlog;

// rescale pane 1
x_date.domain(d3.extent(data, function(d) { return parseTime(d.time); }));

// update line generator
var line = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog); });

d3.selectAll(".axis--x_date")
  .transition()
  .call(d3.axisBottom(x_date))//.tickValues(x_date.domain().filter(function(d, i) { return !(i % 6); })))
      /*.selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "2.2em")
        .attr("dy", ".65em")
        //.attr("transform", "rotate(-65)")
        */
  
/*
g.slectAll("axis--y_backlog")
  .call(d3.axisLeft(y_backlog))
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("fill", "#000")
  .text("Size of backlog");
*/


var path = d3.selectAll(".liness")
    .datum(data)
    .transition()
    .attr("d", line)


/*    
    .attr("fill", "none")
    .attr("stroke", "steelblue")
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
*/

// rescale pane 3
var x_bar = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y_bar = d3.scaleLinear().rangeRound([height, 0]);

x_bar.domain(data.map(function(d) { return d.time; }));
y_bar.domain(
  [
  d3.min(data, function(d) { return d.backlogDelta; }), 
  d3.max(data, function(d) { return d.backlogDelta; })
  ]
  ).nice();
  
  d3.select(".axis--x_bar")
      .transition()
      .call(d3.axisBottom(x_bar).tickValues(x_bar.domain().filter(function(d, i) { return !(i % 6); })));
        
  d3.select(".axis--y_backlogDelta")
  .transition()
  .call(d3.axisLeft(y_bar));


  // THIS IS THE ACTUAL WORK!
  var bars = svg.selectAll(".bar").data(data); // (data) is an array/iterable thing, second argument is an ID generator function

// remove extra bars
  bars.exit()
    .transition()
      .duration(300)
    .attr("y", y_bar(0))
    .attr("height", height - y_bar(0))
    .style('fill-opacity', 1e-6)
    .remove();

  // enter new bars
  bars.enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x_bar(d.time); })
      .attr("y", function(d) { return y_bar(d.backlogDelta); })
      .attr("width", x_bar.bandwidth())
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
                return yy(d.backlogDelta);
            } else {
                return y_bar(0);
            }

        })
        .attr("x", function(d) {
            return x_bar(d.time);
        })
        .attr("height", function(d) {
            return Math.abs(y_bar(d.backlogDelta) - yy(0));
        })
        .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.Celsius + " Celsius");
            d3.select("#_yr3")
                .text("Month: " + d.time);
            d3.select("#degrree3")
                .text("Change:" + d.backlogDelta);
        });

  // the "UPDATE" set:
  bars.transition().duration(300).attr("x", function(d) { return x_bar(d.time); })
      .attr("y", function(d) { return y_bar(d.backlogDelta); })
      .attr("width", x_bar.bandwidth())
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
                return y_bar(d.backlogDelta);
            } else {
                return y_bar(0);
            }

        })
        .attr("x", function(d) {
            return x_bar(d.time);
        })
        .attr("height", function(d) {
            return Math.abs(y_bar(d.backlogDelta) - y_bar(0));
        })/*
        .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.Celsius + " Celsius");
            d3.select("#_yr3")
                .text("Month: " + d.time);
            d3.select("#degrree3")
                .text("Change:" + d.backlogDelta);
        });*/

  }else if(os == "Microsoft"){
    alert(2)
  }else{
    alert(3)
  }

}
