import React, { Component } from 'react';
import classes from './BikeBuilder.module.css';
// import GreenSC from '../../images/santa-cruz-5010grn-blackBG.png';
import MauveSC from '../../images/santa-cruz-5010-carbon-blackBG.png';
import BuilderNav from '../../Components/BuilderNav/BuilderNav';
import BuildSummary from '../../Components/BuildSummary/BuildSummary';
import Frame from '../../Components/Frame/Frame';
import Forks from '../../Components/ForkComponent/Forks';
import Derailleur from '../../Components/Derailleur/Derailleur';
import Brakes from '../../Components/Brakes/Brakes';
import Wheels from '../../Components/Wheels/Wheels';
import Tires from '../../Components/Tires/Tires';


class BikeBuilder extends Component{

    state = {
        frame: {
            image: MauveSC,
            color: 'Mauve',
            size: 'Medium',
            material: 'Aluminum',
            price: 2000
        },
        fork: {
            name: 'Fox Rhythm 34',
            price: 900
        },

        derailleur:{
            name: 'SRAM GX Eagle',
            price: 350
        },
        brakes: {
            name:'SRAM Guide',
            price: 150
        },
        wheels: {
            name: 'DT Swiss XM',
            price: 650
        },
        tires: {
            name: 'Maxxis Minion DHF (black)',
            price: 70
        },
        builderComponent: {
            frame : true,
            forks: false,
            derailleur: false,
            brakes: false,
            wheels: false,
            tires: false
        },
        subHead: 'Frame',
        totalPrice: 0
        
    }

    navigationHandler = (childData) => {
        this.setState({
            builderComponent: {
                frame: childData.frame,
                forks: childData.forks,
                derailleur: childData.derailleur,
                brakes: childData.brakes,
                wheels: childData.wheels,
                tires: childData.tires

            },
            subHead: childData.subHead
        })
    }



    frameSelectHandler = (childData) => {
        this.setState({
            frame: {
            image: childData.frame, 
            color: childData.color,
            material: childData.material,
            size: childData.size,
            price: childData.price
            
        },
        totalPrice: this.state.frame.price + this.state.fork.price
    }, ()=> this.totalPriceCalculator())

    ;
        
    }

    forkSelectHandler = (childData)=> {
        this.setState({
            fork: {
                name: childData.name,
                price: childData.price
            },
            

        },()=> this.totalPriceCalculator())
        
        
    }

    derailleurSelectHandler = (childData)=> {
        this.setState({
            derailleur: {
                name: childData.name,
                price: childData.price
            },
            

        },()=> this.totalPriceCalculator())
        
        
    }

    brakesSelectHandler = (childData)=> {
        this.setState({
            brakes: {
                name: childData.name,
                price: childData.price
            },
            

        },()=> this.totalPriceCalculator())
        
        
    }

    wheelsSelectHandler = (childData)=> {
        this.setState({
            wheels: {
                name: childData.name,
                price: childData.price
            },
            

        },()=> this.totalPriceCalculator())
        
        
    }

    tiresSelectHandler = (childData)=> {
        this.setState({
            tires: {
                name: childData.name,
                price: childData.price
            },
            

        },()=> this.totalPriceCalculator())
        
        
    }

    totalPriceCalculator = () => {
        let total = this.state.frame.price + this.state.fork.price + this.state.derailleur.price + this.state.brakes.price + this.state.wheels.price + this.state.tires.price;
        this.setState({ totalPrice: total})
        
        
    }

    submitBuildHandler = () => {
        const build = {
            frame: this.state.frame,
            fork: this.state.fork,
            derailleur: this.state.derailleur,
            brakes: this.state.brakes,
            wheels: this.state.wheels,
            tires: this.state.tires,
            totalPrice: this.state.totalPrice


        }
         

        localStorage.setItem('bikeBuild', JSON.stringify(build));

    }  
    

    componentDidMount(){
        this.totalPriceCalculator();
        this.props.getData(this.state);
        localStorage.setItem('prevPage', 'home')
        
    }

    componentDidUpdate(){
        this.submitBuildHandler();

    }


    
    render(){

        
    

        return(
            <div className={classes.BikeBuilder}>
                <div className={classes.Header}>
                    <h1>BIKE BUILDER</h1>
                    <hr />
                </div>
                <div className={classes.BuildContainer}>
                <BuilderNav parentCallback={this.navigationHandler}/>
                <div className={classes.ComponentContainer}>
                    <div className={classes.ComponentHeader} >
                        <h3>{this.state.subHead}</h3>
                    </div>
                    
                    {this.state.builderComponent.frame ? <Frame selectedFrame={this.state.frame} parentCallback={this.frameSelectHandler} /> : null}
                    {this.state.builderComponent.forks ? <Forks selectedFork={this.state.fork} parentCallback={this.forkSelectHandler}/> : null}
                    {this.state.builderComponent.derailleur ? <Derailleur selectedDerailleur={this.state.derailleur} parentCallback={this.derailleurSelectHandler}/> : null}
                    {this.state.builderComponent.brakes ? <Brakes selectedBrakes={this.state.brakes} parentCallback={this.brakesSelectHandler}/> : null}
                    {this.state.builderComponent.wheels ? <Wheels selectedWheels={this.state.wheels} parentCallback={this.wheelsSelectHandler}/> : null}
                    {this.state.builderComponent.tires ? <Tires selectedTires={this.state.tires} parentCallback={this.tiresSelectHandler}/> : null}
                </div>
                <BuildSummary 
                    selectedBike={this.state.frame.color} 
                    frame={this.state.frame}
                    fork={this.state.fork.name}
                    derailleur={this.state.derailleur.name}
                    brakes={this.state.brakes.name}
                    wheels={this.state.wheels.name}
                    tires={this.state.tires.name}
                    totalPrice={this.state.totalPrice}
                    checkout={this.props.getCheckout}
                    buildHandler={this.submitBuildHandler}
                    buildState={this.state}
                    />
                
                </div>
                
                
                

            </div>
        )
    }
};

export default BikeBuilder; 