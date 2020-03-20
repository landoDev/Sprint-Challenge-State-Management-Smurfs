import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const GET_SMURFS = 'GET_SMURFS'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'
export const RESET_FORM = 'RESET_FORM'

export const getState = () => dispatch =>{
  dispatch({type: FETCH_DATA});
  axios.get('http://localhost:3333/smurfs')
  .then(res=>{
    dispatch({type: GET_SMURFS, payload: res.data})
  })
  .catch(err=>{
    console.log(err)
    dispatch({type: SET_ERROR, payload: 'Gargamel has, at long last, turned the smurfs into gold'})
  })
}

export const addState = smurf => dispatch =>{
    setTimeout(()=>dispatch({type: ADD_SMURF, payload: {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id
    }}), 5000)
;
    // dispatch({type: ADD_SMURF});
    axios.post('http://localhost:3333/smurfs',{
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
            id: smurf.id
        })
    setTimeout(()=> dispatch({type: RESET_FORM}), 2000)
    ;
}