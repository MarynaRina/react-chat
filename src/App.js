import { Navbar } from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App({ store }) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/dialogs/*'
                        element={<DialogsContainer store={store} />}
                    />
                    <Route
                        path='/profile/:profileId'
                        element={<ProfileContainer />}
                    />
                    <Route
                        path='/profile'
                        element={<ProfileContainer store={store} />}
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
