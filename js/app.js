// @TODO: YOUR CODE HERE!

// svg container
var svgHeight = 400;
var svgWidth = 400;

// create the margins of the graph
var margin = {top: 10,right: 30,bottom: 30,left: 60};
var chartWidth = svgWidth - margin.left - margin.rightm;
var chartHeight = svgHeight - margin.top - margin.bottom;

// create svg container
var svg = d3.select("scatter").append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);



// loading in the data from data.csv file
d3.csv("/data/data.csv").then(function(censusData) {
    // console.log the data to make sure it is loading in succesfully
    console.log(censusData);

    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, 4000])
        .range([ 0, chartWidth ]);
    svg.append("g")
        .attr("transform", "translate(0," + chartHeight + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 500000])
        .range([ chartHeight, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

});

