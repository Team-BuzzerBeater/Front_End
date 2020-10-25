import React, {Component} from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class Sketch extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData: [],
        goalArea :[{
          "positionX" : "24.84",
          "positionY" : "0.0",
        },{
          "positionX" : "24.84",
          "positionY" : "5.5",
        },{
          "positionX" : "43.16",
          "positionY" : "5.5",
        },{
          "positionX" : "43.16",
          "positionY" : "0.0",
        }],
        penaltyArea :[{
          "positionX" : "13.84",
          "positionY" : "0.0",
        },{
          "positionX" : "13.84",
          "positionY" : "16.5",
        },{
          "positionX" : "54.16",
          "positionY" : "16.5",
        },{
          "positionX" : "54.16",
          "positionY" : "0.0",
        }],
        pitchArea :[{
          "positionX" : "0.0",
          "positionY" : "55",
        },{
          "positionX" : "0.0",
          "positionY" : "0.0",
        },{
          "positionX" : "68.0",
          "positionY" : "0.0",
        },{
          "positionX" : "68.0",
          "positionY" : "55",
        }],
        halfArea :[{
          "positionX" : "0.0",
          "positionY" : "52.5",
        },{
          "positionX" : "34.0",
          "positionY" : "52.5",
        },{
          "positionX" : "68.0",
          "positionY" : "52.5",
        }],
        roundArea: [{
          "positionX" : "34.0",
          "positionY" : "52.5",
        },{
          "positionX" : "34.0",
          "positionY" : "11",
        }],
    };

  }

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

  initChart() {
    //All of our work goes here now
    const { playerIdx } = this.props;
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("graph"+playerIdx, am4charts.XYChart);

    chart.paddingRight = 20;
    chart.background.setFill("white");
    let normalize = [];
    this.props.data.forEach(
      (shot) =>(
        normalize.push({
          positionX : shot.positionX * 0.68,
          positionY : Math.min(shot.positionY, 100-shot.positionY),
          xG : 15 + shot.xG * 10,
          result : shot.result,
      })
      )
    )
    const {goalArea,penaltyArea,pitchArea,halfArea,roundArea} = this.state;
    
    // Create axes
    var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.min = 0;
    valueAxisX.max = 70;
    valueAxisX.strictMinMax = true; 
    valueAxisX.renderer.grid.template.strokeOpacity = 0;

    var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.min = -0.1;
    valueAxisY.max = 53;
    valueAxisY.renderer.inversed = true;
    valueAxisY.strictMinMax = true; 
    valueAxisY.renderer.grid.template.strokeOpacity = 0;
   

    

    // Draw goal area line 
    var goalAreaSeries = chart.series.push(new am4charts.LineSeries());
    goalAreaSeries.dataFields.valueX = "positionX";
    goalAreaSeries.dataFields.valueY = "positionY";
    goalAreaSeries.stroke = chart.colors.getIndex(1);
    goalAreaSeries.data = goalArea;

    // Draw penalty area line 
    var penaltyAreaSeries = chart.series.push(new am4charts.LineSeries());
    penaltyAreaSeries.dataFields.valueX = "positionX";
    penaltyAreaSeries.dataFields.valueY = "positionY";
    penaltyAreaSeries.stroke = chart.colors.getIndex(1);
    penaltyAreaSeries.data = penaltyArea;

    // pitch Area
    var pitchSeries = chart.series.push(new am4charts.LineSeries());
    pitchSeries.dataFields.valueX = "positionX";
    pitchSeries.dataFields.valueY = "positionY";
    pitchSeries.stroke = chart.colors.getIndex(1);
    pitchSeries.data = pitchArea;

    // half line
    var halfSeries = chart.series.push(new am4charts.LineSeries());
    halfSeries.dataFields.valueX = "positionX";
    halfSeries.dataFields.valueY = "positionY";
    halfSeries.stroke = chart.colors.getIndex(1);
    halfSeries.data = halfArea;

    var roundSeries = chart.series.push(new am4charts.LineSeries());
    roundSeries.dataFields.valueX = "positionX";
    roundSeries.dataFields.valueY = "positionY";
    roundSeries.strokeOpacity = 0;
    roundSeries.data = roundArea;

    var rBullet = roundSeries.bullets.push(new am4charts.CircleBullet());
    rBullet.circle.radius = 3;
    rBullet.circle.fill = chart.colors.getIndex(1);
    rBullet.circle.stroke = chart.colors.getIndex(1);

    // Create series2
    var lineSeries2 = chart.series.push(new am4charts.LineSeries());
    lineSeries2.dataFields.valueY = "positionY";
    lineSeries2.dataFields.valueX = "positionX";
    lineSeries2.strokeOpacity = 0;
    lineSeries2.data = normalize.filter(
      (shot) => (
        shot.result == 0
      )
    );
    console.log(lineSeries2.data)
    
    // Add a bullet
    var bullet2 = lineSeries2.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.propertyFields.radius = "xG";
    bullet2.circle.fill = am4core.color("red");
    bullet2.circle.opacity = 0.5;
    bullet2.circle.horizontalCenter="middle";
    bullet2.circle.verticalCenter="middle";

    // Text bullet
    var nBullet = lineSeries2.bullets.push(new am4charts.LabelBullet());
    nBullet.label.text = "[bold font-size: 22px]N";

 
    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "positionY";
    lineSeries.dataFields.valueX = "positionX";
    lineSeries.strokeOpacity = 0;
    lineSeries.data = normalize.filter(
      (shot) => (
        shot.result == 1
      )
    );
    console.log(lineSeries.data);

    // Add a bullet
    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.propertyFields.radius = "xG";
    bullet.circle.fill = am4core.color("orange");
    bullet.circle.opacity = 0.8;
    bullet.circle.horizontalCenter="middle";
    bullet.circle.verticalCenter="middle";

    // Text bullet
    var gBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
    gBullet.label.text = "[bold font-size: 22px]골";

    this.chart = chart;
  }

  render(){
    return (
      <div id={"graph"+this.props.playerIdx} style={{ marginLeft: "15vw", marginRight: "15vw", marginTop:"20px", width: "70vw", height: "55vw"}}/>
    )
  }
}

export default Sketch;