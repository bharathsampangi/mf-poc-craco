import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
// const Remote = React.lazy(() => import("mfe1/Component"))
import Remote from "mfe1/HomeContainer"

function App() {

  // useEffect(() => {
  //   window.addEventListener('mife', e => {
  //     e.stopImmediatePropagation()
  //     const { name } = e.detail;
  //     console.log("message", name)
  //     //handle message;
  //   });
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mftest" element={<Remote />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
