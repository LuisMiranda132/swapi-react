import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getData } from '../actions/shared';
import PeopleCard from './PeopleCard';

import './Dashboard.scss'

const Dashboard = () => {

    const dispatch = useDispatch();

    const { people } = useSelector((state) => (state))
    const { elements, next } = people;

    useEffect(() => {
        if (Object.keys(elements).length == 0) {
            dispatch(getData())
        }
    }, [])

    return (
        <div className='dashboard'>
            <div className='people-list'>
                {Object.keys(elements).map((id) => (<PeopleCard key={id} id={id} {...elements[id]} />))}
            </div>
            <div className='bottom'>
                <button
                    onClick={() => { dispatch(getData(next)) }}>
                    Load more
                </button>
            </div>
        </div>
    )
}

export default Dashboard;