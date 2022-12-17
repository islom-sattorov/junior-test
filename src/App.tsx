import { FC } from "react";
import { Header } from "./Components/Header/Header";
import { Notification } from "./Components/Notification/Notification";
import CustomizedTables from "./Components/Tables/Tables";

const App: FC = () => {
  return (
    <>
      <Header />
      {/* <Posts/> */}
      <CustomizedTables />
      <Notification />
      {/* <ToTopButton /> */}
    </>
  );
};

export default App;
