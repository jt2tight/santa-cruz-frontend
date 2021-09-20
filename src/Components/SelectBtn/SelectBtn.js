import { render } from '@testing-library/react';
import React from 'react';
import classes from './SelectBtn.module.css';

const SelectBtn = (props) => {

    let selectStyle = classes.SelectBtn;

    if(props.active){
        selectStyle = classes.Active;
    } 

    render()
    return(
    

    <div className={selectStyle} onClick={props.select}>
        {props.children}
    </div>
)
}

export default SelectBtn; 