import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../Reviews/ReviewIndex';
import ReviewCreate from '../Reviews/ReviewCreate';


const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/reviewcreate'>Review Create</Link></li>
                    
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/reviewcreate'><ReviewCreate /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;