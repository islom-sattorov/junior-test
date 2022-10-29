import { FC } from 'react';
import { Header } from './Components/Header/Header';
import { Notification } from './Components/Notification/Notification';
import { Posts } from './Components/Posts/Posts';

const App: FC = () => {
return (
    <>
      <Header/>
      <Posts/>
      <Notification/>
    </>
  );
}

export default App;
