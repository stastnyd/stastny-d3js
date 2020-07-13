const data = [
  {width:280, height:150, fill:'purple'}
]

const svg = d3.select("svg");

svg.select('rect')
  .data(data)
  .attr ('height', function(d){
    console.log(d);
  })
  .attr ('width', 500)
  .attr ('fill', 'blue');

  
