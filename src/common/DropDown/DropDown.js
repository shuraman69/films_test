import React from "react";
import s from "./DropDown.module.css"

const DropDown = () => {

    return (
        <div>
            <div className={s.dropdown}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown;