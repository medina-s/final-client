import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
// import { Button } from reactstrap;
// import Home from '../Reviews/ReviewIndex';
import ReviewCreate from '../Reviews/ReviewCreate';
import ReviewIndex from '../Reviews/ReviewIndex';
// import ReviewUpdate from '../Reviews/ReviewUpdate';


const Sidebar = (props) => {
    return(
        <div className='sidebar'>
            <button onClick={props.clickLogout}>Logout</button>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/reviewindex'>Reviews</Link></li>
                    <li><Link to='/reviewcreate'>Review Create</Link></li>
                    {/* <li><Link to='/reviewupdate'>Review Update</Link></li> */}
                    
                </ul>
            </div>
        
    
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/reviewindex'><ReviewIndex /></Route>
                    <Route exact path='/reviewcreate'><ReviewCreate token={props.sessionToken} /></Route>
                    {/* <Route exact path='/reviewupdate'><ReviewUpdate /></Route> */}
                </Switch>
            </div>

            </div>
    )
}

export default Sidebar;