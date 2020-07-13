
const svg = d3.select("svg");

d3.json('food.json').then (data=>{

  const rectangles = svg.selectAll('rect')
    .data(data);

    const y = d3.scaleLinear()
      .domain([0,1000])
      .range([0,500]);

    rectangles.attr('width',50)
      .attr('height', d=>y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d,i)=>i*70);

    rectangles.enter()
      .append('rect')
      .attr('width',50)
      .attr('height', d=>y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d,i)=>i*70);

})

  
