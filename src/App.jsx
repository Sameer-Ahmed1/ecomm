import {   Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div >
       <div>this is navbar</div>
        <div >
           <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;