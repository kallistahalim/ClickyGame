import React, { Component } from "react";
import NavBar from "./components/navbar"
import Images from './components/images';
import dogs from "./dog.json";

let count;

class App extends Component {
    state = {dogs};


ifFalsePlusOne = (props) => {
    const happy = props.image.value;
    
    if (props.image.value === FALSE) {
        count ++
        (console.log(count))
    } else {
        count.reset()
    }
}


    render() {
        return(
            <div>
            <div>
            <NavBar />
            </div>
            <div>
                <h1>Guess My Dog!</h1>
                {this.state.dogs.map(dog => <Images image={dog.image} />)}
                </div>
                </div>
        )
    }
}



export default App;
