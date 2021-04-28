// @TODO: YOUR CODE HERE!

// svg container
var svgHeight = 900;
var svgWidth = 500;

// create the margins of the graph
var margin = {top: 20,right: 40,bottom: 60,left: 100};
var chartWidth = svgWidth - margin.left - margin.rightm;
var chartHeight = svgHeight - margin.top - margin.bottom;

// create svg container
var svg = d3.select("#scatter").append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);



// loading in the data from data.csv file
d3.csv("/data/data.csv").then(function(censusData) {
    // console.log the data to make sure it is loading in succesfully
    console.log(censusData);

    // parse the data
    censusData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

    // creating the scales and axis from the dataset
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(censusData[9])])
        .range([chartHeight, 0])
});

