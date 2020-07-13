const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
  .attr ('height', 500)
  .attr ('width', 500);

svg.append('line');
svg.append('circle')
  .attr('r',50)
  .attr('cx',300)
  .attr('cy',100)
  .attr('fill',purple)
  ;

