import { FC } from 'react';
import { Header } from './Components/Header/Header.module';
import { Posts } from './Components/Posts/Posts';

const App: FC = () => {
return (
    <>
    <Header/>
    <Posts/>
    </>
  );
}

export default App;
