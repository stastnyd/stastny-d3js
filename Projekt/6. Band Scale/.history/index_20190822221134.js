const data = [
  {width:280, height:150, fill:'purple'}
]

const svg = d3.select("svg");

svg.select('rect')
  .data(data)
  .attr ('height', (d,i,n)=>{
    console.log('Ovo je this iz arrow funkcije',this)
    return d.height;})
  .attr ('width', function(d){
    console.log('Ovo je this iz funkcije',this)
    return d.width})
  .attr ('fill', function(d){return d.fill});

  
