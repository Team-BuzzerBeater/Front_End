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

  }

  render(){
    return (
      <div id={"plot"+this.props.playerIdx} style={{ marginLeft: "15vw", marginRight: "15vw", marginTop:"20px", width: "70vw", height: "55vw"}}/>
    )
  }
}

export default Versus;