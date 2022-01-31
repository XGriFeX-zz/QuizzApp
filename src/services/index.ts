import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IQuiz } from '../redux/reducerTypes/type'

const _url = "https://quiz-app-backend-api.herokuapp.com/api/quizzes"

export const quizzesAPI = createApi({
    reducerPath: "quizzesAPI",
    baseQuery: fetchBaseQuery({baseUrl: _url}),
    tagTypes: ["addQuiz"],
    endpoints: (build) => ({
        fetchAllQuizes: build.query<IQuiz[], string>({
            query: () => "quizzes",
            providesTags: result => ["addQuiz"]
        }),
        createQuiz: build.mutation<IQuiz, IQuiz>({
            query: (quiz) => ({
                url: "/quizzes",
                method: "POST",
                body: quiz
            }),
            invalidatesTags: ["addQuiz"]
        })
    })
})
