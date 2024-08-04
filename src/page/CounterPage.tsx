import React from 'react';
import CounterComponent from "../component/counter/CounterComponent";
import {Provider} from "react-redux";
import {storeCounter} from "../redux/counterStore/store.counter";

const CounterPage = () => {
    return (
        <div>
            <Provider store={storeCounter}>
                <CounterComponent/>
            </Provider>

        </div>
    );
};

export default CounterPage;