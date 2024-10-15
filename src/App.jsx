import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";


function App() {
 
  return (
    <div className=" bg-slate-950 min-h-screen m-0 p-0">
      <Navbar  itemCount={0}/>
      <Mainsection />
    </div>
  )
}

export default App
