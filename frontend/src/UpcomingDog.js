import React, { Component } from 'react'

export default class UpcomingDog extends Component {
    render() {
        let {name, img} = this.props.woofer
        return (
            <div className= "ba bw2 bg-light-purple pa0 link b black hover-washed-green"
            onClick= {() => this.props.onClick(this.props.luv)}
            >
               <h4 className= "baskerville tc f4 lh-copy pa0">{name}</h4>
               {this.props.thoughts ? <p className= "f5 lh-copy pa0">Click to remove this doge :(</p> : null}
               <img
               className= "mw-100 pa0 showdog"
               src= {img}
               alt= "upcoming"
               ></img>
               {this.props.thoughts ? <div><h5 className= "f4 lh-copy pa0">Thoughts:</h5> <p>{this.props.thoughts}</p></div> : null}
            </div>
        )
    }
}
