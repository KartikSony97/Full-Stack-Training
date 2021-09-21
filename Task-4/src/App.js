import './App.css';
import Login from './login/login';
import 'material-icons/iconfont/material-icons.css';
import { useSelector} from 'react-redux';
import DashBoard from './dashboard/dashboard';
import {selectUser} from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {
        user ? <DashBoard /> : <Login />
      }
    </div>
  );
}

export default App;
