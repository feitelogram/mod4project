import React, { Component } from 'react'

export default class ShowDog extends Component {

    state= {
        formWoofer: {}
    }


   
    
   
    render() {
    let {name, img, floofy, borks, pats, thoughts} = this.props.woofer
        return (
            <div id = "dog-summary-container" className= "fl w-third pa2 tc">
                <h2>This Woofer is: {name}</h2>
                <img className= "upcoming ba bw2" src= {img} alt= "woofer"/>
                <div id= "form-container" className= "flex flex-column">
                <form onSubmit = {this.props.handleForm}>
                <label>
                Your Thoughts on The Woofer, Plz:
          <textarea name="thoughts" value={thoughts} onChange={this.props.handleChange} />
        </label>
        <label>IZ Floofy?</label>
        <input
            name="floofy"
            type="checkbox"
            checked={floofy}
            defaultValue={floofy}
            onChange={this.props.handleChange} />
            <label>Haz Borks?</label>
        <input
            name="borks"
            type="checkbox"
            checked={borks}
            defaultValue={borks}
            onChange={this.props.handleChange} />
                 <label>Wantz Pats?</label>
        <input
            name="pats"
            type="checkbox"
            checked={pats}
            defaultValue={pats}
            onChange={this.props.handleChange} />
        <input type="submit" value="I Want to Keep This Woofer!" />
                </form>
                <button onClick = {this.props.nextWoofer}
                >Next Woofer, Plz</button>
                </div>
            </div>
        )
    }
}
