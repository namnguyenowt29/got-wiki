import Home from 'components/Home/Home';
import SignIn from 'components/SignIn/SignIn';
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
