import React, { Component } from 'react';



class Pets extends Component {

    constructor(props) {
        super(props);
        this.state = { animals: [] }
        this.fetchPets = this.fetchPets.bind(this);
    }

    // componentDidMount(){
    //     this.fetchPets();
    // }


    fetchPets() {
        const petsApiUrl = "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
        fetch(petsApiUrl)
            .then(response =>
                response
                .json()
                .then(body => {
                    console.log("fetch pets..");
                    let pets = body.map(pet => pet.name).slice(0, 5);
                    this.setState(
                        { animals: pets }
                    );
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        let animals = this.state.animals.map(a => <li>{a}</li>);
        return (
            <div>
                <ul>{animals}</ul>
                <button className="App-Button" onClick={this.fetchPets}>Update</button>
            </div>
        );
    }
}

export default Pets;