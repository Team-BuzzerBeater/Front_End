import React, {Component} from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Sketch extends Component{
    componentDidMount() {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
  
      chart.paddingRight = 20;
  
      chart.data = [{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      },{
        "ax": Math.random() * 20,
        "ay": Math.random() * 20,
        "ar": 5 + Math.random() * Math.random() * 15,
        "ag": Math.random() < 0.3 ? "red" : "purple",
      }];
  
      // Create axes
      var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxisX.title.text = 'X Axis';
      valueAxisX.renderer.minGridDistance = 40;
      valueAxisX.renderer.grid.template.strokeOpacity = 0;

      // Create value axis
      var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxisY.title.text = 'Y Axis';
      valueAxisY.renderer.grid.template.strokeOpacity = 0;
      
      // Create series
      var lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.valueY = "ay";
      lineSeries.dataFields.valueX = "ax";
      lineSeries.strokeOpacity = 0;
  
      // Add a bullet
      var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      bullet.circle.propertyFields.radius = "ar";
      bullet.circle.propertyFields.fill = "ag";
      bullet.circle.horizontalCenter="middle";
      bullet.circle.verticalCenter="middle";

      var gBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
      gBullet.label.text = "[bold font-size: 22px]G";
      gBullet.label.horizontalCenter="middle";
      gBullet.label.verticalCenter="middle";
  
      this.chart = chart;
    }
  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
    render(){
      return (
        <div id="chartdiv" style={{ marginLeft: "15%", marginRight: "15%", marginTop:"20px", width: "70%", height: "600px"}}/>
      )
    }
}


export default Sketch;