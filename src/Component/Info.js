import React, { Component } from 'react';

class Info extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        console.log(this.props.data)
        const data = this.props.data;
        if(data.title && data.employer){
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
                    <h1 className='idCounter'>{data.id}/25</h1>
                </div>
            </div>
        )
    }
    else{
        return(
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
                <h1 className='idCounter'>{data.id}/25</h1>
            </div>
        </div>
        )
    }
}
}

export default Info;