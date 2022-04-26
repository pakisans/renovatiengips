import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import RenderSingleWork from "../../Components/SingleWork/RenderSingleWork";
import strings from "../../localization";
import './singleWork.scss'

const SingleWork = () => {
    const location = useLocation();
    const [pageState, setPageState] = useState(0);
    const headerTitle = useSelector((state) => state.singleWork.headerTitle);
    const headerBackground = useSelector((state) => state.singleWork.headerBackground);

    useEffect(() => {
        setPageState(location.state)
    },[location.state])

    const renovation = () => {
        return <React.Fragment>
            
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.renovation.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.renovation.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.renovation.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.renovation.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.renovation.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.renovation.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.renovation.li1}</li>
                                <li>{strings.pages.works.renovation.li2}</li>
                                <li>{strings.pages.works.renovation.li3}</li>
                                <li>{strings.pages.works.renovation.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.renovation.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.renovation.description4}
                            </span>
                        </p>

                    </div>
            </section>
            </React.Fragment>
    }

    const plaster = () => {
        return <>
            <section className="header">
                    <div className="content">
                        <div className="header-content">
                            <span className="span-title">
                                {strings.pages.works.plaster.pageTitle}
                            </span>
                        </div>
                    </div>
                    <div className="header-image">
                        <img className="image" src='/images/plaster.jpg' />
                    </div>
                </section>
                <section className="content-section">
                    <div className="content-section-wraper">
                            <h1>{strings.pages.works.plaster.pageTitle2}</h1>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description1}
                                </span>
                            </p>
                            <h2>{strings.pages.works.plaster.pageTitle3}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description2}
                                </span>
                            </p>
                            <h2>{strings.pages.works.plaster.pageTitle4}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description3}
                                </span>
                            </p>
                            <p>
                                <ul>
                                    <li>{strings.pages.works.plaster.li1}</li>
                                    <li>{strings.pages.works.plaster.li2}</li>
                                    <li>{strings.pages.works.plaster.li3}</li>
                                    <li>{strings.pages.works.plaster.li4}</li>
                                </ul>
                            </p>
                            <h2>{strings.pages.works.plaster.pageTitle5}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description4}
                                </span>
                            </p>

                        </div>
                </section>
            </>
    }

    const customKitchen = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.customKitchen.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/customKitchen.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.customKitchen.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customKitchen.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customKitchen.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.customKitchen.li1}</li>
                                <li>{strings.pages.works.customKitchen.li2}</li>
                                <li>{strings.pages.works.customKitchen.li3}</li>
                                <li>{strings.pages.works.customKitchen.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.customKitchen.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const interiorExterior = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.interiorExterior.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/interiorExterior.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.interiorExterior.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.interiorExterior.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.interiorExterior.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.interiorExterior.li1}</li>
                                <li>{strings.pages.works.interiorExterior.li2}</li>
                                <li>{strings.pages.works.interiorExterior.li3}</li>
                                <li>{strings.pages.works.interiorExterior.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.interiorExterior.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const modernWalls = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.modernWalls.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/dryCeiling.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.modernWalls.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.modernWalls.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.modernWalls.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.modernWalls.li1}</li>
                                <li>{strings.pages.works.modernWalls.li2}</li>
                                <li>{strings.pages.works.modernWalls.li3}</li>
                                <li>{strings.pages.works.modernWalls.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.modernWalls.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const floorLaminate = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.floorLaminate.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/floorLaminate.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.floorLaminate.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.floorLaminate.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.floorLaminate.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.floorLaminate.li1}</li>
                                <li>{strings.pages.works.floorLaminate.li2}</li>
                                <li>{strings.pages.works.floorLaminate.li3}</li>
                                <li>{strings.pages.works.floorLaminate.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.floorLaminate.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const painting = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.painting.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/paiting.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.painting.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.painting.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.painting.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.painting.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.painting.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.painting.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.painting.li1}</li>
                                <li>{strings.pages.works.painting.li2}</li>
                                <li>{strings.pages.works.painting.li3}</li>
                                <li>{strings.pages.works.painting.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.painting.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.painting.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const customVeranda = () =>{
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.customVeranda.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/veranda.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.customVeranda.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customVeranda.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customVeranda.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.customVeranda.li1}</li>
                                <li>{strings.pages.works.customVeranda.li2}</li>
                                <li>{strings.pages.works.customVeranda.li3}</li>
                                <li>{strings.pages.works.customVeranda.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.customVeranda.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const inovativeAdvices = () =>{
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.advices.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/advice.png' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.advices.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.advices.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.advices.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.advices.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.advices.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.advices.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.advices.li1}</li>
                                <li>{strings.pages.works.advices.li2}</li>
                                <li>{strings.pages.works.advices.li3}</li>
                                <li>{strings.pages.works.advices.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.advices.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.advices.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    return <React.Fragment>
        <section className="header">
                    <div className="content">
                        <div className="header-content">
                            <span className="span-title">
                                {headerTitle}
                            </span>
                        </div>
                    </div>
                    <div className={'header-image'}>
                        {/* <img className="image" src='/images/renovation.jpeg' /> */}
                        <img className="image" src={headerBackground} />
                    </div>
        </section>
        <div className="single-work-content">
        {
            pageState === 1 && <RenderSingleWork  images = {[
                                                { url: "/images/renovation/image1.jpg" },
                                                { url: "/images/renovation/image2.jpg" },
                                                { url: "/images/renovation/image3.jpg" },
                                                { url: "/images/renovation/image4.jpg" },
                                                { url: "/images/renovation/image5.jpg" },
                                                { url: "/images/renovation/image6.jpg" },
                                                { url: "/images/renovation/image7.jpg" },
                                                { url: "/images/renovation/image8.jpg" },
                                                { url: "/images/renovation/image9.jpg" },
                                                { url: "/images/renovation/image10.jpg" },
                                                { url: "/images/renovation/image11.jpg" },
                                                { url: "/images/renovation/image12.jpg" },
                                                { url: "/images/renovation/image13.jpg" },
                                                ]}
                                                 headerName={strings.pages.works.renovation.pageTitle}
                                                 headerBackground={'/images/renovation.jpeg'}
                                                 pageTitle={strings.pages.works.renovation.pageTitle2}
                                                 firstDescritpion={strings.pages.works.renovation.description1}
                                                 pageTitle2={strings.pages.works.renovation.pageTitle3}
                                                 secondDesc={strings.pages.works.renovation.description2}
                                                 pageTitle3={strings.pages.works.renovation.pageTitle4}
            />
        }
        {
            pageState === 2 && <RenderSingleWork  images = {[
                                                { url: "/images/plaster/image1.jpg" },
                                                { url: "/images/plaster/image2.jpg" },
                                                { url: "/images/plaster/image3.jpg" },
                                                { url: "/images/plaster/image4.jpg" },
                                                { url: "/images/plaster/image5.jpg" },
                                                { url: "/images/plaster/image6.jpg" },
                                                { url: "/images/plaster/image7.jpg" },
                                                { url: "/images/plaster/image8.jpg" },
                                                { url: "/images/plaster/image9.jpg" },
                                                { url: "/images/plaster/image10.jpg" },
                                                { url: "/images/plaster/image11.jpg" },
                                                { url: "/images/plaster/image12.jpg" },
                                                { url: "/images/plaster/image13.jpg" },
                                                { url: "/images/plaster/image14.jpg" },
                                                { url: "/images/plaster/image15.jpg" },
                                                { url: "/images/plaster/image16.jpg" },
                                                { url: "/images/plaster/image17.jpg" },
                                                { url: "/images/plaster/image18.jpg" },
                                                { url: "/images/plaster/image19.jpg" },
                                                { url: "/images/plaster/image20.jpg" },
                                                { url: "/images/plaster/image21.jpg" },
                                                ]}
                                                 headerName={strings.pages.works.plaster.pageTitle}
                                                 headerBackground={'/images/plaster.jpg'}
                                                 pageTitle={strings.pages.works.plaster.pageTitle2}
                                                 firstDescritpion={strings.pages.works.plaster.description1}
                                                 pageTitle2={strings.pages.works.plaster.pageTitle3}
                                                 secondDesc={strings.pages.works.plaster.description2}
                                                 pageTitle3={strings.pages.works.plaster.pageTitle4}
            />
        }
        {
            pageState === 6 && <RenderSingleWork  images = {[
                                                { url: "/images/modern/image1.jpg" },
                                                { url: "/images/modern/image2.jpg" },
                                                { url: "/images/modern/image3.jpg" },
                                                { url: "/images/modern/image4.jpg" },
                                                { url: "/images/modern/image5.jpg" },
                                                { url: "/images/modern/image6.jpg" },
                                                { url: "/images/modern/image7.jpg" },
                                                { url: "/images/modern/image8.jpg" },
                                                { url: "/images/modern/image9.jpg" },
                                                { url: "/images/modern/image10.jpg" },
                                                { url: "/images/modern/image11.jpg" },
                                                { url: "/images/modern/image12.jpg" },
                                                { url: "/images/modern/image13.jpg" },
                                                { url: "/images/modern/image14.jpg" },
                                                { url: "/images/modern/image15.jpg" },
                                                { url: "/images/modern/image16.jpg" },
                                                { url: "/images/modern/image17.jpg" },
                                                { url: "/images/modern/image18.jpg" },
                                                { url: "/images/modern/image19.jpg" },
                                                { url: "/images/modern/image20.jpg" },
                                                { url: "/images/modern/image21.jpg" },
                                                ]}
                                                 headerName={strings.pages.works.modernWalls.pageTitle}
                                                 headerBackground={'/images/dryCeiling.jpeg'}
                                                 pageTitle={strings.pages.works.modernWalls.pageTitle2}
                                                 firstDescritpion={strings.pages.works.modernWalls.description1}
                                                 pageTitle2={strings.pages.works.modernWalls.pageTitle3}
                                                 secondDesc={strings.pages.works.modernWalls.description2}
                                                 pageTitle3={strings.pages.works.modernWalls.pageTitle4}
            />
        }
        {
            pageState === 5 && <RenderSingleWork  images = {[
                                                { url: "/images/interior/image1.jpg" },
                                                { url: "/images/interior/image2.jpg" },
                                                { url: "/images/interior/image3.jpg" },
                                                { url: "/images/interior/image4.jpg" },
                                                { url: "/images/interior/image5.jpg" },
                                                { url: "/images/interior/image6.jpg" },
                                                { url: "/images/interior/image7.jpg" },
                                                { url: "/images/interior/image8.jpg" },
                                                { url: "/images/interior/image9.jpg" },
                                                { url: "/images/interior/image10.jpg" },
                                                { url: "/images/interior/image11.webp" },
                                                { url: "/images/interior/image12.jpg" },
                                                { url: "/images/interior/image13.jpg" },
                                                { url: "/images/interior/image14.jpg" },
                                                ]}
                                                 headerName={strings.pages.works.interiorExterior.pageTitle}
                                                 headerBackground={'/images/interiorExterior.jpeg'}
                                                 pageTitle={strings.pages.works.interiorExterior.pageTitle2}
                                                 firstDescritpion={strings.pages.works.interiorExterior.description1}
                                                 pageTitle2={strings.pages.works.interiorExterior.pageTitle3}
                                                 secondDesc={strings.pages.works.interiorExterior.description2}
                                                 pageTitle3={strings.pages.works.interiorExterior.pageTitle4}
            />
        }
        </div>
    </React.Fragment>
    // return (
    //     <main id='main-item'>
    //         {pageState === 1 && renovation()}
    //         {pageState === 2 && plaster()}
    //         {pageState === 4 && customKitchen()}
    //         {pageState === 5 && interiorExterior()}
    //         {pageState === 6 && modernWalls()}
    //         {pageState === 7 && floorLaminate()}
    //         {pageState === 8 && painting()}
    //         {pageState === 9 && inovativeAdvices()}
    //         {pageState === 3 && customVeranda()}
    //     </main>
    // )
}

export default SingleWork;