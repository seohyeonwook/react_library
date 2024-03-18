import { Route, Routes } from "react-router-dom";
import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import RootSideMenuLeft from "./components/RootSideMenuLeft/RootSideMenuLeft";
import Authpage from "./pages/AuthPage/Authpage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <RootSideMenuLeft />
        <RootHeader />
        <Routes>
          <Route path="/auth/*" element={ <Authpage /> } />
          <Route path="/" element= { <HomePage /> } />
        </Routes>

      </RootContainer>
    </RootLayout>
  );
}

export default App;
