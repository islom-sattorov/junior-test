import { FC } from 'react';
import { Button } from './Components/Button/Button';
import { Header } from './Components/Header/Header.module';
import { Posts } from './Components/Posts/Posts';

const App: FC = () => {


return (
    <>
    <Header/>
    <Posts/>
    <Button btnText={"Islom"}/>
    </>
  );
}

export default App;
