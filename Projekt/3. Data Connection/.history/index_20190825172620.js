const data = [
  {width:360, height:150, fill:'purple'},
  {width:200, height:150, fill:'green'},
  {width:300, height:150, fill:'red'},
  {width:350, height:200, fill:'yellow'},
]

const svg = d3.select("svg");

svg.selectAll('rect')
  .data(data)
  .attr ('height', (d) =>{  return d.height;})
  .attr ('width', (d) => {return d.width})
  .attr ('fill', (d) => {return d.fill});

  
