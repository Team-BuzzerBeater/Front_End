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

    let teams = {
      '1': '전북 현대 모터스',
      '2': '울산 현대 축구단',
      '3': 'FC 서울',
      '4': '포항 스틸러스',
      '5': '대구FC',
      '6': '강원FC',
      '7': '상주 상무 축구단',
      '8': '수원 삼성 블루윙즈',
      '9': '성남FC',
      '10': '인천 유나이티드',
      '11': '광주FC',
      '12': '부산 아이파크',
    };

    let tmpdata = this.props.data.filter(
      (shots)=>(
        shots.shootIdx > 33789
      )
    );
     // 33789는 DB의 2019 마지막 데이터 shootidxt
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
        'enemyTeam':teams[key],
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
      <div id={"plot"+this.props.playerIdx} style={{ marginLeft: "15vw", marginRight: "15vw", marginTop:"20px", height: "40vw"}}/>
    )
  }
}

export default Versus;