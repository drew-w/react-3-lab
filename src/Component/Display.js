import React, { Component } from 'react';
import ButtonsUnder from './ButtonsUnder';
import Info from './Info';
import data from '../data';



class Display extends Component {
    constructor() {
        super();

        this.state = {
            data: data,
            currentIndex: 0,
            totalIndex: data.length,
            allowNew: 'false',
            allowEdit: 'false',
            newFirstName: '',
            newLastName: '',
            newCity: '',
            newCountry:'',
            newTitle:'',
            newJob:'',
            newFavMovie1: '',
            newFavMovie2: '',
            newFavMovie3: ''
        }
    }

    nextIndex = () => {
        if (this.state.currentIndex !== this.state.data.length - 1) {
            this.setState(prevState => {
                return { currentIndex: prevState.currentIndex + 1 }
            })
        }
        else {
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
        else {
            this.setState({
                currentIndex: this.state.data.length - 1
            })
        }
    }

    deleteIndex = () => {
        let copy = [...this.state.data]
        copy.splice(this.state.currentIndex, 1)
        for (let i = this.state.currentIndex; i < copy.length; i++) {
            copy[i].id -= 1
        }
        if(this.state.currentIndex >= copy.length){
            this.setState( prevState => {
                return {currentIndex: prevState.currentIndex - 1}
            })
        }
        this.setState({
            data: copy,
            totalIndex: copy.length
        })
    }

    newInfo = () => {
    this.setState({
        allowNew: 'true'
    })

    }

    handleInputChange = (value, whichItem) => {
        if(whichItem === 'First Name'){
            this.setState({
                newFirstName: value
            })
        }
        else if(whichItem === 'Last Name'){
            this.setState({
                newLastName: value
            })
        }
        else if(whichItem === 'City'){
            this.setState({
                newCity: value
            })
        }
        else if(whichItem === 'Country'){
            this.setState({
                newCountry: value
            })
        }
        else if(whichItem === 'Title'){
            this.setState({
                newTitle: value
            })
        }
        else if(whichItem === 'Job'){
            this.setState({
                newJob: value
            })
        }
        else if(whichItem === 'Fav1'){
            this.setState({
                newFavMovie1: value
            })
        }
        else if(whichItem === 'Fav2'){
            this.setState({
                newFavMovie2: value
            })
        }
        else if(whichItem === 'Fav3'){
            this.setState({
                newFavMovie3: value
            })
        }
    }

    addNewInfo = () => {
        const newId = this.state.totalIndex + 1;
        let copy = [...this.state.data];
        console.log(newId)
        const newInfo = {
            id: newId,
            name: { first: this.state.newFirstName, last: this.state.newLastName },
            city: this.state.newCity,
            country: this.state.newCountry,
            employer: this.state.newJob,
            title: this.state.newTitle,
            favoriteMovies: [
              this.state.newFavMovie1,
              this.state.newFavMovie2,
              this.state.newFavMovie3
            ]
        }
        copy.push(newInfo);
        this.setState({
            data: copy,
            allowNew: 'false',
            newFirstName: '',
            newLastName: '',
            newCity: '',
            newCountry:'',
            newTitle:'',
            newJob:'',
            newFavMovie1: '',
            newFavMovie2: '',
            newFavMovie3: '',
            totalIndex: copy.length,
        })
    }

    editInfo = () => {
        let copy = [...this.state.data];
        let id  = this.state.currentIndex;

        this.setState({
            allowEdit: 'true',
            newFirstName: copy[id].name.first,
            newLastName: copy[id].name.last,
            newCity: copy[id].city,
            newCountry:copy[id].country,
            newTitle:copy[id].title,
            newJob: copy[id].employer,
            newFavMovie1: copy[id].favoriteMovies[0],
            newFavMovie2: copy[id].favoriteMovies[1],
            newFavMovie3: copy[id].favoriteMovies[2],
        })
        console.log(this.state.allowEdit)
    }
    
    saveEditedInfo = () => {
        let id  = this.state.currentIndex + 1;
        let copy = [...this.state.data];
        const newInfo = {
            id,
            name: { first: this.state.newFirstName, last: this.state.newLastName },
            city: this.state.newCity,
            country: this.state.newCountry,
            employer: this.state.newJob,
            title: this.state.newTitle,
            favoriteMovies: [
              this.state.newFavMovie1,
              this.state.newFavMovie2,
              this.state.newFavMovie3
            ]
        }
        copy.splice(id - 1, 1, newInfo);
        this.setState({
            data: copy,
            allowEdit: 'false',
            newFirstName: '',
            newLastName: '',
            newCity: '',
            newCountry:'',
            newTitle:'',
            newJob:'',
            newFavMovie1: '',
            newFavMovie2: '',
            newFavMovie3: '',
            totalIndex: copy.length,
        })

    }

    render() {
        // console.log(this.state.data)
        let index = this.state.currentIndex
        return (
            <main>
                <header><h1>Home</h1></header>
                <section className='mainContent'>
                    <div className='infoContainer'>
                        <Info 
                        data={this.state.data[index]} 
                        totalIndex={this.state.totalIndex} 
                        allowNew={this.state.allowNew} 
                        allowEdit={this.state.allowEdit} 
                        handleInputChange={this.handleInputChange} 
                        addNewInfo={this.addNewInfo}
                        saveEditedInfo={this.saveEditedInfo}/>
                    </div>
                    <div className='buttonContainer'>
                        <ButtonsUnder 
                        next={this.nextIndex} 
                        prev={this.prevIndex} 
                        delete={this.deleteIndex} 
                        newInfo={this.newInfo} 
                        editInfo={this.editInfo}/>

                    </div>
                </section>
            </main>
        )
    }
}

export default Display;