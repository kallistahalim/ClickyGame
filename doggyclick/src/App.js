import React, { Component } from "react";
import NavBar from "./components/navbar";
import Images from './components/images';
import dogs from "./dog.json";

class App extends Component {
    state = {
        count : 0,
        topScore: 0,
        dogs,
        value : ""
    };


    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      };


    ifFalsePlusOne = (key) => {
        const dog = this.state.dogs.find(d => d.key === key);
        if (dog.value === false) {
            dog.value = true;
            this.setState({
                count: this.state.count + 1,
                topScore: Math.max(this.state.topScore, this.state.count + 1)
            });
            this.shuffleArray(this.state.dogs);
        } else {
            this.state.dogs.forEach(d => d.value = false);
            this.setState({count : 0});
            this.shuffleArray(this.state.dogs);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                        <h1>Guess My Dog!</h1>
                        <div>Score: {this.state.count} | Top Score: {this.state.topScore}</div>
                        {this.state.dogs.map(dog => <Images 
                        ifFalsePlusOne = {this.ifFalsePlusOne}
                        id = {dog.key}
                        // dogKey = {dog.key}
                        image={dog.image}
                        />)}
                </div>
            </div>
        );
    };
}

                
            






export default App;
