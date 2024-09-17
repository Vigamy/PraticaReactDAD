import RedFree from "./components/RedFree/RedFree";
import RedPremium from "./components/RedPremium/RedPremium";
import RedPro from "./components/RedPro/RedPro";
import GreenFree from "./components/GreenFree/GreenFree";
import GreenPremium from "./components/GreenPremium/GreenPremium";
import GreenPro from "./components/GreenPro/GreenPro";

function App() {
  return (
    <div>
      <h1 className="header-text">PLANS +</h1>
      <div className="header-tag-red">red</div>
      <div className="container-items">
        <RedFree/>
        <RedPremium/>
        <RedPro/>
      </div>
      <h1 className="header-text">NEW MEMBER +</h1>
      <div className="header-tag-green">green</div>
      <div className="container-items">
        <GreenFree/>
        <GreenPremium/>
        <GreenPro/>
      </div>
    </div>
  );
}

export default App;
