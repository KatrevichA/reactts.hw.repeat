import React from 'react';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "../../redux/counterStore/store.counter";

const CounterComponent = () => {

    const value = useAppSelector(state => state.slice1Counter.value);

    const dispatch = useAppDispatch();

    return (
        <div>
            <h3>{value}</h3>
            <button onClick={() => {
                dispatch(increment())
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrement
            </button>
            <button onClick={() => {
                dispatch(incrementByAmount(10))
            }}>Amount
            </button>
        </div>
    );
};

export default CounterComponent;