import { 
  createBrowserRouter,
createRoutesFromElements,
RouterProvider,
Route,
} from "react-router-dom";

import { Root } from './pages/Root'
import { Home } from "./pages/Home";
import { BuyTickets } from "./pages/BuyTickets";
import { ChristmasTrain } from "./pages/ChristmasTrain";
import { InfoTrains } from "./pages/InfoTrains";
import { Train } from "./pages/Train";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="/christmasTrain/buyTickets" element={<BuyTickets/>}/>
    <Route path="/christmasTrain" element={<ChristmasTrain/>}/>
    <Route path="/infoTrains" element={<InfoTrains/>}/>
    <Route path="/infoTrains/:id" element={<Train/>}/>
  </Route>
))

function App() {

  return (
    <>
      < RouterProvider router={router}/>
    </>
  )
}

export default App
