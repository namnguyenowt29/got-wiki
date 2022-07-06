import Header from 'components/Common/Header/Header';
import { FC } from 'react';
import PublicRouting from 'routing/PublicRouting';

const App: FC = () => {
  return (
    <>
      <Header />
      <PublicRouting />
    </>
  );
};

export default App;
