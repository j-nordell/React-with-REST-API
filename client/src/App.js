import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Courses from './components/Courses';
import Nav from './components/Nav';
import CourseDetail from './components/CourseDetail';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <div className="bounds">
            <Nav />
          </div>
        </div>
          <div className="container">
            <Switch>
              <Route exact path="/" render={ () => <Courses /> } />
              <Route exact path="/courses/:id" render={(props) => <CourseDetail id={props.match.params.id }/> } />
            </Switch>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
