import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component{

    static contextType = LanguageContext;

    render(){
        console.log(this.context);
        const text = this.context === "arabic" ? "حفظ" : "submit";
        return(
            <button className="ui button primary">{text}</button>
        );
    }
}

export default Button;