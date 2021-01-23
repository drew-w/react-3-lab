import './App.css';
import React, {Component} from 'react';
import Display from './Component/Display'

class App extends Component{
  constructor(){
    super();

    // this.state = {
    //   data: data
    // }
  }

  render(){
    return(
      <div>
        <Display/>
      </div>
    )
  }
}

export default App;
