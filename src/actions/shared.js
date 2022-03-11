import axios from "axios";
import { showLoading, hideLoading } from 'react-redux-loading';

import { recievePeople } from "./people";
import { recievePlanets } from "./planets";
import { recieveSpecies } from "./species";
import { recieveStarships } from "./starships";
import { recieveVehicles } from "./vehicles";


export function getData(next = "https://swapi.dev/api/people/") {
    return function (dispatch) {
        dispatch(showLoading());
        return (axios.get(next)
            .then(({ data }) => {
                dispatch(recievePeople(data.results, data.next));

                let planets = data.results.reduce((accum, x) => ({ ...accum, [x.homeworld]: x.homeworld }), {})

                Promise.all(Object.keys(planets).map((url) => axios.get(url)))
                    .then((response) => {
                        dispatch(recievePlanets(response.reduce((accum, { data }) => ({ ...accum, [data.url]: data }), {})))
                    })


                let species = data.results.reduce((accum, x) => (x.species.length > 0 ? { ...accum, [x.species]: x.species } : accum), {})

                Promise.all(Object.keys(species).map((url) => axios.get(url)))
                    .then((response) => {
                        dispatch(recieveSpecies(response.reduce((accum, { data }) => ({ ...accum, [data.url]: data }), {})))
                        dispatch(hideLoading());
                    })


            }))
    }
}

export function getDetailsData(vehicles, starships) {
    console.log(vehicles)
    return function (dispatch) {
        dispatch(showLoading());
        return (Promise.all(vehicles.map((url) => axios.get(url)))
            .then((response) => {
                console.log(response)
                dispatch(recieveVehicles(response.reduce((accum, { data }) => ({ ...accum, [data.url]: data }), {})))
            })
            .then(() => {
                Promise.all(starships.map((url) => axios.get(url)))
                    .then((response) => {
                        dispatch(recieveStarships(response.reduce((accum, { data }) => ({ ...accum, [data.url]: data }), {})))
                        dispatch(hideLoading());
                    })
            })
        )
    }
}
