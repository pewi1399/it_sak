chooseOs = function(os){

  if(os == "Linux"){

var backlog = [{"year":2012,"month":1,"backlogDelta":2,"influx":33,"time":"2012-01-01","backlog":2},{"year":2012,"month":2,"backlogDelta":4,"influx":33,"time":"2012-02-01","backlog":6},{"year":2012,"month":3,"backlogDelta":3,"influx":34,"time":"2012-03-01","backlog":9},{"year":2012,"month":4,"backlogDelta":-1,"influx":35,"time":"2012-04-01","backlog":8},{"year":2012,"month":5,"backlogDelta":0,"influx":33,"time":"2012-05-01","backlog":8},{"year":2012,"month":6,"backlogDelta":-2,"influx":33,"time":"2012-06-01","backlog":6},{"year":2012,"month":7,"backlogDelta":3,"influx":34,"time":"2012-07-01","backlog":9},{"year":2012,"month":8,"backlogDelta":-4,"influx":37,"time":"2012-08-01","backlog":5},{"year":2012,"month":9,"backlogDelta":4,"influx":34,"time":"2012-09-01","backlog":9},{"year":2012,"month":10,"backlogDelta":4,"influx":35,"time":"2012-10-01","backlog":13},{"year":2012,"month":11,"backlogDelta":-2,"influx":33,"time":"2012-11-01","backlog":11},{"year":2012,"month":12,"backlogDelta":4,"influx":34,"time":"2012-12-01","backlog":15},{"year":2013,"month":1,"backlogDelta":6,"influx":36,"time":"2013-01-01","backlog":21},{"year":2013,"month":2,"backlogDelta":3,"influx":30,"time":"2013-02-01","backlog":24},{"year":2013,"month":3,"backlogDelta":-7,"influx":33,"time":"2013-03-01","backlog":17},{"year":2013,"month":4,"backlogDelta":-3,"influx":31,"time":"2013-04-01","backlog":14},{"year":2013,"month":5,"backlogDelta":1,"influx":39,"time":"2013-05-01","backlog":15},{"year":2013,"month":6,"backlogDelta":-4,"influx":35,"time":"2013-06-01","backlog":11},{"year":2013,"month":7,"backlogDelta":-3,"influx":35,"time":"2013-07-01","backlog":8},{"year":2013,"month":8,"backlogDelta":3,"influx":35,"time":"2013-08-01","backlog":11},{"year":2013,"month":9,"backlogDelta":2,"influx":33,"time":"2013-09-01","backlog":13},{"year":2013,"month":10,"backlogDelta":-2,"influx":35,"time":"2013-10-01","backlog":11},{"year":2013,"month":11,"backlogDelta":4,"influx":35,"time":"2013-11-01","backlog":15},{"year":2013,"month":12,"backlogDelta":-3,"influx":33,"time":"2013-12-01","backlog":12},{"year":2014,"month":1,"backlogDelta":4,"influx":35,"time":"2014-01-01","backlog":16},{"year":2014,"month":2,"backlogDelta":-1,"influx":32,"time":"2014-02-01","backlog":15},{"year":2014,"month":3,"backlogDelta":-3,"influx":36,"time":"2014-03-01","backlog":12},{"year":2014,"month":4,"backlogDelta":4,"influx":35,"time":"2014-04-01","backlog":16},{"year":2014,"month":5,"backlogDelta":2,"influx":34,"time":"2014-05-01","backlog":18},{"year":2014,"month":6,"backlogDelta":1,"influx":35,"time":"2014-06-01","backlog":19},{"year":2014,"month":7,"backlogDelta":2,"influx":34,"time":"2014-07-01","backlog":21},{"year":2014,"month":8,"backlogDelta":4,"influx":34,"time":"2014-08-01","backlog":25},{"year":2014,"month":9,"backlogDelta":-4,"influx":32,"time":"2014-09-01","backlog":21},{"year":2014,"month":10,"backlogDelta":-1,"influx":34,"time":"2014-10-01","backlog":20},{"year":2014,"month":11,"backlogDelta":7,"influx":33,"time":"2014-11-01","backlog":27},{"year":2014,"month":12,"backlogDelta":-1,"influx":35,"time":"2014-12-01","backlog":26},{"year":2015,"month":1,"backlogDelta":-2,"influx":35,"time":"2015-01-01","backlog":24},{"year":2015,"month":2,"backlogDelta":-2,"influx":30,"time":"2015-02-01","backlog":22},{"year":2015,"month":3,"backlogDelta":4,"influx":34,"time":"2015-03-01","backlog":26},{"year":2015,"month":4,"backlogDelta":2,"influx":32,"time":"2015-04-01","backlog":28},{"year":2015,"month":5,"backlogDelta":-4,"influx":33,"time":"2015-05-01","backlog":24},{"year":2015,"month":6,"backlogDelta":1,"influx":35,"time":"2015-06-01","backlog":25},{"year":2015,"month":7,"backlogDelta":2,"influx":32,"time":"2015-07-01","backlog":27},{"year":2015,"month":8,"backlogDelta":-3,"influx":35,"time":"2015-08-01","backlog":24},{"year":2015,"month":9,"backlogDelta":2,"influx":32,"time":"2015-09-01","backlog":26},{"year":2015,"month":10,"backlogDelta":5,"influx":36,"time":"2015-10-01","backlog":31},{"year":2015,"month":11,"backlogDelta":-3,"influx":31,"time":"2015-11-01","backlog":28},{"year":2015,"month":12,"backlogDelta":-2,"influx":32,"time":"2015-12-01","backlog":26},{"year":2016,"month":1,"backlogDelta":-1,"influx":32,"time":"2016-01-01","backlog":25},{"year":2016,"month":2,"backlogDelta":3,"influx":32,"time":"2016-02-01","backlog":28},{"year":2016,"month":3,"backlogDelta":5,"influx":35,"time":"2016-03-01","backlog":33},{"year":2016,"month":4,"backlogDelta":1,"influx":32,"time":"2016-04-01","backlog":34},{"year":2016,"month":5,"backlogDelta":5,"influx":34,"time":"2016-05-01","backlog":39},{"year":2016,"month":6,"backlogDelta":3,"influx":33,"time":"2016-06-01","backlog":42},{"year":2016,"month":7,"backlogDelta":-3,"influx":38,"time":"2016-07-01","backlog":39},{"year":2016,"month":8,"backlogDelta":-1,"influx":37,"time":"2016-08-01","backlog":38},{"year":2016,"month":9,"backlogDelta":7,"influx":32,"time":"2016-09-01","backlog":45},{"year":2016,"month":10,"backlogDelta":4,"influx":36,"time":"2016-10-01","backlog":49},{"year":2016,"month":11,"backlogDelta":-3,"influx":33,"time":"2016-11-01","backlog":46},{"year":2016,"month":12,"backlogDelta":3,"influx":38,"time":"2016-12-01","backlog":49},{"year":2017,"month":1,"backlogDelta":4,"influx":33,"time":"2017-01-01","backlog":53},{"year":2017,"month":2,"backlogDelta":-1,"influx":32,"time":"2017-02-01","backlog":52},{"year":2017,"month":3,"backlogDelta":5,"influx":39,"time":"2017-03-01","backlog":57},{"year":2017,"month":4,"backlogDelta":4,"influx":35,"time":"2017-04-01","backlog":61},{"year":2017,"month":5,"backlogDelta":-1,"influx":35,"time":"2017-05-01","backlog":60},{"year":2017,"month":6,"backlogDelta":1,"influx":34,"time":"2017-06-01","backlog":61},{"year":2017,"month":7,"backlogDelta":-3,"influx":35,"time":"2017-07-01","backlog":58},{"year":2017,"month":8,"backlogDelta":0,"influx":18,"time":"2017-08-01","backlog":58}]

var jsondata = [{"time":0,"strata_1":1,"strata_2":1,"strata_3":1,"strata_4":1},{"time":5,"strata_1":0.9224},{"time":6,"strata_1":0.819},{"time":7,"strata_1":0.7241},{"time":8,"strata_1":0.6379},{"time":9,"strata_1":0.5862},{"time":10,"strata_1":0.4828,"strata_2":0.9124},{"time":11,"strata_1":0.3966,"strata_2":0.8029},{"time":12,"strata_1":0.3621,"strata_2":0.6861},{"time":13,"strata_1":0.3276,"strata_2":0.5255},{"time":14,"strata_1":0.2845,"strata_2":0.4745},{"time":15,"strata_1":0.2328,"strata_2":0.3942,"strata_3":0.9},{"time":16,"strata_1":0.2155,"strata_2":0.3504,"strata_3":0.7667},{"time":17,"strata_1":0.1897,"strata_2":0.3139,"strata_3":0.6833},{"time":18,"strata_1":0.1379,"strata_2":0.2555,"strata_3":0.625},{"time":19,"strata_1":0.0948,"strata_2":0.2117,"strata_3":0.525},{"time":20,"strata_1":0.0862,"strata_2":0.1752,"strata_3":0.4083,"strata_4":0.9685},{"time":21,"strata_1":0.0776,"strata_2":0.1095,"strata_3":0.375,"strata_4":0.8031},{"time":22,"strata_1":0.069,"strata_2":0.0949,"strata_3":0.3333,"strata_4":0.6929},{"time":23,"strata_1":0.0603,"strata_3":0.3,"strata_4":0.5984},{"time":24,"strata_1":0.0517,"strata_3":0.225,"strata_4":0.5197},{"time":25,"strata_2":0.0584,"strata_3":0.2167,"strata_4":0.4173},{"time":26,"strata_2":0.0438,"strata_3":0.1917,"strata_4":0.3937},{"time":27,"strata_1":0.0345,"strata_2":0.0365,"strata_3":0.15,"strata_4":0.3307},{"time":28,"strata_1":0.0172,"strata_2":0.0292,"strata_3":0.1417,"strata_4":0.2677},{"time":29,"strata_1":0.0086,"strata_2":0.0219,"strata_3":0.1333,"strata_4":0.2362},{"time":30,"strata_4":0.1811},{"time":31,"strata_2":0.0146,"strata_3":0.1083,"strata_4":0.1654},{"time":32,"strata_2":0.0073,"strata_4":0.126},{"time":33,"strata_1":0,"strata_3":0.0917,"strata_4":0.0787},{"time":34,"strata_3":0.075,"strata_4":0.0709},{"time":35,"strata_2":0,"strata_3":0.0583,"strata_4":0.063},{"time":36,"strata_3":0.0333,"strata_4":0.0472},{"time":37,"strata_3":0.025,"strata_4":0.0394},{"time":38,"strata_3":0.0167,"strata_4":0.0315},{"time":39,"strata_4":0.0236},{"time":40,"strata_3":0.0083,"strata_4":0.0157},{"time":41,"strata_3":0},{"time":42,"strata_4":0.0079},{"time":46,"strata_4":0}]

var data = backlog;

// rescale pane 1
x_date.domain(d3.extent(data, function(d) { return parseTime(d.time); }));

y_backlog.domain(
  [
  0, 
  d3.max(data, function(d) { return d.backlog; })
  ]
  ).nice();

// update line generator
var line = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog); });

var line_influx = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog/3+ 20); });

d3.selectAll(".axis--x_date")
  .transition()
  .call(d3.axisBottom(x_date))

d3.selectAll(".axis--y_backlog")
  .call(d3.axisLeft(y_backlog))

d3.selectAll(".liness")
    .datum(data)
    .transition()
    .attr("d", line)

d3.selectAll(".line_influx")
    .datum(data)
    .transition()
    .attr("d", line_influx)

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
        })

// ----------------------------------------------------------------------------------
  // survival line 
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

  x2.domain(d3.extent(jsondata, function(d) { return d.time; }));

  y2.domain([
    d3.min(stratas, function(s) { return d3.min(s.vals, function(d) { return d.surv; }); }),
    d3.max(stratas, function(s) { return d3.max(s.vals, function(d) { return d.surv; }); })
    ]);

  z2.domain(stratas.map(function(s) { return s.id; }));

/*
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
*/
/*
  var survline = g2.selectAll(".survline")
   .data(stratas)
   .enter().append("g")
     .attr("class", "survline");
*/
  d3.selectAll(".survline").remove()

  var survline = g2.selectAll(".survline")
   .data(stratas)
   .enter().append("g")
     .attr("class", "survline");

  survline.append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line2(d.vals); })
    .style("stroke", function(d) { return z2(d.id); });

  }else if(os == "Microsoft"){

var backlog = [{"year":2012,"month":1,"backlogDelta":1,"influx":34,"time":"2012-01-01","backlog":1},{"year":2012,"month":2,"backlogDelta":2,"influx":34,"time":"2012-02-01","backlog":3},{"year":2012,"month":3,"backlogDelta":5,"influx":36,"time":"2012-03-01","backlog":8},{"year":2012,"month":4,"backlogDelta":2,"influx":34,"time":"2012-04-01","backlog":10},{"year":2012,"month":5,"backlogDelta":-2,"influx":35,"time":"2012-05-01","backlog":8},{"year":2012,"month":6,"backlogDelta":-3,"influx":34,"time":"2012-06-01","backlog":5},{"year":2012,"month":7,"backlogDelta":-5,"influx":36,"time":"2012-07-01","backlog":0},{"year":2012,"month":8,"backlogDelta":6,"influx":36,"time":"2012-08-01","backlog":6},{"year":2012,"month":9,"backlogDelta":-1,"influx":36,"time":"2012-09-01","backlog":5},{"year":2012,"month":10,"backlogDelta":1,"influx":35,"time":"2012-10-01","backlog":6},{"year":2012,"month":11,"backlogDelta":4,"influx":34,"time":"2012-11-01","backlog":10},{"year":2012,"month":12,"backlogDelta":3,"influx":34,"time":"2012-12-01","backlog":13},{"year":2013,"month":1,"backlogDelta":2,"influx":33,"time":"2013-01-01","backlog":15},{"year":2013,"month":2,"backlogDelta":-3,"influx":32,"time":"2013-02-01","backlog":12},{"year":2013,"month":3,"backlogDelta":-2,"influx":36,"time":"2013-03-01","backlog":10},{"year":2013,"month":4,"backlogDelta":-1,"influx":33,"time":"2013-04-01","backlog":9},{"year":2013,"month":5,"backlogDelta":-2,"influx":34,"time":"2013-05-01","backlog":7},{"year":2013,"month":6,"backlogDelta":-3,"influx":34,"time":"2013-06-01","backlog":4},{"year":2013,"month":7,"backlogDelta":-4,"influx":35,"time":"2013-07-01","backlog":0},{"year":2013,"month":8,"backlogDelta":-2,"influx":33,"time":"2013-08-01","backlog":-2},{"year":2013,"month":9,"backlogDelta":4,"influx":37,"time":"2013-09-01","backlog":2},{"year":2013,"month":10,"backlogDelta":-7,"influx":31,"time":"2013-10-01","backlog":-5},{"year":2013,"month":11,"backlogDelta":2,"influx":35,"time":"2013-11-01","backlog":-3},{"year":2013,"month":12,"backlogDelta":-4,"influx":37,"time":"2013-12-01","backlog":-7},{"year":2014,"month":1,"backlogDelta":-6,"influx":37,"time":"2014-01-01","backlog":-13},{"year":2014,"month":2,"backlogDelta":-1,"influx":32,"time":"2014-02-01","backlog":-14},{"year":2014,"month":3,"backlogDelta":-3,"influx":32,"time":"2014-03-01","backlog":-17},{"year":2014,"month":4,"backlogDelta":-6,"influx":31,"time":"2014-04-01","backlog":-23},{"year":2014,"month":5,"backlogDelta":-6,"influx":34,"time":"2014-05-01","backlog":-29},{"year":2014,"month":6,"backlogDelta":4,"influx":34,"time":"2014-06-01","backlog":-25},{"year":2014,"month":7,"backlogDelta":3,"influx":35,"time":"2014-07-01","backlog":-22},{"year":2014,"month":8,"backlogDelta":4,"influx":34,"time":"2014-08-01","backlog":-18},{"year":2014,"month":9,"backlogDelta":-5,"influx":33,"time":"2014-09-01","backlog":-23},{"year":2014,"month":10,"backlogDelta":3,"influx":33,"time":"2014-10-01","backlog":-20},{"year":2014,"month":11,"backlogDelta":8,"influx":33,"time":"2014-11-01","backlog":-12},{"year":2014,"month":12,"backlogDelta":2,"influx":36,"time":"2014-12-01","backlog":-10},{"year":2015,"month":1,"backlogDelta":-4,"influx":34,"time":"2015-01-01","backlog":-14},{"year":2015,"month":2,"backlogDelta":6,"influx":32,"time":"2015-02-01","backlog":-8},{"year":2015,"month":3,"backlogDelta":3,"influx":36,"time":"2015-03-01","backlog":-5},{"year":2015,"month":4,"backlogDelta":3,"influx":32,"time":"2015-04-01","backlog":-2},{"year":2015,"month":5,"backlogDelta":5,"influx":34,"time":"2015-05-01","backlog":3},{"year":2015,"month":6,"backlogDelta":1,"influx":33,"time":"2015-06-01","backlog":4},{"year":2015,"month":7,"backlogDelta":-5,"influx":34,"time":"2015-07-01","backlog":-1},{"year":2015,"month":8,"backlogDelta":4,"influx":34,"time":"2015-08-01","backlog":3},{"year":2015,"month":9,"backlogDelta":-6,"influx":32,"time":"2015-09-01","backlog":-3},{"year":2015,"month":10,"backlogDelta":1,"influx":35,"time":"2015-10-01","backlog":-2},{"year":2015,"month":11,"backlogDelta":-5,"influx":34,"time":"2015-11-01","backlog":-7},{"year":2015,"month":12,"backlogDelta":-3,"influx":37,"time":"2015-12-01","backlog":-10},{"year":2016,"month":1,"backlogDelta":-2,"influx":37,"time":"2016-01-01","backlog":-12},{"year":2016,"month":2,"backlogDelta":-6,"influx":30,"time":"2016-02-01","backlog":-18},{"year":2016,"month":3,"backlogDelta":-6,"influx":36,"time":"2016-03-01","backlog":-24},{"year":2016,"month":4,"backlogDelta":2,"influx":33,"time":"2016-04-01","backlog":-22},{"year":2016,"month":5,"backlogDelta":5,"influx":34,"time":"2016-05-01","backlog":-17},{"year":2016,"month":6,"backlogDelta":6,"influx":33,"time":"2016-06-01","backlog":-11},{"year":2016,"month":7,"backlogDelta":-5,"influx":37,"time":"2016-07-01","backlog":-16},{"year":2016,"month":8,"backlogDelta":4,"influx":35,"time":"2016-08-01","backlog":-12},{"year":2016,"month":9,"backlogDelta":8,"influx":33,"time":"2016-09-01","backlog":-4},{"year":2016,"month":10,"backlogDelta":3,"influx":35,"time":"2016-10-01","backlog":-1},{"year":2016,"month":11,"backlogDelta":1,"influx":33,"time":"2016-11-01","backlog":0},{"year":2016,"month":12,"backlogDelta":4,"influx":36,"time":"2016-12-01","backlog":4},{"year":2017,"month":1,"backlogDelta":3,"influx":34,"time":"2017-01-01","backlog":7},{"year":2017,"month":2,"backlogDelta":2,"influx":33,"time":"2017-02-01","backlog":9},{"year":2017,"month":3,"backlogDelta":3,"influx":35,"time":"2017-03-01","backlog":12},{"year":2017,"month":4,"backlogDelta":-1,"influx":35,"time":"2017-04-01","backlog":11},{"year":2017,"month":5,"backlogDelta":4,"influx":33,"time":"2017-05-01","backlog":15},{"year":2017,"month":6,"backlogDelta":6,"influx":33,"time":"2017-06-01","backlog":21},{"year":2017,"month":7,"backlogDelta":-1,"influx":36,"time":"2017-07-01","backlog":20},{"year":2017,"month":8,"backlogDelta":1,"influx":17,"time":"2017-08-01","backlog":21}]

var jsondata = [{"time":0,"strata_1":1,"strata_2":1,"strata_3":1,"strata_4":1},{"time":5,"strata_1":0.918},{"time":6,"strata_1":0.8197},{"time":7,"strata_1":0.7541},{"time":8,"strata_1":0.6639},{"time":9,"strata_1":0.5574},{"time":10,"strata_1":0.5082,"strata_2":0.903},{"time":11,"strata_1":0.4098,"strata_2":0.7313},{"time":12,"strata_1":0.3689,"strata_2":0.6567},{"time":13,"strata_1":0.2869,"strata_2":0.6194},{"time":14,"strata_1":0.2459,"strata_2":0.5522},{"time":15,"strata_2":0.4776,"strata_3":0.9426},{"time":16,"strata_1":0.2131,"strata_2":0.4179,"strata_3":0.8197},{"time":17,"strata_1":0.1885,"strata_2":0.3881,"strata_3":0.7295},{"time":18,"strata_1":0.1639,"strata_2":0.3284,"strata_3":0.6475},{"time":19,"strata_1":0.1311,"strata_2":0.2836,"strata_3":0.5574},{"time":20,"strata_1":0.1148,"strata_2":0.2239,"strata_3":0.4344,"strata_4":0.9279},{"time":21,"strata_1":0.1066,"strata_2":0.1567,"strata_3":0.3525,"strata_4":0.8108},{"time":22,"strata_1":0.0984,"strata_2":0.1343,"strata_3":0.2787,"strata_4":0.7117},{"time":23,"strata_1":0.0902,"strata_2":0.0821,"strata_3":0.2623,"strata_4":0.5676},{"time":24,"strata_1":0.0738,"strata_2":0.0746,"strata_3":0.2459,"strata_4":0.4775},{"time":25,"strata_1":0.0656,"strata_2":0.0522,"strata_3":0.2049,"strata_4":0.4144},{"time":26,"strata_1":0.0492,"strata_2":0.0299,"strata_3":0.1721,"strata_4":0.3514},{"time":27,"strata_1":0.041,"strata_2":0.0149,"strata_3":0.1557,"strata_4":0.2793},{"time":28,"strata_1":0.0328,"strata_2":0.0075,"strata_3":0.0984,"strata_4":0.2162},{"time":29,"strata_1":0.0246,"strata_2":0,"strata_4":0.1892},{"time":30,"strata_1":0.0164,"strata_3":0.0738,"strata_4":0.1622},{"time":31,"strata_1":0.0082,"strata_3":0.0574},{"time":32,"strata_1":0,"strata_3":0.041,"strata_4":0.1351},{"time":33,"strata_4":0.1081},{"time":34,"strata_4":0.0811},{"time":36,"strata_3":0.0328,"strata_4":0.0541},{"time":37,"strata_4":0.045},{"time":38,"strata_4":0.036},{"time":39,"strata_3":0.0246,"strata_4":0.018},{"time":41,"strata_3":0.0164},{"time":42,"strata_3":0},{"time":44,"strata_4":0}]

var data = backlog;

// rescale pane 1
x_date.domain(d3.extent(data, function(d) { return parseTime(d.time); }));

y_backlog.domain(
  [
  0, 
  d3.max(data, function(d) { return d.backlog + 40; })
  ]
  ).nice();

// update line generator
var line = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog+ 40); });

var line_influx = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog/3+ 20); });

d3.selectAll(".axis--x_date")
  .transition()
  .call(d3.axisBottom(x_date))

d3.selectAll(".axis--y_backlog")
  .call(d3.axisLeft(y_backlog))

d3.selectAll(".liness")
    .datum(data)
    .transition()
    .attr("d", line)

d3.selectAll(".line_influx")
    .datum(data)
    .transition()
    .attr("d", line_influx)

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
        })

// ----------------------------------------------------------------------------------
  // survival line 
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

  x2.domain(d3.extent(jsondata, function(d) { return d.time; }));

  y2.domain([
    d3.min(stratas, function(s) { return d3.min(s.vals, function(d) { return d.surv; }); }),
    d3.max(stratas, function(s) { return d3.max(s.vals, function(d) { return d.surv; }); })
    ]);

  z2.domain(stratas.map(function(s) { return s.id; }));

/*
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
*/
/*
  var survline = g2.selectAll(".survline")
   .data(stratas)
   .enter().append("g")
     .attr("class", "survline");
*/
  d3.selectAll(".survline").remove()

  var survline = g2.selectAll(".survline")
   .data(stratas)
   .enter().append("g")
     .attr("class", "survline");

  survline.append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line2(d.vals); })
    .style("stroke", function(d) { return z2(d.id); });
  }else{

var backlog = [{"year":2012,"month":1,"backlogDelta":3,"influx":66,"time":"2012-01-01","backlog":3},{"year":2012,"month":2,"backlogDelta":6,"influx":67,"time":"2012-02-01","backlog":9},{"year":2012,"month":3,"backlogDelta":8,"influx":70,"time":"2012-03-01","backlog":17},{"year":2012,"month":4,"backlogDelta":-3,"influx":69,"time":"2012-04-01","backlog":14},{"year":2012,"month":5,"backlogDelta":-2,"influx":68,"time":"2012-05-01","backlog":12},{"year":2012,"month":6,"backlogDelta":5,"influx":67,"time":"2012-06-01","backlog":17},{"year":2012,"month":7,"backlogDelta":8,"influx":70,"time":"2012-07-01","backlog":25},{"year":2012,"month":8,"backlogDelta":10,"influx":73,"time":"2012-08-01","backlog":35},{"year":2012,"month":9,"backlogDelta":-5,"influx":70,"time":"2012-09-01","backlog":30},{"year":2012,"month":10,"backlogDelta":5,"influx":69,"time":"2012-10-01","backlog":35},{"year":2012,"month":11,"backlogDelta":-6,"influx":66,"time":"2012-11-01","backlog":29},{"year":2012,"month":12,"backlogDelta":7,"influx":68,"time":"2012-12-01","backlog":36},{"year":2013,"month":1,"backlogDelta":8,"influx":69,"time":"2013-01-01","backlog":44},{"year":2013,"month":2,"backlogDelta":6,"influx":62,"time":"2013-02-01","backlog":50},{"year":2013,"month":3,"backlogDelta":-9,"influx":69,"time":"2013-03-01","backlog":41},{"year":2013,"month":4,"backlogDelta":-4,"influx":64,"time":"2013-04-01","backlog":37},{"year":2013,"month":5,"backlogDelta":-3,"influx":73,"time":"2013-05-01","backlog":34},{"year":2013,"month":6,"backlogDelta":7,"influx":69,"time":"2013-06-01","backlog":41},{"year":2013,"month":7,"backlogDelta":-7,"influx":70,"time":"2013-07-01","backlog":34},{"year":2013,"month":8,"backlogDelta":-5,"influx":68,"time":"2013-08-01","backlog":29},{"year":2013,"month":9,"backlogDelta":-6,"influx":70,"time":"2013-09-01","backlog":23},{"year":2013,"month":10,"backlogDelta":9,"influx":66,"time":"2013-10-01","backlog":32},{"year":2013,"month":11,"backlogDelta":-6,"influx":70,"time":"2013-11-01","backlog":26},{"year":2013,"month":12,"backlogDelta":-7,"influx":70,"time":"2013-12-01","backlog":19},{"year":2014,"month":1,"backlogDelta":10,"influx":72,"time":"2014-01-01","backlog":29},{"year":2014,"month":2,"backlogDelta":2,"influx":64,"time":"2014-02-01","backlog":31},{"year":2014,"month":3,"backlogDelta":6,"influx":69,"time":"2014-03-01","backlog":37},{"year":2014,"month":4,"backlogDelta":-10,"influx":66,"time":"2014-04-01","backlog":27},{"year":2014,"month":5,"backlogDelta":8,"influx":67,"time":"2014-05-01","backlog":35},{"year":2014,"month":6,"backlogDelta":5,"influx":69,"time":"2014-06-01","backlog":40},{"year":2014,"month":7,"backlogDelta":5,"influx":69,"time":"2014-07-01","backlog":45},{"year":2014,"month":8,"backlogDelta":-8,"influx":68,"time":"2014-08-01","backlog":37},{"year":2014,"month":9,"backlogDelta":9,"influx":65,"time":"2014-09-01","backlog":46},{"year":2014,"month":10,"backlogDelta":4,"influx":68,"time":"2014-10-01","backlog":50},{"year":2014,"month":11,"backlogDelta":-15,"influx":66,"time":"2014-11-01","backlog":35},{"year":2014,"month":12,"backlogDelta":3,"influx":70,"time":"2014-12-01","backlog":38},{"year":2015,"month":1,"backlogDelta":6,"influx":68,"time":"2015-01-01","backlog":44},{"year":2015,"month":2,"backlogDelta":8,"influx":62,"time":"2015-02-01","backlog":52},{"year":2015,"month":3,"backlogDelta":7,"influx":70,"time":"2015-03-01","backlog":59},{"year":2015,"month":4,"backlogDelta":5,"influx":64,"time":"2015-04-01","backlog":64},{"year":2015,"month":5,"backlogDelta":9,"influx":68,"time":"2015-05-01","backlog":73},{"year":2015,"month":6,"backlogDelta":2,"influx":68,"time":"2015-06-01","backlog":75},{"year":2015,"month":7,"backlogDelta":-7,"influx":66,"time":"2015-07-01","backlog":68},{"year":2015,"month":8,"backlogDelta":7,"influx":69,"time":"2015-08-01","backlog":75},{"year":2015,"month":9,"backlogDelta":8,"influx":64,"time":"2015-09-01","backlog":83},{"year":2015,"month":10,"backlogDelta":6,"influx":71,"time":"2015-10-01","backlog":89},{"year":2015,"month":11,"backlogDelta":-8,"influx":65,"time":"2015-11-01","backlog":81},{"year":2015,"month":12,"backlogDelta":5,"influx":69,"time":"2015-12-01","backlog":86},{"year":2016,"month":1,"backlogDelta":3,"influx":69,"time":"2016-01-01","backlog":89},{"year":2016,"month":2,"backlogDelta":-9,"influx":62,"time":"2016-02-01","backlog":80},{"year":2016,"month":3,"backlogDelta":-11,"influx":71,"time":"2016-03-01","backlog":69},{"year":2016,"month":4,"backlogDelta":3,"influx":65,"time":"2016-04-01","backlog":72},{"year":2016,"month":5,"backlogDelta":-10,"influx":68,"time":"2016-05-01","backlog":62},{"year":2016,"month":6,"backlogDelta":-9,"influx":66,"time":"2016-06-01","backlog":53},{"year":2016,"month":7,"backlogDelta":8,"influx":75,"time":"2016-07-01","backlog":61},{"year":2016,"month":8,"backlogDelta":-5,"influx":72,"time":"2016-08-01","backlog":56},{"year":2016,"month":9,"backlogDelta":15,"influx":65,"time":"2016-09-01","backlog":71},{"year":2016,"month":10,"backlogDelta":7,"influx":70,"time":"2016-10-01","backlog":78},{"year":2016,"month":11,"backlogDelta":-4,"influx":67,"time":"2016-11-01","backlog":74},{"year":2016,"month":12,"backlogDelta":7,"influx":73,"time":"2016-12-01","backlog":81},{"year":2017,"month":1,"backlogDelta":-7,"influx":66,"time":"2017-01-01","backlog":74},{"year":2017,"month":2,"backlogDelta":3,"influx":65,"time":"2017-02-01","backlog":77},{"year":2017,"month":3,"backlogDelta":-8,"influx":74,"time":"2017-03-01","backlog":69},{"year":2017,"month":4,"backlogDelta":-5,"influx":69,"time":"2017-04-01","backlog":64},{"year":2017,"month":5,"backlogDelta":-5,"influx":68,"time":"2017-05-01","backlog":59},{"year":2017,"month":6,"backlogDelta":7,"influx":67,"time":"2017-06-01","backlog":66},{"year":2017,"month":7,"backlogDelta":-4,"influx":71,"time":"2017-07-01","backlog":62},{"year":2017,"month":8,"backlogDelta":1,"influx":35,"time":"2017-08-01","backlog":63}]

var jsondata = [{"time":0,"strata_1":1,"strata_2":1,"strata_3":1,"strata_4":1},{"time":5,"strata_1":0.9202},{"time":6,"strata_1":0.8193},{"time":7,"strata_1":0.7395},{"time":8,"strata_1":0.6513},{"time":9,"strata_1":0.5714},{"time":10,"strata_1":0.4958,"strata_2":0.9077},{"time":11,"strata_1":0.4034,"strata_2":0.7675},{"time":12,"strata_1":0.3655,"strata_2":0.6716},{"time":13,"strata_1":0.3067,"strata_2":0.572},{"time":14,"strata_1":0.2647,"strata_2":0.5129},{"time":15,"strata_1":0.2395,"strata_2":0.4354,"strata_3":0.9215},{"time":16,"strata_1":0.2143,"strata_2":0.3838,"strata_3":0.7934},{"time":17,"strata_1":0.1891,"strata_2":0.3506,"strata_3":0.7066},{"time":18,"strata_1":0.1513,"strata_2":0.2915,"strata_3":0.6364},{"time":19,"strata_1":0.1134,"strata_2":0.2472,"strata_3":0.5413},{"time":20,"strata_1":0.1008,"strata_2":0.1993,"strata_3":0.4215,"strata_4":0.9496},{"time":21,"strata_1":0.0924,"strata_2":0.1328,"strata_3":0.3636,"strata_4":0.8067},{"time":22,"strata_1":0.084,"strata_2":0.1144,"strata_3":0.3058,"strata_4":0.7017},{"time":23,"strata_1":0.0756,"strata_2":0.0886,"strata_3":0.281,"strata_4":0.584},{"time":24,"strata_1":0.063,"strata_2":0.0849,"strata_3":0.2355,"strata_4":0.5},{"time":25,"strata_1":0.0588,"strata_2":0.0554,"strata_3":0.2107,"strata_4":0.416},{"time":26,"strata_1":0.0504,"strata_2":0.0369,"strata_3":0.1818,"strata_4":0.3739},{"time":27,"strata_1":0.0378,"strata_2":0.0258,"strata_3":0.1529,"strata_4":0.3067},{"time":28,"strata_1":0.0252,"strata_2":0.0185,"strata_3":0.1198,"strata_4":0.2437},{"time":29,"strata_1":0.0168,"strata_2":0.0111,"strata_3":0.1157,"strata_4":0.2143},{"time":30,"strata_1":0.0126,"strata_3":0.1033,"strata_4":0.1723},{"time":31,"strata_1":0.0084,"strata_2":0.0074,"strata_3":0.0826,"strata_4":0.1639},{"time":32,"strata_1":0.0042,"strata_2":0.0037,"strata_3":0.0744,"strata_4":0.1303},{"time":33,"strata_1":0,"strata_3":0.0661,"strata_4":0.0924},{"time":34,"strata_3":0.0579,"strata_4":0.0756},{"time":35,"strata_2":0,"strata_3":0.0496,"strata_4":0.0714},{"time":36,"strata_3":0.0331,"strata_4":0.0504},{"time":37,"strata_3":0.0289,"strata_4":0.042},{"time":38,"strata_3":0.0248,"strata_4":0.0336},{"time":39,"strata_3":0.0207,"strata_4":0.021},{"time":40,"strata_3":0.0165,"strata_4":0.0168},{"time":41,"strata_3":0.0083},{"time":42,"strata_3":0,"strata_4":0.0126},{"time":44,"strata_4":0.0042},{"time":46,"strata_4":0}]

var data = backlog;

// rescale pane 1
x_date.domain(d3.extent(data, function(d) { return parseTime(d.time); }));

y_backlog.domain(
  [
  0, 
  d3.max(data, function(d) { return d.backlog; })
  ]
  ).nice();

// update line generator
var line = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog); });

var line_influx = d3.line()
    .x(function(d) { return x_date(parseTime(d.time)); })
    .y(function(d) { return y_backlog(d.backlog/3+ 20); });

d3.selectAll(".axis--x_date")
  .transition()
  .call(d3.axisBottom(x_date))

d3.selectAll(".axis--y_backlog")
  .call(d3.axisLeft(y_backlog))

d3.selectAll(".liness")
    .datum(data)
    .transition()
    .attr("d", line)

d3.selectAll(".line_influx")
    .datum(data)
    .transition()
    .attr("d", line_influx)

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
        })

// ----------------------------------------------------------------------------------
  // survival line 
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

  x2.domain(d3.extent(jsondata, function(d) { return d.time; }));

  y2.domain([
    d3.min(stratas, function(s) { return d3.min(s.vals, function(d) { return d.surv; }); }),
    d3.max(stratas, function(s) { return d3.max(s.vals, function(d) { return d.surv; }); })
    ]);

  z2.domain(stratas.map(function(s) { return s.id; }));

/*
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
*/
/*
  var survline = g2.selectAll(".survline")
   .data(stratas)
   .enter().append("g")
     .attr("class", "survline");
*/
  d3.selectAll(".survline").remove()

  var survline = g2.selectAll(".survline")
   .data(stratas)
   .enter().append("g")
     .attr("class", "survline");

  survline.append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line2(d.vals); })
    .style("stroke", function(d) { return z2(d.id); });
  }

}
