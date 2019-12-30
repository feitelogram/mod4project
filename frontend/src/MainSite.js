import React, { Component } from 'react'
import ShowDog from "./ShowDog"
import DogBarL from "./DogBarL"
import DogBarR from "./DogBarR"

export default class MainSite extends Component {

 

  render() {
      console.log(this.props.dogBarL)
    return (
    
      <div>
        <h1 id="title" className= "baskerville tc f1 lh-title">CALM WITH WOOFERS</h1>
       <DogBarL woofers= {this.props.dogBarL}
       onClick={this.props.dogBarLClick}
       />
        <ShowDog woofer= {this.props.showDogWoofer} 
        nextWoofer={this.props.nextWoofer}
        handleForm={this.props.handleForm}
        handleChange={this.props.handleChange}
        />
        <DogBarR
        luvs= {this.props.luvs}
        onClick={this.props.dogBarRClick}
        />
        
      </div>
    )
  }
}
