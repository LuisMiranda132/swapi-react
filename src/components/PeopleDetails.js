import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsData } from '../actions/shared';

import './PeopleDetails.scss'

const PeopleDetails = (props) => {

    const dispatch = useDispatch();
    const { name, eye_color, hair_color, skin_color, birth_year, species, homeworld, vehicles, starships } = props;

    const specie = useSelector((state) => (species.length ? state.species[species[0]] : { name: "Human" }))
    const planet = useSelector((state) => (state.planets[homeworld]))
    const vehiclesNames = useSelector((state) => (vehicles.reduce((acum,id) => ( state.vehicles[id] ? [...acum, state.vehicles[id].name ] : acum), [] )))
    const starshipsNames = useSelector((state) => (starships.reduce((acum,id) => ( state.starships[id] ? [...acum, state.starships[id].name ] : acum), [] )))

    useEffect(() => {
        dispatch(getDetailsData(vehicles, starships))
    }, [])

    return (<div className='details'>
        <h2 className='name'>Name: {name}</h2>

        <div className='content'>
            <div className='boxes'>
                <h4>Specie: {specie && specie.name}</h4>
                <h4>Homeworld: {planet && planet.name}</h4>

                <h4>Birth Year: {birth_year}</h4>
            </div>

            <div className='boxes'>
                <h4>Appearance:</h4>
                <h5>Eye Color: {eye_color}</h5>
                <h5>Hair Color: {hair_color}</h5>
                <h5>Skin Color: {skin_color}</h5>

            </div>

            {vehicles.length > 0 && <div className='boxes'>
                <h4>Vehicles:</h4>
                {vehiclesNames.map((vehicle) => (<h5 key={vehicle}>{vehicle}</h5>))}
            </div>}

            {starships.length > 0 && <div className='boxes'>
                <h4>Starships:</h4>
                {starshipsNames.map((starship) => (<h5 key={starship}>{starship}</h5>))}
            </div>}
        </div>

    </div>)
}

export default PeopleDetails;