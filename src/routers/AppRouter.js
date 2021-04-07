import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
    
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {   // ? verifies if the user is not null. If it is not, the uid is searched
                dispatch( login( user.uid, user.displayName ) );
            }

        });
        
    }, [ dispatch ])  // [] empty, therefore the useEffect() only will execute once, when loaded the page. that is ok, because onAuthStateChanged() is an obsrvable, so it will check constantly for changes 


    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth" 
                        component={ AuthRouter }    
                    />
                    <Route 
                        exact
                        path="/" 
                        component={ JournalScreen }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>

    )
};