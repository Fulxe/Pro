import  React  from 'react'
import { Button } from "react-bootstrap";
import "./App.css";
import Sim from "./Components/Zurag/Screen Shot 2022-12-06 at 17.04.44.png";
import Bill from "./Components/Zurag/Bill.png";
import Handset from "./Components/Zurag/Handset.png";
import Action from "./Components/Actions/actions";
import Footer from "./Components/Footer/Footer";



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
            <div className="news-heading-right">
              <p>learn more </p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
          </div>
          <div className="news-news">
            <Medee
              img={"https://stat.mobicom.mn//resources/menu/2319-7144567.jpeg"}
              text={"Нэгж, датанд ДААЛГАЯ"}
              date={"2022.12.8"}
            />
            <Medee
              img={
                "https://stat.mobicom.mn//resources/menu/2311-1059287632.png"
              }
              text={"STARS БҮҮҮР ГОЁ БОЛЛОО!"}
              date={"2022.12.5"}
            />
            <Medee
              img={
                "https://stat.mobicom.mn//resources/menu/2307-442373483.jpeg"
              }
              text={"WE:MAKE FREE CALLS TO YOUR FAMILY AND"}
              date={"2022.12.02"}
            />
            <Medee
              img={
                "https://stat.mobicom.mn//resources/menu/2305-1736838029.jpeg"
              }
              text={"STARS: ЖИЛИЙН ЭРХТЭЙ КАРТ ХУДАЛДААНД ГАР"}
              date={"2022.11.28"}
            />
          </div>
        </div>
      </div>
      <div className="special-offers">
        <div className="spc-center">
          <div className="spc-heading">
            <h2>Special Offers</h2>
          </div>
          <div className="spc1">
            <Special
              image={
                "https://stat.mobicom.mn/resources/menu/1943-1421482791.png"
              }
              text={"Samsung Galaxy S21 FE"}
            />
            <Special
              image={
                "https://stat.mobicom.mn/resources/menu/1973-709829439.jpeg"
              }
              text={"Huawei Nova 9"}
            />
          </div>
          <div className="spc1">
            <Special
              image={
                "https://stat.mobicom.mn/resources/menu/1987-893058336.jpeg"
              }
              text={"ZTE Nubia Redmagic 6R"}
            />
            <Special
              image={
                "https://stat.mobicom.mn/resources/menu/2011-1351819088.png"
              }
              text={"Samsung Galaxy S22"}
            />
          </div>
        </div>
      </div>
      <div className="Application">
        <div className="app-heading">
          <p>The apps that make your life easier</p>
        </div>
        <div className="app-apps">
          <img
            src={
              "https://www.mobicom.mn/build/assets/93288a013385b9e712007b482d53dd9d.svg"
            }
          />
          <img
            src={
              "https://www.mobicom.mn/build/assets/3e97249614785b49a444e1c3d8c338d9.svg"
            }
          />
          <img
            src={
              "	https://www.mobicom.mn/build/assets/33687c97ee54c2ba35f8a3e31e856127.svg"
            }
          />
          <img
            src={
              "https://www.mobicom.mn/build/assets/09d85c3a84ef7522bd8fc3fcfc243e78.svg"
            }
          />
        </div>
        <div className="app-names">
          <p>Мобиком</p>
          <p>monpay</p>
          <p>VOO</p>
          <p>Magic Voice</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

function Medee(props) {
  const { img, text, date } = props;
  return (
    <div className="Medee">
      <img src={img} />
      <p>{text}</p>
      <div>{date}</div>
    </div>
  );
}
function Special(props) {
  const { image, text } = props;
  return (
    <div className="offers">
      <img src={image} />
      <h3>{text}</h3>
    </div>
  );
}
