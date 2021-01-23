import React, { Component } from 'react';
import ButtonsUnder from './ButtonsUnder';
import Info from './Info';
import data from '../data';



class Display extends Component {
    constructor() {
        super();

        this.state = {
            data: data,
            currentIndex: 0
        }
    }

    nextIndex = () => {
        if (this.state.currentIndex !== 24) {
            this.setState(prevState => {
                return { currentIndex: prevState.currentIndex + 1 }
            })
        }
        else{
            this.setState({
                currentIndex: 0
            })
        }
    }

    prevIndex = () => {
        if (this.state.currentIndex !== 0) {
            this.setState(prevState => {
                return { currentIndex: prevState.currentIndex - 1 }
            })
        }
        else{
            this.setState({
                currentIndex: 24
            })
        }
    }

    render() {
        // console.log(this.state.data)
        let index = this.state.currentIndex
        console.log(this.state.data[index])
        return (
            <main>
                <header><h1>Home</h1></header>
                <section className='mainContent'>
                    <div className='infoContainer'>
                        <Info data={this.state.data[index]} />
                    </div>
                    <div className='buttonContainer'>
                        <ButtonsUnder next={this.nextIndex} prev={this.prevIndex} />
                    </div>
                </section>
            </main>
        )
    }
}

export default Display;