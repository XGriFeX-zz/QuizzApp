
export interface IQuize {
    id: number
    title: string
    img: string
    tag: string
}

export interface IInitialState {
    quizzes: IQuize[]
}
