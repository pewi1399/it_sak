chooseOs = function(os){

  if(os == "Linux"){

window.backlog = [{"year":2012,"month":1,"backlogDelta":7,"time":"2012-01-01","backlog":7},{"year":2012,"month":2,"backlogDelta":3,"time":"2012-02-01","backlog":10},{"year":2012,"month":3,"backlogDelta":7,"time":"2012-03-01","backlog":17},{"year":2012,"month":4,"backlogDelta":5,"time":"2012-04-01","backlog":22},{"year":2012,"month":5,"backlogDelta":7,"time":"2012-05-01","backlog":29},{"year":2012,"month":6,"backlogDelta":-10,"time":"2012-06-01","backlog":19},{"year":2012,"month":7,"backlogDelta":8,"time":"2012-07-01","backlog":27},{"year":2012,"month":8,"backlogDelta":-11,"time":"2012-08-01","backlog":16},{"year":2012,"month":9,"backlogDelta":9,"time":"2012-09-01","backlog":25},{"year":2012,"month":10,"backlogDelta":8,"time":"2012-10-01","backlog":33},{"year":2012,"month":11,"backlogDelta":8,"time":"2012-11-01","backlog":41},{"year":2012,"month":12,"backlogDelta":10,"time":"2012-12-01","backlog":51},{"year":2013,"month":1,"backlogDelta":5,"time":"2013-01-01","backlog":56},{"year":2013,"month":2,"backlogDelta":-6,"time":"2013-02-01","backlog":50},{"year":2013,"month":3,"backlogDelta":-8,"time":"2013-03-01","backlog":42},{"year":2013,"month":4,"backlogDelta":-4,"time":"2013-04-01","backlog":38},{"year":2013,"month":5,"backlogDelta":-5,"time":"2013-05-01","backlog":33},{"year":2013,"month":6,"backlogDelta":6,"time":"2013-06-01","backlog":39},{"year":2013,"month":7,"backlogDelta":-3,"time":"2013-07-01","backlog":36},{"year":2013,"month":8,"backlogDelta":-7,"time":"2013-08-01","backlog":29}];



var data = backlog

var xx = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    yy = d3.scaleLinear().rangeRound([height, 0]);

xx.domain(data.map(function(d) { return d.time; }));
yy.domain(
  [
  d3.min(data, function(d) { return d.backlogDelta; }), 
  d3.max(data, function(d) { return d.backlogDelta; })
  ]
  ).nice();
  
  g.select(".axis--xx")
      .transition()
      .call(d3.axisBottom(xx).tickValues(xx.domain().filter(function(d, i) { return !(i % 6); })))

        
  g.select(".axis--yy")
  .transition()
  .call(d3.axisLeft(yy))
  
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


  }else if(os == "Microsoft"){
    alert(2)
  }else{
    alert(3)
  }

}
