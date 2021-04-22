import React from 'react';
import ReactDOM from 'react-dom';

import App from './Views/App';
export { globals } from '../src/Styles/global'
import "./index.css"
import StyleComponents1 from './Views/StyleComponents1';
import StyleComponents2 from './Views/StyleComponents2';
import StyleComponents3 from './Views/StyleComponents3';
import StyleComponents4Theme from './Views/StyleComponents4Theme';
import StyleComponents5 from './Views/StyleComponents5';
import StyleTheme1 from './Views/StyleTheme1';
import StyleTheme2 from './Views/StyleTheme2';
import Radium1 from './Views/Radium1';
import Linaria1 from './Views/Linaria/Index1';


import { Route, BrowserRouter as Router, Link } from 'react-router-dom'


ReactDOM.render(
  <Router >
    <nav>
      <ul className="main-ul">
        <li className="main-ul__li"><Link to="/">Home</Link></li>
        <li className="main-ul__li"><Link to="/style-components1">StyleComponents1</Link></li>
        <li className="main-ul__li"><Link to="/style-components2">StyleComponents2</Link></li>
        <li className="main-ul__li"><Link to="/style-components3">StyleComponents3</Link></li>
        <li className="main-ul__li"><Link to="/style-componentsTheme">StyleComponents4Theme</Link></li>
        <li className="main-ul__li"><Link to="/style-components5">StyleComponents5</Link></li>
        <li className="main-ul__li"><Link to="/style-styleTheme1">StyleTheme1</Link></li>
        <li className="main-ul__li"><Link to="/style-styleTheme2">StyleTheme2</Link></li>
        <li className="main-ul__li"><Link to="/Radium1">Radium1</Link></li>
        <li className="main-ul__li"><Link to="/Linaria1">Linaria1</Link></li>
      </ul>
    </nav>
    <Route path="/" component={App} exact></Route>
    <Route path="/radium" component={Radium1} ></Route>
    <Route path="/style-components1" component={StyleComponents1} ></Route>
    <Route path="/style-components2" component={StyleComponents2} ></Route>
    <Route path="/style-components3" component={StyleComponents3} ></Route>
    <Route path="/style-componentsTheme" component={StyleComponents4Theme} ></Route>
    <Route path="/style-components5" component={StyleComponents5} ></Route>
    <Route path="/style-styleTheme1" component={StyleTheme1} ></Route>
    <Route path="/style-styleTheme2" component={StyleTheme2} ></Route>
    <Route path="/Radium1" component={Radium1} ></Route>
    <Route path="/Linaria1" component={Linaria1} ></Route>
  </Router>,
  document.getElementById('root')
);

