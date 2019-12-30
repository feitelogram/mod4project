import React, { Component } from 'react'
import MainSite from "./MainSite"
import {Route, Switch} from "react-router"
import {NavLink} from "react-router-dom"
import Home from "./Home.js"

export default class App extends Component {

  state = {
    allWoofers: [],
    currentWoofer: {},
    myWoofers: []
  }


  getAllWoofers = () => {
    fetch(`http://localhost:3000/woofers`)
    .then(resp => resp.json())
    .then(woofers => {
      this.setState({
        allWoofers: woofers,
        currentWoofer: woofers[0],
        wooferNumber: 0
      })
    })
  }

  getUserWoofers = () => {
    fetch(`http://localhost:3000/luvs`)
    .then(resp => resp.json())
    .then(luvs => {
      this.setState({
        myWoofers: luvs
      })
    })
  }

  waitForMe = () => {
    alert("Arf, wait for me, hooman!")
  }
  
  removeWoofer = (removedLuv) => {
    let result = window.confirm("Whimper... are you sure?")
    if(result) {
    fetch(`http://localhost:3000/luvs/${removedLuv.id}`, {
  method:'DELETE',
 headers: { 
     'Content-type': 'application/json',
     'accept': 'application/json'
 },
})
.then(resp => resp.json())
.then(json_resp => {
  console.log(json_resp)
  let removedList = this.state.myWoofers.filter(luv => luv.id !== removedLuv.id)
  this.setState({myWoofers: removedList})
})
    }
  }
  
  

  componentDidMount(){
    this.getAllWoofers()
    this.getUserWoofers()
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      currentWoofer: {...this.state.currentWoofer, [name]: value}
    });
    }


    updateWoofer = () => {
      fetch(`http://localhost:3000/woofers/${this.state.currentWoofer.id}`, {
        method:'PATCH',
       headers: { 
           'Content-type': 'application/json',
           'accept': 'application/json'
       },
       body: JSON.stringify({
      floofy: this.state.currentWoofer.floofy,
      pats: this.state.currentWoofer.pats,
      borks: this.state.currentWoofer.borks
        })
      })
      .then(resp => resp.json())
      .then(updatedWoofer => {
        console.log(updatedWoofer)
        this.setState({currentWoofer: updatedWoofer})
      })
    }

    makeThought = () => {
      if(this.state.myWoofers.length >=3) {
        alert("Warf! You can only have three woofers at a time! Choose carefully!")
      } else {
      fetch(`http://localhost:3000/luvs`, {
        method:'POST',
       headers: { 
           'Content-type': 'application/json',
           'accept': 'application/json'
       },
       body: JSON.stringify({
          user_id: 1,
          woofer_id: this.state.currentWoofer.id,
          thoughts: this.state.currentWoofer.thoughts
        })
      })
      .then(resp => resp.json())
      .then(luvWooferUser => {
        let updatedMine = [luvWooferUser, ...this.state.myWoofers]
        this.setState({myWoofers: updatedMine})
        this.getUserWoofers()
      })
    }
    }
    
    
  
  handleForm = (event) => {
    event.preventDefault()
    if(this.state.currentWoofer.thoughts){
      this.makeThought()
      this.updateWoofer()
    } else {
    this.updateWoofer()
    alert("Warf! If you want to keep me add some thoughts!")
    }
  }
  

nextWoofer = () => {
  let next = this.state.wooferNumber+1
  this.setState({
    wooferNumber: next,
    currentWoofer: {...this.state.allWoofers[next], thoughts: ""}
  })
}

upcomingWoofers = () => {
  let i = this.state.wooferNumber+1
  let e = this.state.wooferNumber+4
  let allWoofers = [...this.state.allWoofers]
  return allWoofers.slice(i,e)
  
}

mainWithProps = () => {
  return <MainSite dogBarL= {this.upcomingWoofers()} dogBarLClick= {this.waitForMe} showDogWoofer= {this.state.currentWoofer} 
  nextWoofer={this.nextWoofer} handleForm= {this.handleForm} handleChange= {this.handleChange}
  luvs= {this.state.myWoofers}
        dogBarRClick={this.removeWoofer}
  />
}



  render() {
    return (
    
      <div>
        <NavLink to= "/">Home</NavLink>
        <NavLink to= "/main">Main</NavLink>
        <Switch>
        <Route exact path = "/main" component= {this.mainWithProps} />
        <Route exact path = "/" component= {Home} />
        </Switch>
      </div>
    )
  }
}
