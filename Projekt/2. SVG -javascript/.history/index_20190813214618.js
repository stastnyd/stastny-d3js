const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
  .attr ('height', 500)
  .attr ('width', 500);

svg.append('line');
svg.append('circle')
  .attr('r',40)
  .attr('cx',350)
  .attrž('cy',70);

