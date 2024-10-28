import './App.css';
import {EditProfilePage} from "./pages/EditProfilePage";
import {ProfilePage} from "./pages/ProfilePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";

function App() {
    const isProfilePage = false;
    const isEditProfilePage = false;
    const isTodosPage = true;
  return (
    <div className="App">
        {isProfilePage && <ProfilePage />}
        {isEditProfilePage && <EditProfilePage />}
        {isTodosPage && <TodosPage />}
    </div>
  );
}

export default App;
