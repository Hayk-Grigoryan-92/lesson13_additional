import './App.scss';
import { UserDetails } from './components/userDetails';
import { UsersList } from './components/usersList';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<UsersList/>}/>
          <Route path={'/user_details'} element={<UserDetails/>}/>
          <Route path={"/*"} element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
