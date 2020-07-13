
const svg = d3.select(".canvas")
    .append('svg')
    .attr('width', 600)
    .attr('height', 600);

const margin = {top:20, right:20, bottom:100, left:100}
const diagramWidth = 600 - margin.left - margin.right;
const diagramHeight = 600 - margin.bottom - margin.top;

d3.json('food.json').then (data=>{

  const rectangles = svg.selectAll('rect')
    .data(data)

    const min = d3.min(data, d => d.orders);
    const max = d3.max(data, d => d.orders);
    const y = d3.scaleLinear()
      .domain([0,1000])
      .range([0,500]);
     

    const x = d3.scaleBand()
      .domain(data.map(item => item.name))
      .range([0,500])
      .paddingInner(0.2)
      .paddingOuter(0.2);
    

    rectangles.attr('width', x.bandwidth)
      .attr('height', d=>y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name));

    rectangles.enter()
      .append('rect')
      .attr('width',x.bandwidth)
      .attr('height', d=>y(d.orders))
      .attr('fill', 'orange')
      .attr('x',(d) => x(d.name));

})

  