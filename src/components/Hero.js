import React, {useState} from "react";
import {useContext} from "react";
import {Link,NavLink,useNavigate} from "react-router-dom";
import {LanguageContext} from "../context/LanguageContext";

const Hero=()=>{
    const  { setLanguage }=useContext(LanguageContext)
    const  navigate=useNavigate()
const [name,setName]=useState()
    const handleChange=(e)=>{
        setName((e.target.value))
    }
    const  handleSearch=()=>{
        navigate(`/movie_search/:${name}`)
    }
    return(
        <div className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="d-flex align-items-center ">
                        <Link to="/">LOGO</Link>

                    <div className="d-flex mx-3">
                        <input onChange={ handleChange} type="text" className="form-control"/>
                        <button
                            onClick={handleSearch}
                            className="btn btn-primary mx-2 " >
                            search
                        </button>
                    </div>
                    </div>

                    <NavLink to="/" className="hero-links">Home  </NavLink>
                        <NavLink to="/about" className="hero-links"> Top Rated   </NavLink>
                        <NavLink to="/projects" className="hero-links"> Now Playing </NavLink>
                        <NavLink to="/contacts" className="hero-links"> Up PLaying </NavLink>
                    <NavLink to="/ToDoList" className="hero-links"> To Do List  </NavLink>
                    <select name="" id=""
                            onChange={(e)=>setLanguage(e.target.value)
                            }
                    >

                        <option value="ru-RU"> русский</option>
                        <option value="en-US" selected > english</option>
                        <option value="tr-TR"> turkish</option>
                        <option value="zh-CN"> chines</option>
                        <option value="kg-KG"> kyrgyz</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
export default Hero