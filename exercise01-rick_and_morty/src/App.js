import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Slider from './components/Slider'
import Roster from './components/Roster'

import Bio from "./components/Bio"

class App extends Component {

    render() {
        return (
            <div className='App'>
                <Slider />

                <Roster />

                <Bio />
            </div>
        )
    }
}

export default App