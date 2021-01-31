import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Film from "./Components/Film/Film";
import {Route, withRouter} from "react-router";
import {compose} from "redux";

function App() {
    return (<div>
            <Header/>
            <div className='block'>
                <Nav/>
                <Route path='' render={() => <Content/>}/>
                <Route path='/film/:filmId' render={() => <Film/>}/>
            </div>
        </div>
    );
}

export default compose(withRouter)(App)
