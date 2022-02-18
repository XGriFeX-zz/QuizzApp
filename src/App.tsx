import { FC } from "react"
import { Route, Routes } from "react-router"
import { quizzesAPI } from "./services"
import Header from "./components/Header/Header"
import NotFound from "./pages/NotFound/NotFound"

import "./App.sass"

const App: FC = () => {
  const { data } = quizzesAPI.useFetchAllQuizesQuery("")
  const [ createQuiz, {} ] = quizzesAPI.useCreateQuizMutation()

  return (
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
