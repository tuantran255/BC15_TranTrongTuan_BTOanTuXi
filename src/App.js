import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Profile from "./components/Profile";
import BaiTapComponent from "./components/BaiTapComponent/BaiTapComponent";
import BaiTapThucHanhLayout from "./components/BaiTapThucHanhLayout/BaiTapThucHanhLayout";

function App() {
  return (
    <div>
      {/* <Nav />
      <Card />
      <Profile /> */}
      {/* <BaiTapComponent /> */}
      <BaiTapThucHanhLayout />
    </div>
  );
}

export default App;
