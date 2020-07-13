const data = [
  {width:280, height:150, fill:'purple'}
]

const svg = d3.select("svg");

svg.select('rect')
  .attr ('height', 500)
  .attr ('width', 500)
  .attr ('fill', 'blue');
  
