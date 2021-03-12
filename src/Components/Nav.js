import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Flash from 'react-reveal/Flash';
import Roll from 'react-reveal/Roll';


export default function NewNav() {
    return (
      <div>
        <div className="container-fluid nav_bg bg-light">
        
          <div className="row " >
          
            <div className="col-10 mx-auto">

              
            <Navbar bg="light" expand="lg" fixed="" className="Navbar">
           
  <Navbar.Brand href="#home"><b id="blue">PORTFOLIO</b></Navbar.Brand>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" > 
    <Flash>
    <Roll top> <Nav.Link><NavLink to="/"><HomeIcon/>Home</NavLink></Nav.Link></Roll>
    <Roll top>         <Nav.Link><Flash><NavLink to="/Services"><SettingsApplicationsIcon/>Services</NavLink></Flash></Nav.Link></Roll>
    <Roll top>        <Nav.Link><Flash><NavLink to="/Skills"><BuildSharpIcon/>Skills</NavLink></Flash></Nav.Link></Roll>
    <Roll top>        <Nav.Link><Flash><NavLink to="/Projects"><LibraryBooksRoundedIcon/>Projects</NavLink></Flash></Nav.Link></Roll>
    <Roll top> <Nav.Link><Flash> <NavLink to="/About"><InfoIcon/>About</NavLink></Flash></Nav.Link></Roll>
    <Roll top>        <Nav.Link><Flash><NavLink to="/Contacts"><PermContactCalendarIcon/>Contact</NavLink></Flash></Nav.Link></Roll>
    
                  </Flash>
                 
    </Nav>
   
      </Navbar.Collapse>
      
</Navbar>
        </div>
        
        </div>
    
        </div>
        </div>
    )
}


