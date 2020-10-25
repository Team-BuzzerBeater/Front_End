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
    let round = 0, total = 0;
    for (let i = 1; i <= 38; i++){
      round = Math.pow(Math.random(),3) +Math.pow(Math.random(),3)+Math.pow(Math.random(),3)+Math.pow(Math.random(),3);
      total += round;
      data.push({round: i, value: round, total: total, result: Math.random()<0.3?Math.random()<0.09?2:1:0});
    }
    
    let shootdata  = this.props.data.filter(
      (shots)=>(
        shots.shootIdx >33789
      )
    ); // 33789는 DB의 2019 마지막 데이터 shootidx
/*
    let arrValue = {};
    let arrResult = {};
    for (let item in data){
      if(arrValue.has(data[item].round)){
        arrValue.set(data[item].round, data[item].value+arrValue.get(data[item].round));
        arrResult.set(data[item].round, data[item].rsesult+arrResult.get(data[item].round));
      }
      else{
        arrValue.set(data[item].round, data[item].value);
        arrResult.set(data[item].round, data[item].result);
      }
    }
    console.log(arrValue);
    console.log(arrResult);
    let art = [];
    for (let i in arrValue.keys()){
      art.push({
        'round':i,
        'value': arrValue[i],
        'round': arrResult[i],
      })
    }
    console.log(art);
    */
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