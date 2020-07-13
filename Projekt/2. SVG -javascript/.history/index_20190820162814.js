const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
  .attr ('height', 500)
  .attr ('width', 500);
  
const group = svg.append('g');
 group.append('line')
  .attr('x1',340)
  .attr('y1',390)
  .attr('x2',20)
  .attr('y2',130)
  .attr('stroke','green');
  
group.append('circle')
  .attr('r',50)
  .attr('cx',300)
  .attr('cy',100)
  .attr('fill','purple'); 

svg.append('text')
  .attr('x',20)
  .attr('y',700)
  .attr('fill','purple')
  .text('Hello!! I am SVG text')
  .style('font-style','italic');
