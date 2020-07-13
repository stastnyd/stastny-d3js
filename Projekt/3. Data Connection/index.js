const data = [
  {width:360, height:200, fill:'purple'},
  {width:200, height:120, fill:'red'},
  {width:100, height:60, fill:'green'},
  {width:90, height:50, fill:'blue'},
  {width:80, height:40, fill:'yellow'}
]

const svg = d3.select("svg");
const rectangles = svg.selectAll('rect')
  .data(data)
  .attr('height', function(d){return d.height})
  .attr('width', function(d){return d.width})
  .attr('fill', function(d){return d.fill});
console.log('Pravokutnici',rectangles);

rectangles.enter()
  .append('rect')
  .attr('height', function(d){return d.height})
  .attr('width', function(d){return d.width})
  .attr('fill', function(d){return d.fill});

// svg.select('rect')
//   .data(data)
//   .attr('height',(d,i,n)=> {
//     console.log('Ovo je iz this iz arrow funkcije', n[i]);
//     return d.height;
//   })
//   .attr('width', function(d,i,n) {
//     console.log('Ovo je iz this iz funkcije', this);
//     return d.width;
//   })
//   .attr('fill', function(d) {return d.fill});



