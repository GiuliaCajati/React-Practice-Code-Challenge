import React, { Component } from 'react'

class Sushi extends Component{




moveSushi = () => {

}

render(){
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => this.props.devourSushi(this.props.plateNumber, this.props.sushi.price)}>
        {this.props.eaten?null:<img src={this.props.sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
  }
}

export default Sushi