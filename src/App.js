import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Football from './components/football/football';
import Basketball from './components/basketball/basketball';
import Specificgame from './components/specificgame/specificgame';


class App extends React.Component {

    state = {

    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <Router>
                    <Switch>
                        <Route path='/Basketball' render={(props) => <Basketball {...props} />} />
                        <Route path='/:id' render={(props) => <Specificgame {...props} />} />
                        <Route path='/' render={(props) => <Football {...props} />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
