import React, { useEffect, useState } from 'react';
import customData from '../org-Chart/orgData.json';
import  OrgChartComponent  from '../org-Chart/OrgChartComponent';
import GlobalTableComponent from '../Table/GlobalTableComponent';

const HomeComponent = (props, ref) => {
    const [orgData, setData] = useState(customData);

  
    function onNodeClick(nodeId) {
      console.log('clicked ', nodeId);
    }
  
    useEffect(() => {
        setData({orgData: customData});
    }, []);

    return (
      <div>
        {/* <OrgChartComponent
          onNodeClick={onNodeClick}
          data={orgData}
        /> */}
        <GlobalTableComponent/>
      </div>
    );
};

export default HomeComponent
