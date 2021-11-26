import React, { Component } from 'react';
import * as am5 from "../../../node_modules/@amcharts/amcharts5";
import * as am5percent from "../../../node_modules/@amcharts/amcharts5/percent";
import am5themes_Animated from "../../../node_modules/@amcharts/amcharts5/themes/Animated";


class ReviewComponent extends Component {

  componentDidMount() {
    am5.ready(function() {

      // Create root element
      var root = am5.Root.new("chartdiv");
      
      
      // Set themes
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      
      // Create chart
      var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
        radius: am5.percent(60)
      }));
      
      
      // Create series
      var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      }));
      
      series.labels.template.setAll({
        // textType: "circular",
        fontSize: 10,
        centerX: 0,
        centerY: 0
      });
      
      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll([
        { value: 10, category: "Not Started" },
        { value: 4, category: "Completed" },
        { value: 6, category: "In Progress" },
        { value: 2, category: "Post Review" },
      ]);
      
      
      // Create legend
      var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(5),
        x: am5.percent(25),
        marginTop: 5,
        marginBottom: 5,
      }));

      legend.markers.template.setAll({
        width: 10,
        height: 10,
      });

      legend.labels.template.setAll({
        fontSize: 10,
      });

      legend.valueLabels.template.setAll({
        fontSize: 10
      })
      
      legend.data.setAll(series.dataItems);
      
      
      // Play initial series animation
      series.appear(1000, 100);
      
      }); 
  }

    render() {
        return (
          <div className='card'>
          <div className='review-main'>
              <div className="quater-row">
                <div className="title-row">
                  Q1 - 2020 
                  <span>ONGOING</span>
                </div>
                <div className="period-row" >
                  Jan 01, 2021 - Mar 31,2021
                </div>
                <span className='view-review'>View/Manage Reviews</span>
              </div>
                <div id="chartdiv"></div>
                
          </div>
          </div>
        );
    }
}

export default ReviewComponent;