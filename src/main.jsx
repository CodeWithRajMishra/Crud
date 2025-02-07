import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContext from './LoginContext';
createRoot(document.getElementById('root')).render(

<LoginContext>
<App />
</LoginContext>


)