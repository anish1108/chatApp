import Leftside from "./componets/leftside/Leftside"
import Middle from "./componets/middle/Middle"
import Rightside from "./componets/rightside/Rightside"
import Login from "./componets/forms/Login"
import Register from "./componets/forms/Register"

function App() {

  let user = false;
  
  return (
    <>
    {user?(
      <div className="h-screen flex gap-x-5 justify-between bg-gray-600 ">
        <Leftside />
        <Middle />
        <Rightside />
      </div>
    ) :
    ( <div className="h-screen flex justify-center items-center bg-slate-500">
      <Login/>
    </div> )}
      

    </>
  )
}

export default App
