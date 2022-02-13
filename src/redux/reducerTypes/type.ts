
export interface IQuiz {
    id?: number
    title: string
    picture: string
    tag: string
}

export interface IInitialState {
    quizzes: IQuiz[]
}
