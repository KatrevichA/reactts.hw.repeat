import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
// тип з яким ми працюватимемо
type counterStateType = {
    value: number
}
// дефолтне значення нашого типу
const initStateCounterSlice1: counterStateType ={
    value: 0
}
// описуємо як буде виглядати наш слайс
const counterSlice1 = createSlice({
    name: 'counterSlice1Name',
    initialState: initStateCounterSlice1,
    reducers: {
        increment: (state)=>{
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action:PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }
    }
});
//деструктуруємо вигляд нашого слайсу так щоб ми могли доступитись до наших функцій
// тобто витягуємо наші акшини
// const actions = counterSlice1.actions;
export const {increment,
    incrementByAmount,
    decrement} = counterSlice1.actions;
// конфігуруємо наше сховище
export const storeCounter = configureStore({
    reducer:{
        slice1Counter:counterSlice1.reducer
    }
});
//типізація
export type AppDispatch = typeof storeCounter.dispatch;

export type RootState = ReturnType<typeof storeCounter.getState>

//ХУКИ обгортки

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

