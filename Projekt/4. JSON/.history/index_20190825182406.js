const data = [
  {width:360, height:200, fill:'purple'},
  {width:200, height:150, fill:'green'},
  {width:100, height:90, fill:'red'},
  {width:50, height:30, fill:'yellow'},
]

const svg = d3.select("svg");

const rectangles = svg.selectAll('rect')
  .data(data)
  .attr ('height', (d) =>{  return d.height;})
  .attr ('width', (d) => {return d.width})
  .attr ('fill', (d) => {return d.fill});

 rectangles.enter();
    append('rect')

  
