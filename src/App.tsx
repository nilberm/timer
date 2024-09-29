import { ToastContainer } from "react-toastify";
import MainPage from "./pages";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <MainPage />
      <ToastContainer />
    </>
  );
}

export default App;
