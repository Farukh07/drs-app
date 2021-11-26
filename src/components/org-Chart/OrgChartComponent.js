import React, {  useLayoutEffect, useRef } from 'react';
import TreeChart from "d3-org-chart";

const OrgChartComponent = (props, ref) => {
    const d3Container = useRef(null);
    let chart = null;
  
    useLayoutEffect(() => {
        debugger;
        console.log('Props', props);
        const orgData =  props.data?.orgData ?? props.data;
      if (orgData && d3Container.current) {
        if (!chart) {
          chart = new TreeChart();
        }
        chart
          .container(d3Container.current)
          .data(orgData)
          .svgWidth(500)
          .initialZoom(0.4)
          .onNodeClick(d => {
            console.log(d + " node clicked");
            console.log("props", Object.keys(props), d);
            props.onNodeClick(d);
          })
          .render();
      }
    }, [props.data, d3Container.current]);
  
    return (
      <div>
        <div ref={d3Container} />
      </div>
    );
};


export default OrgChartComponent;
