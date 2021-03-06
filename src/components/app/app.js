import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col md6">
                        <ItemList />
                    </div>
                    <div className="col md6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
}
