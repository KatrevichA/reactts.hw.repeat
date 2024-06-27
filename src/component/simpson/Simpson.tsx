import React, {FC} from 'react';
import {ISimpson} from "../../models/ISimpson";
import styles from './Simpson.module.css'
import Button from "../button/Button";


type IProps = {
    simpson: ISimpson;
}

const Simpson:FC<IProps> = ({simpson:{name,surname,age,photo,info}, simpson }) => {
    return (
        <div className={styles.simpsonBlock}>

            <h4>{name} {simpson.surname}</h4>
            <p>{info}</p>
            <img src={photo} alt={name}/>
            <div>
                <Button message={"How old am I?"} className={'blockButton'}>{'Age'}</Button>
            </div>

        </div>
    );
};

export default Simpson;