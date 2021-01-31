import {connect} from "react-redux";
import {getPopularThunk, getTopRatedThunk, setShowFilm} from "../../Redux/Reducers/contentReducer";
import {useEffect} from "react";
import {compose} from "redux";
import {withRouter} from "react-router";
import {getFilmThunk} from "../../Redux/Reducers/filmReducer";
import TopRated from "./TopRated/TopRated";
import Popular from "./Popular/Popular";

const Content = (props) => {
    useEffect(() => {
        props.getTopRatedThunk()
        props.getPopularThunk()
    }, [])


    return (<div>
            <TopRated setShowFilm={props.setShowFilm} topRated={props.topRated}/>
            <Popular setShowFilm={props.setShowFilm} popular={props.popular}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    debugger
    return {
        topRated: state.content.topRated,
        popular: state.content.popular
    }
}

export default compose(connect(mapStateToProps, {
    getPopularThunk,
    getTopRatedThunk,
    getFilmThunk,
    setShowFilm
}), withRouter)(Content);