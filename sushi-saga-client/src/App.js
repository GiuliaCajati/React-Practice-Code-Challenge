import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
class App extends Component {
  constructor(){
    super()
    let sushis = []
    this.state={
      currentSushiIndex: 0,
      sushiLoaded: false,
      plateOneEaten: false,
      plateTwoEaten: false,
      plateThreeEaten: false,
      plateFourEaten: false,
      emptyPlates: 0,
      money:100

    }
    this.fetchSushiData()
  }

  fetchSushiData = () => {
    fetch(API)
    .then(data => data.json())
    .then(sushiInfo => {this.renderSushi(sushiInfo)})
  }

  renderSushi = (sushiInfo) => {
      this.sushis = sushiInfo
      this.setState({
        sushiLoaded: true
      })
  }

  moveBelt = () => {
    let addSushis = 4 
    if(this.state.currentSushiIndex + addSushis >=  this.sushis.length){
      addSushis = -(this.sushis.length - addSushis)
    } 
    this.setState({
      currentSushiIndex: this.state.currentSushiIndex + addSushis,
      plateOneEaten: false,
      plateTwoEaten: false,
      plateThreeEaten: false,
      plateFourEaten: false
    })
  }

  devourSushi = (sushiPosition, price) => {
    let key = "plate" + sushiPosition + "Eaten"
    if(this.state.money>=price){
    this.setState({
      [key]: true,
      emptyPlates: this.state.emptyPlates + 1,
      money: this.state.money - price
    })}
  }


  

  render() {
    
    return (
      <div className="app">
          {this.state.sushiLoaded?<SushiContainer 
          plateOneEaten={this.state.plateOneEaten}
          plateTwoEaten={this.state.plateTwoEaten}
          plateThreeEaten={this.state.plateThreeEaten}
          plateFourEaten={this.state.plateFourEaten}
          sushis={this.sushis} 
          currentSushiIndex={this.state.currentSushiIndex} 
          moveBelt={this.moveBelt} 
          devourSushi={this.devourSushi}/>:null}
        <Table emptyPlates={this.state.emptyPlates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
//<SushiContainer sushis={this.sushis} currentSushiIndex={this.state.currentSushiIndex}/>