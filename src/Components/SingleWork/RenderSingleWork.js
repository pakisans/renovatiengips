import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "../ReactSlider/ReactSlider";
import { changeHeaderBackground, changeHeaderTitle } from "../Slices/SingleWorkSlice";
import "./singleWork.scss"
const RenderSingleWork = (props) => {
    const dispatch = useDispatch();

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
                <div>
                    <ReactSlider images={props.images} />
                </div>
            </div>
        </div>
    </div>
}

export default RenderSingleWork;