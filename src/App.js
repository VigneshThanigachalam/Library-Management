import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home';
import { Layout } from "./Components/Layout";
import { Addbook } from './Pages/Addbook';
import { ManageBook } from './Pages/ManageBook';
import { UpdateBook } from './Pages/UpdateBook';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout />
            } >
            <Route
              index
              element={
                <Home />
              }
            />
            <Route
            path='/add-book'
              element={
                <Addbook />
              }
            />
            <Route
            path='/manage-book'
              element={
                <ManageBook />
              }
            />
            <Route
            path='/update-book/:id'
              element={
                <UpdateBook />
              }
            />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
