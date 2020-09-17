import React, {Component} from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Textbar extends Component{
  componentDidMount() {
    this.initChart();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.playerIdx !== this.props.playerIdx) {
      if(this.chart){
        this.chart.dispose();
      }
      this.initChart();
    }
  }
  
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  initChart(){
    const { playerIdx } = this.props;
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chart"+playerIdx,am4charts.XYChart);

    chart.paddingRight = 20;
    chart.background.setFill("white");

    let data = [];
    let round = 0, total = 0;
    for (let i = 1; i <= 38; i++){
      round = Math.pow(Math.random(),3) +Math.pow(Math.random(),3)+Math.pow(Math.random(),3)+Math.pow(Math.random(),3);
      total += round;
      data.push({round: i, value: round, total: total});
    }
    chart.data = data;

    // Create axes
    var categoryAxisX = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxisX.dataFields.category = "round";
    categoryAxisX.renderer.minGridDistance = 40;
    categoryAxisX.renderer.grid.template.strokeOpacity = 0;

    // Create value axis
    var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.renderer.grid.template.strokeOpacity = 0;

    // Second value axis
    var valueAxisY2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY2.renderer.opposite = true;
    valueAxisY2.renderer.grid.template.strokeOpacity = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "total";
    lineSeries.dataFields.categoryX = "round";
    lineSeries.strokeWidth = 15;
    lineSeries.stroke = am4core.color("orange");
    lineSeries.yAxis = valueAxisY2;

    var lineSeries2 = chart.series.push(new am4charts.ColumnSeries());
    lineSeries2.dataFields.valueY = "value";
    lineSeries2.dataFields.categoryX = "round";

    this.chart = chart;
  }
  render(){
    return (
      <div id={"chart"+this.props.playerIdx} style={{ marginLeft: "15%", marginRight: "15%",marginTop:"20px", width: "70%", height: "90vh"}}/>
    )
  }
}

export default Textbar;