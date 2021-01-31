import s from "../Content.module.css"
import {NavLink} from "react-router-dom";

const Popular = (props) => {
    let set = () => {
        props.setShowFilm(true)
    }
    return (
        <div className={s.container}>
            <h2>Popular</h2>
            <div className={s.film}>
                {props.popular.map(r => (
                    <div className={s.filmCard} key={r.id}>
                        <NavLink to={'/film/' + r.id} className={s.filmLink}>
                            <img onClick={() => {
                                set()
                            }} className={s.filmImg}
                                 src={"https://image.tmdb.org/t/p/w220_and_h330_face" + r.poster_path}/>
                        </NavLink>
                        <div className={s.info}>
                            <div className={s.release}>Release date: {r.release_date}</div>
                            <div className={s.vote_count}>Rating: {r.vote_count}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular;