import React from "react";
import { useMediaQuery } from "react-responsive";
import SimpleImageSlider from "react-simple-image-slider";

const ReactSlider = (props) => {
    const images = props.images;

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return <React.Fragment>
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
            }
    </React.Fragment>
}

export default ReactSlider;