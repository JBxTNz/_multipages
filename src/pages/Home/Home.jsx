import "./Home.css";
import profile from "../../assets/WorathepTara.png";

function Home() {
  return (
    <div className="home-container">

      <div className="box1">
        <span>
          <div className="profile">
            <img src={profile} className="profilePic"></img>
          </div>
          <div className="home-text">
            <h2 className="home-title">
              <b>Contact</b>
            </h2>
            <h4>Email : Worathep.tha@spumail.net</h4>
          </div>
        </span>
      </div>
      <div className="box2">
        <h1 className="home-title"><b>Introduce myself</b></h1>
        <h4>
          ผมชื่อ <u><b>นายวรเทพ ทาระ</b></u> ชื่อเล่นคือ "บอส" เกิดที่กรุงเทพ<br />
          เป็นคนชอบถ่ายรูปstreet, portrait และชอบBasketballมาก<br />
          ตอนนี้เรียนอยู่ที่มหาลัยศรีปทุม (SPU) คณะเทคโนโลยีสารสนเทศ
           สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ ปี2 และตอนนี้อายุ 20 แล้ว       
        </h4>
        <br />
        <h3>Quote : "Loneliness is a tax, You never run from it"</h3>
        <center className="gif-container">
          <img className="gif" src="./public/img/amongTwerk.gif" alt="" srcset="" />
        </center>
        <span className="meme-title">Hover it &rArr;</span>
      </div>
    </div>
  );
}

export default Home;
