// @TODO: YOUR CODE HERE!

// svg container
var svgHeight = 500;
var svgWidth = 900;

// create the margins of the graph
var margin = {top: 20,right: 40,bottom: 80,left: 100};

var chartWidth = svgWidth - margin.left - margin.right;
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

    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d.poverty) - 1, d3.max(censusData, d => d.poverty) + 1])
        .range([0, chartWidth]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d.healthcare) - 1, d3.max(censusData, d => d.healthcare)+1])
        .range([chartHeight, 0]);

    //Create x and y axis
    var xAxis = d3.axisBottom(xLinearScale);
    var yAxis = d3.axisLeft(yLinearScale);


    //Append x and y axis to the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(xAxis);
    chartGroup.append("g")
        .call(yAxis);

    // create the circles from the poverty and healthcare data points
    var dataPoints = chartGroup.selectAll("circle")
        .data(censusData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .attr("r", 15)
        .attr("fill", "blue")
        .attr("opacity", ".5")
        .attr("stroke", "black")
    
    // creating the labels for each state
    var labels = chartGroup.select("g")
        .selectAll("circle")
        .data(censusData)
        .enter()
        .append("text")
        .text(d => d.abbr)
        .attr("dy",-395)
        .attr("x", d => xLinearScale(d.poverty))
        .attr("y", d => yLinearScale(d.healthcare))
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "black");

    // create labels for the axis
    var xLabel = chartGroup.
});

