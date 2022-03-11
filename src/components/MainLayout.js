import React from "react"
import { Outlet, useNavigate } from 'react-router-dom';
import { GiDeathStar } from 'react-icons/gi'

import LoadingBar from 'react-redux-loading';

import './MainLayout.scss'
import { useSelector } from "react-redux";

const MainLayout = (props) => {

    const navigate = useNavigate();
    const { error } = useSelector((state) => (state))

    return (
        <>
            <header className="header">
                <button
                    onClick={() => { navigate("/") }}>
                    <GiDeathStar style={{ fill: 'yellow' }} />
                    Home
                </button>
                <h1 className="title">People of Star Wars</h1>
            </header>
            <LoadingBar style={{ backgroundColor: 'yellow' }} />

            {error ?
                <div className='error'>
                    <h2>Failed to Load Data</h2>
                </div>
                : <main >
                    <Outlet />
                </main>
            }
        </>
    )
}

export default MainLayout;