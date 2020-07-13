const svg = d3
  .select(".canvas")
  .append("svg")
  .attr("width", 600)
  .attr("height", 600);

const margin = { top: 20, right: 20, bottom: 100, left: 100 };
const diagramWidth = 600 - margin.left - margin.right;
const diagramHeight = 600 - margin.bottom - margin.top;

const diagram = svg
  .append("g")
  .attr("width", diagramWidth)
  .attr("height", diagramHeight)
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const xGroupAxis = diagram
  .append("g")
  .attr("transform", `translate(0,${diagramHeight})`);
const yGroupAxis = diagram.append("g");

d3.json("food.json").then(data => {
  const rectangles = diagram.selectAll("rect").data(data);
  const y = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([diagramHeight, 0]);

  const x = d3
    .scaleBand()
    .domain(data.map(item => item.name))
    .range([0, 500])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  rectangles
    .attr("width", x.bandwidth)
    .attr("height", d => diagramHeight - y(d.orders))
    .attr("fill", "orange")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.orders));

  rectangles
    .enter()
    .append("rect")
    .attr("width", x.bandwidth)
    .attr("height", d => diagramHeight - y(d.orders))
    .attr("fill", "orange")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.orders));

  const xAxis = d3.axisBottom(x);
  const yAxis = d3
    .axisLeft(y)
    .ticks(5)
    .tickFormat(d => d + " orders");
  xGroupAxis.call(xAxis);
  yGroupAxis.call(yAxis);

  xGroupAxis.selectAll('text')
    .attr('transform','rotate(-40)')
    .attr('text-anchor', 'end')
});
