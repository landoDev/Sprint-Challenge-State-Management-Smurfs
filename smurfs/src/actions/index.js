import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_SMURFS = 'UPDATE_SMURFS'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'

export const getState = () => dispatch =>{
  dispatch({type: FETCH_DATA});
  axios.get('http://localhost:3333/smurfs')
  .then(res=>{
    dispatch({type: UPDATE_SMURFS, payload: res.data})
  })
  .catch(err=>{
    dispatch({type: SET_ERROR, payload: 'Gargamel has, at long last, turned the smurfs into gold'})
  })
}

export const addState = smurf => dispatch =>{
  dispatch({type: ADD_SMURF, payload: {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height,
    id: smurf.id
  }})
}