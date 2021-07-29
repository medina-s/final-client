import React, {useState} from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from '../Reviews/ReviewIndex';
import ReviewAll from '../Reviews/ReviewAll';
import ReviewCreate from '../Reviews/ReviewCreate';
import ReviewMine from '../Reviews/ReviewMine';

const token = localStorage.getItem("token")

const Navigation = (props) => {
    


return (
    <Switch>
            <Route exact path='/reviewcreate'><ReviewCreate sessionToken={props.sessionToken}/></Route>
            <Route exact path='/reviewall'><ReviewAll sessionToken={props.sessionToken}/></Route>
            <Route exact path='/reviewmine'><ReviewMine sessionToken={props.sessionToken}/></Route>
            <Route exact path='/'><Home /></Route>
        </Switch>
)
}

export default Navigation