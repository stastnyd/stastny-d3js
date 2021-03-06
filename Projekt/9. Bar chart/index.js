// selektiranje svg elementa
const svg = d3
	.select('.canvas')
	.append('svg')
	.attr('width', 700)
	.attr('height', 700);

// kreiranje margina
const margin = { top: 25, right: 25, bottom: 110, left: 110 };
const diagramWidth = 700 - margin.left - margin.right;
const diagramHeight = 700 - margin.top - margin.bottom;

const diagram = svg
	.append('g')
	.attr('width', diagramWidth)
	.attr('height', diagramHeight)
	.attr('transform', `translate(${margin.left}, ${margin.top})`);

// kreiranje osi i grupiranje osi
const xAxisGroup = diagram
	.append('g')
	.attr('transform', `translate(0, ${diagramHeight})`);

xAxisGroup
	.selectAll('text')
	.attr('fill', 'green')
	.attr('transform', 'rotate(-40)')
	.attr('text-anchor', 'end');

const yAxisGroup = diagram.append('g');

const y = d3.scaleLinear().range([diagramHeight, 0]);

const x = d3
	.scaleBand()
	.range([0, diagramWidth])
	.paddingInner(0.2)
	.paddingOuter(0.2);

const xAxis = d3.axisBottom(x);
const yAxis = d3
	.axisLeft(y)
	.ticks(3)
	.tickFormat((d) => d + ' orders');

// Funkcija za ažuriranje podataka
const update = (data) => {
	//1.KORAK pridruzivanje podataka pravokutnicima
	const rects = diagram.selectAll('rect').data(data);
	//2. KORAK --- uklanjanje podataka kojih nema u bazi
	rects.exit().remove();

	//3. KORAK --- Azuriranje domena
	y.domain([0, d3.max(data, (d) => d.orders)]);
	x.domain(data.map((item) => item.name));

	//4. KORAK --- Dodavanje atributa i oblikovanje elemenat koji postoje
	rects.attr('width', x.bandwidth)
		.attr('height', (d) => diagramHeight - y(d.orders))
		.attr('fill', 'green')
		.attr('x', (d) => x(d.name))
		.attr('y', (d) => y(d.orders));

	//5. KORAK --- Dodavanje atributa i oblika elemenata koji ce se tek pojaviti
	rects.enter()
		.append('rect')
		.attr('width', x.bandwidth)
		.attr('height', (d) => diagramHeight - y(d.orders))
		.attr('fill', 'green')
		.attr('x', (d) => x(d.name))
		.attr('y', (d) => y(d.orders));

	xAxisGroup.call(xAxis);
	yAxisGroup.call(yAxis);
};

var data = [];

db.collection('food').onSnapshot((res) => {
	res.docChanges().forEach((change) => {
		const doc = { ...change.doc.data(), id: change.doc.id };

		switch (change.type) {
			case 'added':
				data.push(doc);
				break;
			case 'modified':
				const index = data.findIndex((item) => item.id == doc.id);
				data[index] = doc;
				break;
			case 'removed':
				data = data.filter((item) => item.id !== doc.id);
				break;
			default:
				break;
		}
	});

	update(data);
});
