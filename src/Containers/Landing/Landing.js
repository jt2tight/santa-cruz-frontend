import React, { useState } from 'react'; 
import classes from "./Landing.module.css";
import BackgroundLayer from '../../images/bg2.png';
import TopLayer from '../../images/toplayer2.png';
import LogoPNG from '../../images/santacruzwhitepng.png';

const Landing = () => {

        const [offset, setOffset] = useState();

        const handleScroll = () => setOffset(window.pageYOffset)

        let backgroundOffset =  offset * 0.01; 
        let topLayerOffset = offset * -0.0015; 
        let logoOffset = offset * -0.3;

        if (window.innerWidth > 1440){
            topLayerOffset = offset * -0.0018
        }

        window.addEventListener('scroll', handleScroll)

    
        return(
            <div className={classes.Landing}>
                <div className={classes.BackgroundLayer}>
                    <img src={BackgroundLayer} alt="" 
                        style={{
                            transform: "translateY(" + backgroundOffset + "%)"
                        }}
                
                    />
                </div>
                <div className={classes.TopLayer}>
                    <img src={TopLayer} alt="" 
                    style={{
                        transform: "translateY(" + topLayerOffset + "%)"
                    }}
                    
                    />
                </div>
                <div className={classes.LogoPNG}>
                    <img src={LogoPNG} id={LogoPNG} alt="" 
                    
                    style={{
                        transform: "translateY(" + logoOffset + "%)"
                    }}
                    />
                </div>


            </div>
        )
    
}

export default Landing; 