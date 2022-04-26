import React from "react";
import strings from "../../localization";
import './projects.scss';
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from 'react-responsive'
import ResponsiveGallerys from "./ResponisveGallery";

const Projects = () => {

    const images = [
        '/images/plaster/image1.jpg',
        '/images/plaster/image2.jpg',
        '/images/plaster/image3.jpg',
        '/images/plaster/image4.jpg',
        '/images/plaster/image5.jpg',
        '/images/plaster/image6.jpg',
        '/images/plaster/image7.jpg',
        '/images/plaster/image8.jpg',
        '/images/plaster/image9.jpg',
        '/images/plaster/image10.jpg',
        '/images/plaster/image11.jpg',
        '/images/plaster/image12.jpg',
        '/images/plaster/image13.jpg',
        '/images/plaster/image14.jpg',
        '/images/plaster/image15.jpg',
        '/images/plaster/image16.jpg',
        '/images/plaster/image17.jpg',
        '/images/plaster/image18.jpg',
        '/images/plaster/image19.jpg',
        '/images/plaster/image20.jpg',
        '/images/plaster/image21.jpg',
        '/images/modern/image1.jpg',
        '/images/modern/image2.jpg',
        '/images/modern/image3.jpg',
        '/images/modern/image4.jpg',
        '/images/modern/image5.jpg',
        '/images/modern/image6.jpg',
        '/images/modern/image7.jpg',
        '/images/modern/image8.jpg',
        '/images/modern/image9.jpg',
        '/images/modern/image10.jpg',
        '/images/modern/image11.jpg',
        '/images/modern/image12.jpg',
        '/images/modern/image13.jpg',
        '/images/modern/image14.jpg',
        '/images/modern/image15.jpg',
        '/images/modern/image16.jpg',
        '/images/modern/image17.jpg',
        '/images/modern/image18.jpg',
        '/images/modern/image19.jpg',
        '/images/modern/image20.jpg',
        '/images/modern/image21.jpg',
        '/images/interior/image1.jpg',
        '/images/interior/image2.jpg',
        '/images/interior/image3.jpg',
        '/images/interior/image4.jpg',
        '/images/interior/image5.jpg',
        '/images/interior/image6.jpg',
        '/images/interior/image7.jpg',
        '/images/interior/image8.jpg',
        '/images/interior/image9.jpg',
        '/images/interior/image10.jpg',
        '/images/interior/image11.webp',
        '/images/interior/image12.jpg',
        '/images/interior/image13.jpg',
        '/images/interior/image14.jpg',
      ];
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    
    return (
        <>
        <section className="header-projects">
            <div className="header-con-wraper">
                <div className="header-con">
                    <span className="page-title">
                        {strings.pages.projects.pageTitle}
                    </span>
                </div>
            </div>
            <div className="header-image">
                <img className="image" src='images/realz.jpeg' />
            </div>
        </section>
        <section className="section-wraper">
        <ResponsiveGallerys images={images} />
        {/* <h1 style={{color:'#fff'}}>Check our work</h1> */}
{/*             
            {
                isDesktopOrLaptop && <div style={{marginLeft:'200px'}}>
                    <SimpleImageSlider
                        width={896}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        slideDuration={4}
                        autoPlay={true}
                        autoPlayDelay={true}
                    />
                </div>
            }
            {
                isTabletOrMobile && <div style={{marginLeft:'0px'}}>
                    <SimpleImageSlider
                        width={300}
                        height={250}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        slideDuration={4}
                        autoPlay={true}
                        autoPlayDelay={true}
                    />
                </div>
            } */}
            {/* <div className="gallery-box">
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
            </div> */}
        </section>
        </>
    )
}

export default Projects;