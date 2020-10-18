import React from "react";

//react-router-dom, external library for react
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//other components from the same directory
//check the "components" directory to see the other components.
import HelloWorld from "./helloworld";
import ByeWorld from "./byeWorld";

export const Routing = () => {
    return(

        
        <Router>
        {/* ^^ Built in component for routing in React, if you are using Router
            it MUST be the most outer container */}
            
            <nav>
                
                {/* A list of links that take the user to different URLs
                    the URLs load different pages. In this case it does load 
                    different pages but under the same parent container. So 
                    the pages do not change entirely */}
                <ul>
                    <li>
                        <Link to="/hello">helloWorld</Link>
                    </li>
                    <li>
                        <Link to="/bye">byeWorld</Link>
                    </li>
                </ul>
            </nav>
            
            {/* Built in switch statement from the react-router-dom library */}
            <Switch>

            {/* One way to load a page. It will follow the URL in the "path" argument
                and load the component */}
                <Route path="/hello" component={HelloWorld} />

            {/* Another way to load a page. It will follow the URL in the "path" argument
                and load the component */}
                <Route path="/bye" >
                    <ByeWorld/>
                </Route>
            </Switch>
        </Router>
    )
}


export default Routing;