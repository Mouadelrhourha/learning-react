import './App.css';
import {EditProfilePage} from "./pages/EditProfilePage";
import {ProfilePage} from "./pages/ProfilePage";

function App() {
    const isProfilePage = false;
    const isEditProfilePage = true;
  return (
    <div className="App">
        {isProfilePage && <ProfilePage />}
        {isEditProfilePage && <EditProfilePage />}
    </div>
  );
}

export default App;
