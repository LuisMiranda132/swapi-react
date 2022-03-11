import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './PeopleCard.scss'

const PeopleCard = (props) => {

    const navigate = useNavigate();

    const { name, species, homeworld, id } = props;

    const specie = useSelector((state) => (species.length ? state.species[species[0]] : { name : "Human"}))
    const planet = useSelector((state) => (state.planets[homeworld]))

    return (
        <div className="card" onClick={ () => (navigate("details/"+id))}>
            <h3>{name}</h3>
            <h5>{specie && specie.name } from {planet && planet.name}</h5>
        </div>)

}

export default PeopleCard;