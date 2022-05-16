import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import  UsersContainer  from './components/Users/UsersContainer';

function App({store}) {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/dialogs/*'
                        element={<DialogsContainer store={store} />}
                    />
                    <Route
                        path='/profile'
                        element={<Profile store={store} />}
                    />
                    <Route
                        path='/users'
                        element={<UsersContainer store={store} />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
