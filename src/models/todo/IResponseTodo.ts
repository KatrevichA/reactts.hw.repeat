import {ITodo} from "./ITodo";

export interface IResponseTodo {
    limit: number,
    skip: number,
    todos: ITodo [],
    total: number
}