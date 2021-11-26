import React, { useEffect, useState } from 'react';
import customData from '../org-Chart/orgData.json';
import  OrgChartComponent  from '../org-Chart/OrgChartComponent';

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
        <OrgChartComponent
          onNodeClick={onNodeClick}
          data={orgData}
        />
      </div>
    );
};

export default HomeComponent
