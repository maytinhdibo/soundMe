import React, { Component } from "react";
import {Dark,Light} from './styles/theme-context';

const Context = React.createContext();

export class AppContextProvider extends Component {
    state = {
        theme: Light,
        setTheme: (theme) => {
            if ((theme)===0){
                this.setState({theme:Light});
            }
            else if ((theme)===1){
                this.setState({theme:Dark});
            }
        },
        toggleTheme: ()=>{
            if ((this.state.theme)==Dark){
                this.setState({theme:Light});
            }
            else{
                this.setState({theme:Dark});
            }
        }
    }
    
    render() {
        const { theme } = this.state
        return (
            <Context.Provider value={ this.state }  theme={ theme } >
                    { this.props.children }
            </Context.Provider>
        )
    }
}

export const AppConsumer = Context.Consumer;
export const AppContext = Context;