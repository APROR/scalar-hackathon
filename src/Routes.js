import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import IT from './IT';
import ECE from './ECE';
import EEE from './EEE';
import MECH from './MECH'
import UploadFile from './UploadFile';
import Subject from './Subject';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/it" exact component={IT} />
                <Route path="/ece" exact component={ECE} />
                <Route path="/eee" exact component={EEE} />
                <Route path="/mech" exact component={MECH} />
                <Route path="/:id/:name" exact component={Subject} />
                <Route path="/uploadfile" exact component={UploadFile}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes