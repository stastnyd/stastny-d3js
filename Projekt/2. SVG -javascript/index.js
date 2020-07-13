/* const selected = d3.select("div");
console.log('Selected elements', selected);

const selectAll = d3.selectAll("div");
console.log('Selected elements', selectAll); */

const canvas = d3.select(".canvas");
//const svg = canvas.append('svg');

/* svg.append('rect');
svg.append('line');
svg.append('circle'); */

const svg = canvas
  .append("svg")
  .attr("height", 500)
  .attr("width", 500);

const group = svg.append("g");
group
  .append("line")
  .attr("x1", 40)
  .attr("y1", 320)
  .attr("x2", 350)
  .attr("y2", 320)
  .attr("stroke", "green");

group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("fill", "purple");
group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 190)
  .attr("cy", 200)
  .attr("fill", "black");
group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 100)
  .attr("fill", "purple");

/* svg.append('text')
  .attr('x',20)
  .attr('y',700)
  .attr('fill','purple')
  .text('Hello!! I am SVG text')
  .style('font-style','italic'); */
