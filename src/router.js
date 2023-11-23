import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './Pages/logon';
import Dashboard from './Pages/dashboard';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Logon}></Route>
                <Route path={"/dashboard"}  component={Dashboard}></Route>
            </Switch>
        </BrowserRouter>
    )
}