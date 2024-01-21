import * as d3 from "d3";



export const ProgressChart = () => {
  const margin = { top: 40, right: 30, bottom: 40, left: 80 };
  const width = 400 - margin.left - margin.right;
  const height = 320 - margin.top - margin.bottom;

  const dataset = [
    { month: 2, value: 3 },
    { month: 3, value: 5 },
    { month: 4, value: 6 },
    { month: 5, value: 8 },
    { month: 6 , value: 4 },
  ]

  const x= d3.scaleLinear().range([0, width])
  const y= d3.scaleLinear().range([height, 0])

  const xScale = d3.scalePoint().range([0, width])
  const yScale= d3.scalePoint().range([height, 0])

  xScale.domain(dataset.map(d=>d.month))
  yScale.domain(d3.sort(d3.range(d3.extent(dataset, d => d.value)[0], d3.extent(dataset, d => d.value)[1] + 1)))



  const svg = d3.select('#chart-container')
    .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 400 320')
      .style('display', 'inline-block')
      .style('position', 'absolute')
      .style('top', `${-height + margin.top + margin.bottom}px`)
      .style('left', '0px')
    .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)


  x.domain(d3.extent(dataset, d => d.month))
  y.domain(d3.extent(dataset, d => d.value))


  svg.append("g")
    .attr('transform', `translate(0, ${height + 10})`)
    .style('font-size', '14px')
    .style('font-family', 'Inter')
    .style('font-weight', '600')
    .call(d3.axisBottom(xScale)
      .tickFormat((d) => {
        var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[d];
      })
    )
    .call(g => g.select(".domain").remove())
    .selectAll('.tick line')
    .style('stroke-opacity', 0)

  svg.append('g')
    .attr('transform','translate(-40, 0)')
    .style('font-size', '14px')
    .style('font-family', 'Inter')
    .style('font-weight', '600')
    .call(d3.axisLeft(yScale)
      .tickFormat(d3.format('d'))
    )
    .call(g => g.select(".domain").remove())
    .selectAll('.tick line')
    .style('stroke-opacity', 0)


  svg.selectAll('.xGrid')
    .data(dataset.map(d=>d.month))
    .join('line')
    .attr('class', 'xGrid')
    .attr('x1', d=>xScale(d))
    .attr('x2', d=>xScale(d))
    .attr('y1', 0 -5)
    .attr('y2', height)
    .attr('stroke', '#f5f5f7')
    .attr('stroke-width', 1.5)

  const line = d3.line()
    .x(d => xScale(d.month))
    .y(d => yScale(d.value))

  svg.append('path')
    .datum(dataset)
    .attr('fill', 'none')
    .attr('stroke', '#141522')
    .attr('stroke-width', 2)
    .attr('d', line)


  return (
    <div className='w-[400px] h-[320px] flex items-center justify-center'>
      <div id='chart-container' className='relative inline-block w-full overflow-visible'>
      </div>
    </div>
  )
}
