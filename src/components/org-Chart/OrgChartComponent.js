import React, {  useLayoutEffect, useRef } from 'react';
import TreeChart from "d3-org-chart";

const OrgChartComponent = (props, ref) => {
    const d3Container = useRef(null);
    let chart = null;
  
    useLayoutEffect(() => {
        console.log('Props', props);
        const orgData =  props.data?.orgData ?? props.data;
      if (orgData && d3Container.current) {
        if (!chart) {
          chart = new TreeChart();
        }
        chart
          .container(d3Container.current)
          .data(orgData)
          .svgWidth(2)
          .initialZoom(0.5)
          .onNodeClick(d => {
            console.log(d + " node clicked");
            console.log("props", Object.keys(props), d);
            props.onNodeClick(d);
          })
          .render();
      }
    }, [props.data, d3Container.current]);
  
    return (
      <div className='org-chart'>
        <div ref={d3Container} />
      </div>
    );
};


export default OrgChartComponent;
