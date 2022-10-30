import { FC } from 'react';
import { Header } from './Components/Header/Header';
import { Notification } from './Components/Notification/Notification';
import CustomizedTables from './Components/Tables/Tables';
import { ToTopButton } from './Components/ToTopButton/ToTopButton';

const App: FC = () => {
return (
    <>
      <Header/>
      {/* <Posts/> */}
      <CustomizedTables/>
      <Notification/>
      <ToTopButton/>
    </>
  );
}

export default App;
