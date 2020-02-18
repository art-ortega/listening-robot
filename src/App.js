import React,{Component} from 'react';
import './App.css';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:""
        }
    }

    handleChange = (e) =>{
        this.setState({text:e.target.value})
    }
    convertInput = (userInput) =>{
        let l = userInput.split("").map((value,index) => {
            if(index %3 ===0){
                return "B"
            } else if(index %3 === 1) {
                return "L"
            } else if(index %3 ===2){
                return "A"
            }
        })
        return l
    }

    render(){
        return(
            <div>
                <input
                    placeholder = "Type inside me bby ;)"
                    value = {this.state.text}
                    onChange = {this.handleChange}
                />
                <GoodRobot
                text = {this.state.text}
                />
                <BadRobot
                    value = {this.state.text}
                    convert = {this.convertInput}
                />
                <KanyeBot
                text = {this.state.text}
                />
            </div>
        )
    }
}

export default App;
