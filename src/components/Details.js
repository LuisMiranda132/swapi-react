import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PeopleDetails from './PeopleDetails';


const Details = (props) => {

    const { id } = useParams()
    const navigate = useNavigate();
    const people = useSelector((state) => (state.people.elements[id]))
    
    useEffect(() => {
        if (!people) {
            navigate("/")
        }
    }, []);

    return (<>
        {people && <PeopleDetails {...people} />}
    </>)
}

export default Details;