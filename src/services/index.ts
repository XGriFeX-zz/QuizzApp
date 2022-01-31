import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IQuize } from '../redux/reducerTypes/type'

const _url = "http://localhost:8080"

export const quizzesAPI = createApi({
    reducerPath: "quizzesAPI",
    baseQuery: fetchBaseQuery({baseUrl: _url}),
    endpoints: (build) => ({
        fetchAllQuizes: build.query<IQuize[], string>({
            query: () => ({
                url: "/quizzes"
            })
        })
    })
})
