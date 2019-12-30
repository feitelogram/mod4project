import React, { Component } from 'react'
import UpcomingDog from "./UpcomingDog"

export default class DogBarR extends Component {

    showDogs = () => {
        return this.props.luvs.map(luv => 
        <UpcomingDog woofer = {luv.woofer} thoughts={luv.thoughts} key = {luv.woofer.id} onClick= {this.props.onClick} luv= {luv}/> )       
    }



    render() {
        return (
            <div id= "right-dog-bar" className= "fl w-30 pa2">
                <h4>My Current Woofers!</h4>
                {this.showDogs()}
            </div>
        )
    }
}
