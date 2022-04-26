import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import strings from "../../localization";
import ReactSlider from "../ReactSlider/ReactSlider";
import { changeHeaderBackground, changeHeaderTitle } from "../Slices/SingleWorkSlice";
import "./singleWork.scss"
const RenderSingleWork = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const requestQuote = () =>{
        navigate('/quote')
    }

    const contactUs = () => {
        navigate('/contact')
    }

    useEffect(() => {
        dispatch(changeHeaderTitle(props.headerName));
        dispatch(changeHeaderBackground(props.headerBackground));
    },[])

    return <div className="single-work-main">
        <div className="single-work-wraper">
            <span className="work-title">{props.pageTitle}</span>
            <p className="description">{props.firstDescritpion}</p>
            <span className="work-title">{props.pageTitle2}</span>
            <div className="image-slide-layout">
                <div className="text-div">
                    <p className="description">{props.secondDesc}</p>
                </div>
                <span className="work-title">{props.pageTitle3}</span>
                <div className="react-slider-div">
                    <span className="react-slider"><ReactSlider images={props.images} /></span>
                </div>
            </div>
            <div className="single-work-buttons">
                <a onClick={contactUs} className="button-blue">{strings.pages.home.titles.contactUs}</a>
            
                <a onClick={requestQuote} className="button">{strings.pages.home.titles.requestQuote}</a>
            </div>
        </div>
    </div>
}

export default RenderSingleWork;