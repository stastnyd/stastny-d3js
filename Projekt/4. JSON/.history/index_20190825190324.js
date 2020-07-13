
const svg = d3.select("svg");

d3.json('circles.json').then (data=>{

  const circles = svg.selectAll('circle')
    .data(data);

    circles.attr('cy',400)
    .attr('cx', d=>d.distance)
    .attr('r', d=>d.radius)
    .attr('fill', d=>d.fill);

    circles.enter()
    .append('circle')
    .attr('cy',400)
    .attr('cx', d=>d.distance)
    .attr('r', d=>d.radius)
    .attr('fill', d=>d.fill);


})

  
