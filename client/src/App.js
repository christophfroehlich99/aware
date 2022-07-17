import { Error, Landing, Register } from "./pages";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  AllTickets,
  NewTicket,
  Profile,
  Projects,
  Roles,
  SharedLayout,
  Statistics,
  ProtectedRoute,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Statistics />} />
          <Route path="roles" element={<Roles />} />
          <Route path="projects" element={<Projects />} />
          <Route path="all-tickets" element={<AllTickets />} />
          <Route path="new-ticket" element={<NewTicket />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
