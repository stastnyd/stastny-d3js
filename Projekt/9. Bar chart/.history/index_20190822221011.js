const data = [
  {width:280, height:150, fill:'purple'}
]

const svg = d3.select("svg");

svg.select('rect')
  .data(data)
  .attr ('height', (d,i,n)=>{
    console.log(this)
    return d.height;})
  .attr ('width', function(d){
    console.log(this)
    return d.width})
  .attr ('fill', function(d){return d.fill});

  
