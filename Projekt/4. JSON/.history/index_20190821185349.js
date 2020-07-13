const data = [
  {width:280, height:150, fill:'purple'}
]

const svg = d3.select("svg");

svg.select('rect')
  .data(data)
  .attr ('height', function(d){return d.height;})
  .attr ('width', function(d){return d.width})
  .attr ('fill', function(d){return d.fill});

  
