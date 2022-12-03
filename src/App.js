import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import "./App.css";

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
            <div className="actions-first">
              <img src="https://www.mobicom.mn/build/assets/5dad9eb145c6e5ad43a2dcd3b58d2b9e.svg"/>
              <div>Unit</div>
              <div>Buy</div>
            </div>
            <div className="actions-first"></div>
            <div className="actions-first"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
