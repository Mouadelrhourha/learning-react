import './App.css';
import {EditProfilePage} from "./pages/EditProfilePage";
import {ProfilePage} from "./pages/ProfilePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {TodoDetails} from "./pages/TodoDetails/TodoDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/todos-details/:id" element={<TodoDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
