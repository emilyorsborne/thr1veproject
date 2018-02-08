import React, {Component} from 'react';
import Clock from './clock'
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 31, 2018',
            newDeadline: ''
        }
    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline});
}

    render() {
        return (
        <div className="App">
            <div className = "App-title"><b>Countdown to {this.state.deadline}</b></div>
            <div className = "Timer">
            <Clock 
               deadline={this.state.deadline}
            />
            </div>
            <div>
                <Form inline>
            <FormControl 
            className = "Deadline-input"
            placeholder='new date' 
            onChange={event => this.setState({newDeadline: event.target.value})}
            />
            <Button className="Submit" onClick={() => this.changeDeadline()}>
            Submit
            </Button>
            </Form>
            </div>
        </div>
        )
    }
}

export default App;