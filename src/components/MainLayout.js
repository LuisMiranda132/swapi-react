import React from "react"
import { Outlet, useNavigate } from 'react-router-dom';
import { GiDeathStar } from 'react-icons/gi'

import LoadingBar from 'react-redux-loading';

import './MainLayout.scss'

const MainLayout = (props) => {

    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <button
                    onClick={() => { navigate("/") }}>
                    <GiDeathStar style={{ fill: 'yellow' }}/>
                    Home
                </button>
                <h1 className="title">People of Star Wars</h1>
            </header>
            <LoadingBar style={{ backgroundColor: 'yellow' }}/>

            <main >
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;