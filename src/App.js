import "./App.css";
import styled from "styled-components";
import DayList from "./DayList";
import Detail from "./Detail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppWrap className="App">
      <MyContainer class="container">
        <Routes>
          <Route path="/" element={<DayList />} />
        </Routes>
        <Routes>
          <Route path="/detail/:days" element={<Detail />} />
        </Routes>
      </MyContainer>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const MyContainer = styled.div`
  background-color: #fff;
  max-width: 350px;
  width: 50vw;
  height: 85vh;
  margin: auto;
  padding: 16px;
  border: 1px solid #d2dcd1;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.88);
`;

export default App;
