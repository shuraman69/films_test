import React, {useState} from "react";
import s from "./Header.module.css"
import DropDown from "../../common/DropDown/DropDown";
import {connect} from "react-redux";
import {setSearchIdThunk} from "../../Redux/Reducers/headerReducer";

const Header = (props) => {
    let [inputText, setInputText] = useState("")
    const onChangeText = (e) => {
        setInputText(e.target.value)
    }
    return (
        <div>
            <header>
                <div className={s.header_title}>Films</div>
                <div className={s.action}>
                    <div>
                        <input onChange={onChangeText} value={inputText} placeholder="Search" type="text"/>
                        <button>Find</button>
                    </div>
                    <DropDown/>
                </div>
            </header>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        topRated: state.content.topRated,
        popular: state.content.popular
    }
}
export default connect(mapStateToProps, {setSearchIdThunk})(Header);