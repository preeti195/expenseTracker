// import {
//   Navigate,
//   Route,
//   BrowserRouter as Router,
//   Routes
// } from "react-router-dom";
// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";
// import Expense from "./pages/Dashboard/Expense";
// import Home from "./pages/Dashboard/Home";
// import Income from "./pages/Dashboard/Income";
// import UserProvider from "./context/userContext";
// const App = () => {
//   return (
//    <UserProvider>
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Root/>}/>
//           <Route path="/login" exact element={<Login />}/>
//           <Route path="/signUp" exact element={<SignUp />}/>
//           <Route path="/dashboard" exact element={<Home />}/>
//           <Route path="/income" exact element={<Income />}/>
//           <Route path="/expense" exact element={<Expense />}/>
//         </Routes>
//       </Router>
//     </div>
//    </UserProvider>  
//   )
// }

// export default App;
// const Root=()=>{
//   const isAuthenticated = !!localStorage.getItem("token");

//   return isAuthenticated ?(
//     <Navigate to ="/dashboard"/>

//   ) : (
//     <Navigate to ="/login"/>
//   );
// };
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Expense from "./pages/Dashboard/Expense";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import UserProvider from "./context/UserContext"; // Fixed import path - changed from userContext to UserContext
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
          </Routes>
        </Router>
      </div>

      <Toaster
      toastOptions={{
        className: "",
        style: {
          fontSize: '13px'
        },
      }}
      />
    </UserProvider>
  );
};

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};