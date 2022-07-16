import Home from 'components/Home/HomePage/HomePage';
import SignIn from 'components/Auth/SigninPage/SignInPage';
import { FC } from 'react';
import { Routes, Route } from 'react-router';

const PublicRouting: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  );
};

export default PublicRouting;
