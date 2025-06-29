import logo from "./logo.svg";
import "./App.css";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./usercontext";
import HomePage from "./Pages/HomePage";
import ThankYou from "./Pages/ThankYou";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
