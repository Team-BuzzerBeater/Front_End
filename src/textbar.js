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
    console.log(this.props.data);
    chart.paddingRight = 20;
    chart.background.setFill("white");

    
    let data = [];
    let round = 0, total = 0, max = 0, min = 9999;
    let shootdata = this.props.data.filter(
      (shots)=>(
        shots.shootIdx > 33789
      )
    );
     // 33789는 DB의 2019 마지막 데이터 shootidx
    for (let item in shootdata){
      min = Math.min(min,shootdata[item].round);
      max = Math.max(max,shootdata[item].round);
    }
    min = parseInt((min-1)/6);
    max = parseInt((max-1)/6)+1;
    for (let i = min; i < max; i++){
      let roundData = shootdata.filter(
        (shots) => (
          parseInt((shots.round-1)/6) == i
        )
      );
      round = i + 1;
      let value = 0, result = 0;
      roundData.forEach(
        element => {
        value += element.xG;
        result += element.result;
      });
      total += value;
      data.push({round: round, value: value, total: total, result: result});
    }
    console.log(data);
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
    lineSeries.strokeWidth = 5;
    lineSeries.stroke = am4core.color("#143959"); // 누적
    lineSeries.yAxis = valueAxisY2;
    lineSeries.name = "누적 기대득점";
    

    var lineSeries2 = chart.series.push(new am4charts.ColumnSeries());
    lineSeries2.dataFields.valueY = "value";
    lineSeries2.dataFields.categoryX = "round";
    lineSeries2.fill = am4core.color("#2B678C"); // 라운드별
    lineSeries2.name = "라운드별 기대득점";

    var lineSeries3 = chart.series.push(new am4charts.LineSeries());
    lineSeries3.dataFields.valueY = "result";
    lineSeries3.dataFields.categoryX = "round";
    lineSeries3.stroke = am4core.color("orange"); //득점 라인
    lineSeries3.strokeWidth = 3;
    lineSeries3.strokeOpacity = 1;
    lineSeries3.data = chart.data;
    lineSeries3.name = "라운드별 득점";

    
    var gBullet = lineSeries3.bullets.push(new am4charts.CircleBullet());
    gBullet.circle.fill = am4core.color("orange"); // 득점 
    gBullet.circle.radius = 5;
    gBullet.circle.stroke = am4core.color("#73523F"); // 득점 테두리
    gBullet.circle.strokeWidth = 2;
    gBullet.circle.opacity = 1;
    
    chart.legend = new am4charts.Legend();

    this.chart = chart;
  }
  render(){
    return (
      <div id={"chart"+this.props.playerIdx} style={{ marginLeft: "15%", marginRight: "15%",marginTop:"20px", width: "70%", height: "90vh"}}/>
    )
  }
}

export default Textbar;