import React, { Component } from 'react'
import UpcomingDog from "./UpcomingDog"

export default class DogBarL extends Component {

    showDogs = () => {
        return this.props.woofers.map(dog => 
        <UpcomingDog woofer = {dog} key = {dog.id} onClick= {this.props.onClick}/> )       
    }
    



    render() {
        return (
            <div id= "dog-bar-left" className= "fl w-30 pa2">
                <h4>Upcoming Woofers!</h4>
                {this.showDogs()}
            </div>
        )
    }
}
