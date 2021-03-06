import React, { useEffect, useState } from "react";
import strings from "../../../localization";
import './navigation.scss'
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../Slices/LanguageSlice";
import { Avatar, Breadcrumbs, Button, Stack } from '@mui/material';
import View from "../../Constans/ViewType";


const Navigation2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


 
    const navigateItem1 = () => {
        navigate('/services/works', {state: View.RENOVATION})
    }
    const navigateItem2 = () => {
        navigate('/services/works', {state: View.PLASTER})
    }
    const navigateItem3 = () => {
        navigate('/services/works', {state: View.INTERIOR})
    }
    const navigateItem4 = () => {
        navigate('/services/works', {state: View.MODERN})
    }
    const navigateItem5 = () => {
        navigate('/services/works', {state: View.FLOORS})
    }
    const navigateItem6 = () => {
        navigate('/services/works', {state: View.PAINTING})
    }
    const navigateItem7 = () => {
        navigate('/services/works', {state: View.CUSTOMVERANDA})
    }
    const navigateItem8 = () => {
        navigate('/services/works', {state: View.CUSTOMKITCHEN})
    }
    const navigateItem9 = () => {
        navigate('/services/works', {state: View.INOVATIVE})
    }

    const languageEn = () => {
        dispatch(changeLanguage('nl'));
    }

    const languageNl = () => {
        dispatch(changeLanguage('en'));
    }

    const languageFr = () => {
        dispatch(changeLanguage('fr'));
    }

    return <React.Fragment>
        <header id="header">
            <div className="header-items">
                <div className="icons-mobile">
                    <Avatar className="image" sx={{ width: 20, height: 20 }} src='images/facebook-logo-2019.svg' onClick={() => window.location.href = "https://facebook.com"} />
                    <Avatar className="image" sx={{ width: 20, height: 20, ml: 1 }} src='images/instagram.svg' onClick={() => window.location.href = "https://instagram.com"} />
                </div>
                <div className="header-contact">
                    <div className="block-icons">
                        <Avatar className="avatar-image" sx={{ width: 20, height: 20, backgroundColor:'#d5dee6'  }} src='images/email.svg' />
                        <a className='mailto' style={{marginLeft: '5px'}} href='mailto:gipsplaatrenovatie@gmail.com'>gipsplaatrenovatie@gmail.com</a>
                    </div>
                    <div className="block-icons" style={{marginTop: '10px'}}>
                        <Avatar className="avatar-image" sx={{ width: 20, height: 20, backgroundColor:'#d5dee6' }} src='images/telephone.svg' />
                        <label style={{marginLeft: '5px'}}>+31638234157</label>
                    </div>
                    
                </div>
                <Stack className="stack-with-crumbs" spacing={0.5} direction='row'>
                    <a target="_blank" href = "https://facebook.com"><Avatar className="image" sx={{ width: 40, height: 40 }} src='images/facebook-logo-2019.svg' /></a>
                    <a target="_blank" href = "https://www.instagram.com/drywalls.interior.renovation/?fbclid=IwAR0vO0UAP3YkiTZOhgvOLNhscKLZzlzCrVL8ra4n4fYMztkZ7CjejhkqhIA"><Avatar className="image" sx={{ width: 40, height: 40 }} src='images/instagram.svg' /></a>
                    <Breadcrumbs className="breadcrumbs" separator='|'>
                        <Avatar className="avatar-image" sx={{ width: 40, height: 40, backgroundColor:'#d5dee6'  }} src='images/email.svg' />
                        <a className='mailto' href='mailto:gipsplaatrenovatie@gmail.com'>gipsplaatrenovatie@gmail.com</a>
                    </Breadcrumbs>
                    <Breadcrumbs className="breadcrumbs" separator='|'>
                        <Avatar className="avatar-image" sx={{ width: 40, height: 40, backgroundColor:'#d5dee6' }} src='images/telephone.svg' />
                        <label>+31638234157</label>
                    </Breadcrumbs>
                    <Breadcrumbs className="breadcrumbs">
                    <span className="icons">
                            <img onClick={languageNl}
                                className="iconFr"
                                alt="Netherlands"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg"/>
                            <img onClick={languageFr}
                                className="iconFr"
                                alt="France"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
                            <img onClick={languageEn}
                                className="iconFr"
                                alt="English"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                        </span>
                    </Breadcrumbs>
                </Stack>
                <nav className="nav-primary">
                    <div className="menu-container">
                        <ul className="menu-menu">
                        <Breadcrumbs className="breadcrumbs" separator='|'>
                            <li>
                            <NavLink to="/"><a>{strings.navigation.home}</a></NavLink>
                            </li>
                            <div className="drop-down">
                                <li>
                                <a>{strings.navigation.services}<i className="arrow down"></i></a>
                                </li>
                                    <div className="drop-down-content">
                                        <a onClick={navigateItem1}>{strings.constants.services.renovation}</a>
                                        <a onClick={navigateItem2}>{strings.constants.services.plaster}</a>
                                        <a onClick={navigateItem3}>{strings.constants.services.customKitchen}</a>
                                        <a onClick={navigateItem4}>{strings.constants.services.interiorExterior}</a>
                                        <a onClick={navigateItem5}>{strings.constants.services.modernWalls}</a>
                                        <a onClick={navigateItem6}>{strings.constants.services.floorLaminate}</a>
                                        <a onClick={navigateItem7}>{strings.constants.services.painting}</a>
                                        <a onClick={navigateItem8}>{strings.constants.services.customVeranda}</a>
                                        <a onClick={navigateItem9}>{strings.constants.services.inovativeAdvices}</a>
                                    </div>
                            </div>
                            <li>
                            <NavLink to="/projects"><a>{strings.navigation.project}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/about-us"><a>{strings.navigation.referecnes}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact"><a>{strings.navigation.contact}</a></NavLink>
                            </li>
                            </Breadcrumbs>
                        </ul>
                    </div>
                </nav>
                <div className="menu-button">
                    <label for="check" className="check-btn">
                        <FaBars size={20} className="bars" />
                        <FaRegTimesCircle size={20} className="bars" />
                    </label>
                    </div>
            </div>
            
        </header>
        <ul className="mobile-menu-menu">
                            <li>
                            <NavLink to="/"><a>{strings.navigation.home}</a></NavLink>
                            </li>
                           <li>
                               <NavLink to="/services"><a>{strings.navigation.services}</a></NavLink>
                           </li>
                            <li>
                            <NavLink to="/projects"><a>{strings.navigation.project}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/about-us"><a>{strings.navigation.referecnes}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact"><a>{strings.navigation.contact}</a></NavLink>
                            </li>
                        </ul>

    </React.Fragment>
}

export default Navigation2;