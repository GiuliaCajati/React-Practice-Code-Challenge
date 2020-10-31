import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        <Sushi eaten={props.plateOneEaten} plateNumber="One" devourSushi={props.devourSushi} sushi={props.sushis[props.currentSushiIndex]} />
        <Sushi eaten={props.plateTwoEaten} plateNumber="Two" devourSushi={props.devourSushi} sushi={props.sushis[props.currentSushiIndex +1]} />
        <Sushi eaten={props.plateThreeEaten} plateNumber="Three" devourSushi={props.devourSushi} sushi={props.sushis[props.currentSushiIndex +2]} />
        <Sushi eaten={props.plateFourEaten} plateNumber="Four"devourSushi={props.devourSushi} sushi={props.sushis[props.currentSushiIndex +3]} />  
        <MoreButton moveBelt={props.moveBelt}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer


//Sushi list is properly received from the server
// Only 4 sushi are rendered at a time
// Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.
// Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
// We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component
// No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance