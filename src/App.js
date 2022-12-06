import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import "./App.css";
import Sim from "./Components/Zurag/Screen Shot 2022-12-06 at 17.04.44.png";
import Bill from "./Components/Zurag/Bill.png";
import Handset from "./Components/Zurag/Handset.png";
import Action from "./Components/Actions/actions";

function App() {
  return (
    <div className="App">
      <div className="Quick">
        <div className="quick-left">
          <div className="quick-left-detail">
            <Button>Detail</Button>
          </div>
        </div>
        <div className="quick-right">
          <div className="quick-heading">
            <h3>Quick actions:</h3>
          </div>
          <div className="quick-right-actions">
            <Action
              img={
                "https://www.mobicom.mn/build/assets/5dad9eb145c6e5ad43a2dcd3b58d2b9e.svg"
              }
              head="Unit"
              text="Buy"
            />
            <Action
              img={
                "https://www.mobicom.mn/build/assets/631027d5a905abbf95413b832aced700.svg"
              }
              head="Data"
              text="Buy"
            />
            <Action img={Bill} head="Bill" text="Pay" />
          </div>
          <div className="quick-right-actions">
            <Action
              img={
                "https://www.mobicom.mn/build/assets/83dc5a0aef574bf4bf72a29eb18b1bff.svg"
              }
              head="Number"
              text="Buy"
            />
            <Action img={Sim} head="Sim" text="Recovery" />
            <Action img={Handset} head="Handset" text="Buy" />
          </div>
          <div className="con">
            <div className="con-bck-img"></div>
            <div className="con-arrow">
              <div className="con-text">
                <h4>Redmagic 6R</h4>
              </div>
              <div className="con-rrw">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="News">
        <div className="news">
          <div className="news-heading">
            <h2>News</h2>
            <div>learn more</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
