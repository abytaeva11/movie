import React  from 'react';
import {LanguageContext} from "./LanguageContext";
import {useState} from "react";

const Wrapper = ({children}) => {
    const [language,setLanguage]=useState("en-US")
    return (
        <LanguageContext.Provider
            value={{
                language,setLanguage
            }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default Wrapper;
