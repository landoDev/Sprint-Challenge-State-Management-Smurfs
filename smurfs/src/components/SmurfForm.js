
import React, {useState} from 'react';
import { connect } from 'react-redux'
import { getState, addState } from '../actions/index'

const SmurfForm = props =>{
    const [newSmurf, setNewSmurf]= useState({
      name: '',
      age: NaN,
      height: '',
      id: Date.now()
    })

    const handleGetState = e =>{
        e.preventDefault();
        props.getState()

    }
    const handleChanges = e =>{
      e.preventDefault();
      console.log('Target',e.target.name)
      setNewSmurf({
        ...newSmurf,
        [e.target.name]: e.target.value
      })

    }
    const handleAddState = e =>{
        e.preventDefault();
        props.addState(newSmurf)

    }
    console.log('this components state', newSmurf )
    return(
        <>
        {props.isFetching ? <div>Summoning Smurf Village</div> : <button onClick={handleGetState}>Click to Summon Smurf Village</button>}
        {props.isAdding ? <div>Adding NEW Smurf!</div> : 
        
        <form onSubmit={handleAddState}>
        <h2>Add a Smurf!</h2>
        <label>Name</label>
        <input type='text' name='name' onChange={handleChanges}></input>
        <label>Age</label>
        <input type='number' name='age' min='1' max='1000' onChange={handleChanges}></input>
        <label>Height</label>
        <input type='text' name='height' onChange={handleChanges}></input>
        <button> add smurfs </button>
        </form>
        }
        </>
    );
};

const mapPropsToState = state =>{
    return{
        smurf: state.smurf
    };
};

export default connect(mapPropsToState, { getState, addState })(SmurfForm);