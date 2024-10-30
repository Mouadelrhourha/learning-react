import './App.css';
import {EditProfilePage} from "./pages/EditProfilePage";
import {ProfilePage} from "./pages/ProfilePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import { TodoTable } from './pages/TodoTable/TodoTable';

function App() {
    const isProfilePage = false;
    const isEditProfilePage = false;
    const isTodosPage = false;
    const isTodoTable = true
  return (
    <div className="App">
        {isProfilePage && <ProfilePage />}
        {isEditProfilePage && <EditProfilePage />}
        {isTodosPage && <TodosPage />}
        {isTodoTable&& <TodoTable/>}
    </div>
  );
}

export default App;
