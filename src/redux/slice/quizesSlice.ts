import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IInitialState, IQuize } from "../reducerTypes/type"


const initialState: IInitialState = {
    quizzes: []
}

const quizesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action: PayloadAction<IQuize[]>) => {
            state.quizzes = action.payload
        }
    },
})

const { actions, reducer } = quizesSlice

export const {
    setQuizzes
} = actions

export default reducer
