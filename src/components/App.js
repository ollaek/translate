import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component{

    state = { lang : "arabic" };

    onLanguageChange = language => {
       this.setState({lang : language});
    };

    render(){
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <LanguageContext.Provider value={this.state.lang}>
                   <UserCreate />
                </LanguageContext.Provider>
                
            </div>
        );
    };
}

export default App;