import { FC } from "react"
import { quizzesAPI } from "./services"


const App: FC = () => {
  const { data: quizes } = quizzesAPI.useFetchAllQuizesQuery("")

  console.log(quizes)

  return <div></div>
}

export default App
