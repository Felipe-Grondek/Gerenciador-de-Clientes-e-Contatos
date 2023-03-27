import RoutesMain from "./routes"
import UserContextProvider from "./contexts/UserContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { GlobalStyles } from "./styles/GlobalStyles"
import LoadingOverlay from "./components/LoadingOverlay"
import ContactContextProvider from "./contexts/ContactContext"

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <UserContextProvider>
        <ContactContextProvider>
          <RoutesMain />
        </ContactContextProvider>
        <LoadingOverlay />
      </UserContextProvider>
      <ToastContainer />
    </div>
  )
}

export default App
