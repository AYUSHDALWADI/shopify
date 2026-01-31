// import './App.css'
// import { Routes, Route } from "react-router-dom";
// import Bakemate from './Bakemate'
// import ScrollToTopButton from "./ScrollToTopButton";
// import ProductDetail from "./ProductDetail";
// import Cartdetails from "./Cartdetails";

// function App() {
//   return (
//     <>
//       <ScrollToTopButton />
       
//       <Routes>
//         <Route path="/" element={<Bakemate />} />
//         <Route path="/productDetail" element={<ProductDetail />} />
//         <Route path="/cartdetails" element={< Cartdetails/>} />

//       </Routes>
//     </>
//   )
// }

// export default App
import './App.css'
import { Routes, Route } from "react-router-dom";

import Bakemate from './Bakemate'
import ScrollToTopButton from "./ScrollToTopButton";
import ProductDetail from "./ProductDetail";
import Cartdetails from "./Cartdetails";
import Checkout from "./Checkout";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      
      <ScrollToTopButton />

      <Routes>
        <Route path="/" element={<Bakemate />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cartdetails" element={<Cartdetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
