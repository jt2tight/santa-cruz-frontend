import React, { Component } from 'react';
import classes from './Frame.module.css';
import GreenSC from '../../images/santa-cruz-5010grn-blackBG.png';
import MauveSC from '../../images/santa-cruz-5010-carbon-blackBG.png';

class Frame extends Component {

    state = {
        frame: this.props.selectedFrame.image,
        color: this.props.selectedFrame.color,
        material: this.props.selectedFrame.material, 
        size: this.props.selectedFrame.size,
        price: this.props.selectedFrame.price,
        subHead: 'Frame'
    }

    materialSelectHandler = (event) => {

        let framePrice = 2000; 
        if (event.target.value === 'Carbon'){
            framePrice = 3000;
        } 

        this.setState({
            material: event.target.value,
            price: framePrice
        })
        
    };

    sizeSelectHandler = (event) => {
        this.setState({
            size: event.target.value
        })
        
    }


    render(){

    return(
        <div className={classes.Frame} >
            <div className={classes.Info}>
                <ul>
                    <li className={classes.Attribute}>Color</li>
                    <li>{this.state.color}</li>
                    <li className={classes.Attribute}>Material</li>
                    <li>{this.state.material}</li>
                    <li className={classes.Attribute}>Size</li>
                    <li>{this.state.size}</li>
                </ul>
                <div className={classes.AttributeSelector}>
                    <div className={classes.MaterialSelector}>
                    <div>Select Material</div>
                    <select onChange={this.materialSelectHandler}>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Carbon">Carbon</option>
                    </select>
                    </div>
                    <div className={classes.SizeSelector}>
                    <div>Select Size</div>
                        <select value={this.state.size} onChange={this.sizeSelectHandler}>
                            <option value="Extra Small">Extra Small</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Extra Large">Extra Large</option>
                        </select>

                    </div>
                </div>
                <div className={classes.Pricing}>
                <div className={classes.Cost}>
                    <h3>${this.state.price}</h3>
                </div>
                <div className={classes.SelectBtn} onClick={()=> this.props.parentCallback(this.state)}>
                    CONFIRM
                </div>
            </div>
            </div>
            <div className={classes.FrameSelector}>
            <div className={classes.ColorSelector}>
                    <div className={classes.Purple}  id="Mauve" onClick={()=> this.setState({color: 'Mauve', frame: MauveSC })}/>
                    <div className={classes.Green} id="Green" onClick={() => this.setState({ color: 'Green', frame: GreenSC })}/>
                </div>
                <img src={this.state.frame} alt="" />
                
            </div>
            
        </div>
    )
    }
};

export default Frame; 