import React, {Component} from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class Versus extends Component{
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
    //All of our work goes here now
    const { playerIdx } = this.props;
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("plot"+playerIdx, am4charts.XYChart);

    chart.paddingRight = 20;
    chart.background.setFill("white");

    let tmpdata = [{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '울산 현대 호랑이',
      'xG': Math.random(),
    },{
      'enemyTeam': '수원 삼성 블루윙스',
      'xG': Math.random(),
    },{
      'enemyTeam': '대구FC',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },{
      'enemyTeam': '전북 현대 모터스',
      'xG': Math.random(),
    },];

    let arr = new Map();
    for (let item in tmpdata){
      if(arr.has(tmpdata[item].enemyTeam)){
        arr.set(tmpdata[item].enemyTeam, tmpdata[item].xG+arr.get(tmpdata[item].enemyTeam));
      }
      else{
        arr.set(tmpdata[item].enemyTeam, tmpdata[item].xG);
      }
    }
    let art = [];
    arr.forEach(function(value,key){
      art.push({
        'enemyTeam':key,
        'xG':value,
      });
    })

    chart.data = art;
    console.log(art);

    var axisX = chart.xAxes.push(new am4charts.ValueAxis());
    axisX.renderer.grid.template.strokeOpacity = 0;
    axisX.calculateTotals = true;

    var axisY = chart.yAxes.push(new am4charts.CategoryAxis());
    axisY.dataFields.category = 'enemyTeam';
    axisY.renderer.grid.template.strokeOpacity = 0;

    var bar = chart.series.push(new am4charts.ColumnSeries());
    bar.dataFields.valueX = 'xG';
    bar.dataFields.categoryY = 'enemyTeam';
    bar.stacked = true;

    this.chart = chart;
  }

  render(){
    return (
      <div id={"plot"+this.props.playerIdx} style={{ marginLeft: "15vw", marginRight: "15vw", marginTop:"20px", width: "70vw", height: "55vw"}}/>
    )
  }
}

export default Versus;