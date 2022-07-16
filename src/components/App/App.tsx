import Header from 'components/Common/Header/Header';
import { FC } from 'react';
import PublicRouting from 'routes/PublicRouting';

const App: FC = () => {
  return (
    <>
      <Header />
      <PublicRouting />
    </>
  );
};

export default App;
