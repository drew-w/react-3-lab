import React, { Component } from 'react';

class Info extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        // console.log(this.props.totalIndex)
        const data = this.props.data;
        let newInfo = this.props.allowNew;
        let allowEdit = this.props.allowEdit;
        
        console.log(newInfo)
        if (data.title && data.employer && newInfo === 'false' && allowEdit === 'false') {
            return (
                <div className='Info'>
                    <div className='infoBox'>
                        <h1 className='personName'>{data.name.first} {data.name.last}</h1><br />
                        <h2 className='inlineText'>From:</h2> <p className='inlineText'>{data.city}, {data.country}</p><br />
                        <h2 className='inlineText'>Job Title: </h2><p className='inlineText'>{data.title}</p><br />
                        <h2 className='inlineText'>Employer: </h2><p className='inlineText'>{data.employer}</p><br />
                        <br />
                        <h2>Favorite Movies:</h2>
                        <ol>
                            <li>{data.favoriteMovies[0]}</li>
                            <li>{data.favoriteMovies[1]}</li>
                            <li>{data.favoriteMovies[2]}</li>
                        </ol>
                    </div>
                    <div className='indexCounter'>
                        <h1 className='idCounter'>{data.id}/{this.props.totalIndex}</h1>
                    </div>
                </div>
            )
        }
        else if (newInfo === 'false' && allowEdit === 'false'){
            return (
                <div className='Info'>
                    <div className='infoBox'>
                        <h1 className='personName'>{data.name.first} {data.name.last}</h1><br />
                        <h2 className='inlineText'>From:</h2> <p className='inlineText'>{data.city}, {data.country}</p><br />
                        <h2 className='inlineText'>Job Title: </h2><p className='inlineText'>Unemployed</p><br />
                        <h2 className='inlineText'>Employer: </h2><p className='inlineText'>Unemployed</p><br />
                        <br />
                        <h2>Favorite Movies:</h2>
                        <ol>
                            <li>{data.favoriteMovies[0]}</li>
                            <li>{data.favoriteMovies[1]}</li>
                            <li>{data.favoriteMovies[2]}</li>
                        </ol>
                    </div>
                    <div className='indexCounter'>
                        <h1 className='idCounter'>{data.id}/{this.props.totalIndex}</h1>
                    </div>
                </div>
            )
        }
        else if (newInfo === 'true' && allowEdit === 'false'){
            return (
                <div className='Info'>
                    <div className='infoBox'>
                        <input onChange={e => this.props.handleInputChange(e.target.value, 'First Name')}type='text' placeholder='First Name'/><input onChange={e => this.props.handleInputChange(e.target.value, 'Last Name')} type='text' placeholder='Last Name'/><br />
                        <h2 className='inlineText'>From:</h2> <input onChange={e => this.props.handleInputChange(e.target.value, 'City')} type='text' placeholder='City'/><input onChange={e => this.props.handleInputChange(e.target.value, 'Country')} type='text' placeholder='Country'/><br />
                        <h2 className='inlineText'>Job Title: </h2><input onChange={e => this.props.handleInputChange(e.target.value, 'Title')} type='text' placeholder='Job Title'/><br />
                        <h2 className='inlineText'>Employer: </h2><input onChange={e => this.props.handleInputChange(e.target.value, 'Job')} type='text' placeholder='Employer'/><br />
                        <br />
                        <h2>Favorite Movies:</h2>
                        <ol>
                            <input onChange={e => this.props.handleInputChange(e.target.value, 'Fav1')} type='text' placeholder='Favorite Movie #1'/>
                            <input onChange={e => this.props.handleInputChange(e.target.value, 'Fav2')} type='text' placeholder='Favorite Movie #2'/>
                            <input onChange={e => this.props.handleInputChange(e.target.value, 'Fav3')} type='text' placeholder='Favorite Movie #3'/>
                        </ol>
                        <button onClick={this.props.addNewInfo}>Add</button>
                    </div>
                    {/* <div className='indexCounter'>
                        <h1 className='idCounter'>{data.id}/{this.props.totalIndex}</h1>
                    </div> */}
                </div>
            )
        }
        else if (allowEdit === 'true'){
            var firstName = data.name.first;
            return (
                <div className='Info'>
                    <div className='infoBox'>
                        <input defaultValue={data.name.first} onChange={e => this.props.handleInputChange(e.target.value, 'First Name')}type='text'/><input defaultValue={data.name.last}onChange={e => this.props.handleInputChange(e.target.value, 'Last Name')} type='text' placeholder='Last Name'/><br />
                        <h2 className='inlineText'>From:</h2> <input defaultValue={data.city} onChange={e => this.props.handleInputChange(e.target.value, 'City')} type='text' placeholder='City'/><input defaultValue={data.country} onChange={e => this.props.handleInputChange(e.target.value, 'Country')} type='text' placeholder='Country'/><br />
                        <h2 className='inlineText'>Job Title: </h2><input defaultValue={data.title} onChange={e => this.props.handleInputChange(e.target.value, 'Title')} type='text' placeholder='Job Title'/><br />
                        <h2 className='inlineText'>Employer: </h2><input defaultValue={data.employer} onChange={e => this.props.handleInputChange(e.target.value, 'Job')} type='text' placeholder='Employer'/><br />
                        <br />
                        <h2>Favorite Movies:</h2>
                        <ol>
                            <input defaultValue={data.favoriteMovies[0]} onChange={e => this.props.handleInputChange(e.target.value, 'Fav1')} type='text' placeholder='Favorite Movie #1'/>
                            <input defaultValue={data.favoriteMovies[1]} onChange={e => this.props.handleInputChange(e.target.value, 'Fav2')} type='text' placeholder='Favorite Movie #2'/>
                            <input defaultValue={data.favoriteMovies[2]} onChange={e => this.props.handleInputChange(e.target.value, 'Fav3')} type='text' placeholder='Favorite Movie #3'/>
                        </ol>
                        <button onClick={this.props.saveEditedInfo}>Save</button>
                    </div>
                    {/* <div className='indexCounter'>
                        <h1 className='idCounter'>{data.id}/{this.props.totalIndex}</h1>
                    </div> */}
                </div>
            )
        }

    }
}

export default Info;