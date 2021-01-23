import React, { Component } from 'react';


class ButtonsUnder extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className = 'buttonsUnder'>
                <button onClick={this.props.prev}className='navButton'>&lt; Previous</button>
                <div>
                    <button className='editButton'>Edit</button>
                    <button className='editButton'>Delete</button>
                    <button className='editButton'>New</button>
                </div>
                <button onClick={this.props.next} className='navButton'>Next &gt;</button>
            </div>
        )
    }
}

export default ButtonsUnder;