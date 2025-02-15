import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/Pages/NavBar';
import { checkAuth } from './redux/actions/userAction';
import AuthPage from './components/Pages/AuthPage';
import LoginPage from './components/Pages/LoginPage';
import Genres from './components/Pages/Genres/Genres';
import Author from './components/Pages/Author/Author';
import Basket from './components/Pages/Basket/Basket';
import ClientsPage from './components/Pages/ClientsPage/ClientsPage';
import Mybook from './components/Pages/Mybook/Mybook';
import Books from './components/Pages/Books/Books';
import InfoCard from './components/UI/InfoCard/InfoCard';
import AuthorCard from './components/UI/AuthorCard/AuthorCard';
import Order from './components/Pages/Order/Order';
import Entry from './components/Pages/Entry';
import PersonalArea from './components/Pages/PersonalArea/PersonalArea';
import MyPaiment from './components/Pages/MyPaiment/MyPaiment';
import AuthorInfo from './components/UI/AuthorInfo/AuthorInfo';
import Pay from './components/UI/Pay';
import MyScroll from './components/Pages/Mainpage/UI/MyScroll/MyScroll';
import Mainpage from './components/Pages/Mainpage/Mainpage';
import Loader from './components/Loader/Loader';
import PageNotFounded from './components/Pages/PageNotFounded/PageNotFounded';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={(<Navigate to="/main" />)} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/scroll" element={<MyScroll />} />
        <Route path="/paiment" element={<MyPaiment />} />
        <Route path="/genre" element={<Genres />} />
        <Route path="/publisher" element={<Author />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/client" element={<ClientsPage />} />
        <Route path="/mybook" element={<Mybook />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/info/:id" element={<InfoCard />} />
        <Route path="/books/author/:id" element={<AuthorCard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cabinet" element={<PersonalArea />} />
        <Route path="/publisher/:id" element={<AuthorInfo />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<PageNotFounded />} />
      </Routes>
    </>

  );
}

export default App;
