import React, {useEffect} from 'react'
import {compose} from "redux";
import {useHistory, withRouter} from "react-router";
import s from './Film.module.css'
import {connect} from "react-redux";
import {getFilmThunk} from "../../Redux/Reducers/filmReducer";
import {setUnShowFilm} from "../../Redux/Reducers/contentReducer";


function Film(props) {

    let history = useHistory();

    useEffect(() => {
        debugger
        let filmId = props.match.params.filmId
        props.getFilmThunk(filmId)
    }, [])

    let back = e => {
        e.stopPropagation();
        history.goBack();
        props.setUnShowFilm(false)
    }
    return (
        <div>
            <a onClick={back}>
                <div className={s.back}>
                    <div>Назад</div>
                </div>
            </a>

            <div className={props.showFilm ? s.show : s.unShow}>
                <div className={s.film}>
                    <div className={s.film_inner}>
                        <div className={s.description}>
                            <div className={s.poster}>
                                <img
                                    src={"https://image.tmdb.org/t/p/w220_and_h330_face" + props.filmInfo.poster}/>
                            </div>
                            <div>
                                <h2> {props.filmInfo.title}</h2>
                                <div>{props.filmInfo.tagline}</div>
                                <div className={s.age}>16+</div>
                                <div>
                                    <div className={s.info}><strong>Release
                                        date</strong> {props.filmInfo.release_date}</div>
                                    <div className={s.info}>
                                        <strong>Runtime</strong> {props.filmInfo.runtime}min
                                    </div>
                                    {/* <div className={s.info}><strong>Genres</strong> {props.filmInfo.genres[0].name}</div>*/}
                                    <div className={s.info}><strong>Budget</strong> {props.filmInfo.budget}$</div>
                                </div>
                            </div>

                        </div>
                        <div className={s.overview}>Description:<br/>{props.filmInfo.overview}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        filmInfo: state.film,
        showFilm: state.content.showFilm,
    }
}

export default compose(connect(mapStateToProps, {getFilmThunk, setUnShowFilm}), withRouter)(Film);