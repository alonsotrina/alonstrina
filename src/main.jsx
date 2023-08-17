import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>,
)
