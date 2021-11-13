import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";



  const SearchBar = ({keyword,setKeyword}) => {
    
    return (
      <input 
       style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
       key="random1"
       value={keyword}
       placeholder={"Search movies"}
       onChange={(e) => setKeyword(e.target.value) }/>
);

     }

export default SearchBar
