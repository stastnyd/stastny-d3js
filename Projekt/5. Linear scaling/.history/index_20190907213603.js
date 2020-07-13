
const svg = d3.select("svg");

d3.json('food.json').then (data=>{

  const rectangles = svg.selectAll('rect')
    .data(data);

    rectangles.attr('width',50)
    .attr('height', d=>d.orders)
    .attr('fill', 'orange')
    .attr('x', (d,i)=>i*70);

    rectangles.enter()
      .append('rect')
      .attr('width',50)
      .attr('height', d=>d.orders)
    .attr('fill', 'orange')
    .attr('x', (d,i)=>i*70);


})

  
