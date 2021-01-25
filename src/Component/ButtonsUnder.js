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
                    <button onClick={this.props.editInfo}className='editButton'>Edit</button>
                    <button onClick={this.props.delete} className='editButton'>Delete</button>
                    <button onClick={this.props.newInfo} className='editButton'>New</button>
                </div>
                <button onClick={this.props.next} className='navButton'>Next &gt;</button>
            </div>
        )
    }
}

export default ButtonsUnder;