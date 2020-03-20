import React, { useState } from 'react';
import { connect } from 'react-redux';
import { crudState } from '../actions/index'

const SmurfVillage = props =>{
    const [deleteSmurf, setDeleteSmurf] = useState({});
    const handleDelete = e =>{
        e.preventDefault();
        // console.log(e.target.id)
        setDeleteSmurf({
            ...deleteSmurf,
            id: e.target.id
        })
        console.log(deleteSmurf)
        props.crudState(deleteSmurf)
    }
    return(
        <>
            {props.smurfs.map(smurf=>{
                return(
                    <>
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <p>{smurf.age} years old</p>
                        <p>{smurf.height}</p>
                    </div>
                    <button onClick={handleDelete} id={smurf.id}>Kidnap Smurf</button>
                    </>
                )
            })}
        </>
    )
}

const mapStateToProps = state =>{
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {crudState})(SmurfVillage);