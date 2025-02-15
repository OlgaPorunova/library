import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
// import { MdArrowForwardIos } from 'react-icons/md';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { logoutUser } from '../../../redux/actions/userAction';
import AuthPage from '../../Pages/AuthPage';
import './head.css';
import { fetchInput } from '../../../redux/inputSlice';
import BooksMain from '../BooksMain/BooksMain';

export default function Head() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [input, setInput] = useState('');
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const myBooks = useSelector((store) => store.myBooks);
  const changeHandler = (e) => {
    dispatch(fetchInput(e.target.value));
    setInput(e.target.value);
    myBooks?.slice(0, 4).map((el) => (
      <BooksMain book={el} key={el.id} />
    ));
    navigate('/main');
  };
  return (
    <nav className="navbar bg-light border border-secondary mb-1 border-opacity-25" id="font-link" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg)', backgroundSize: '100%' }}>
      <div className="container-fluid">
        <Link to="/main" className="navbar-brand">Library</Link>
        <form className="d-flex" role="search">
          <input onChange={changeHandler} value={input} className="form-control me-2 border border-2border-dark" type="search" placeholder="Книга, автор, популярное" aria-label="Search" style={{ width: '600px' }} />
          <button onChange={changeHandler} className="btn btn-outline-success border border-2 border-dark text-dark" type="submit">Home</button>
        </form>

        {/* <Link to="/books" className="forLink">
          Книги
          <MdArrowForwardIos />
        </Link>
        <div className="row mt-3 d-flex justify-content-around">
          {myBooks?.slice(0, 4).map((el) => (
            <BooksMain book={el} key={el.id} />
          ))}
        </div> */}

        {user?.id
          ? (
            <Link
              to="/logout"
              className="btn btn-outline-success text-dark border border-0"
              type="button"
              onClick={(e) => {
                dispatch(logoutUser(e));
                navigate('/');
              }}
            >
              Выйти
            </Link>
          )
          : (
            <Button onClick={toggle} className="btn btn-outline-success text-dark border border-0" type="button">
              <BsBoxArrowInRight style={{ width: '30px', height: '28px' }} />
              {' '}
              Войти
            </Button>
          )}
      </div>
      <AuthPage modal={modal} toggle={toggle} setModal={setModal} />
    </nav>
  );
}
