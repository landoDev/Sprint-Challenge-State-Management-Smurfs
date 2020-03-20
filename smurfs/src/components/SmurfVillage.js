import React from 'react';
import { connect } from 'react-redux';

const SmurfVillage = props =>{
    return(
        <>
            {props.smurfs.map(smurf=>{
                return(
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <p>{smurf.age} years old</p>
                        <p>{smurf.height}</p>
                    </div>
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

export default connect(mapStateToProps, {})(SmurfVillage);