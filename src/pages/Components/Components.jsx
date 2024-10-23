import Counter from "./Counter/Counter";
import Timer from "./Timer/Timer";
import Add from "./Add/Add";
import Temperatures from "./Temperatures/Temperatures";

import "./Components.css";

function Components() {
  return (
    <div className="components-container">
      <h3 className="app-title">REACT COMPONENTS</h3>

      <div className="wrapper">
        <span>
          <Counter />
          <Timer />
        </span>
        <Add />
      </div>
      <div>
        <Temperatures />
      </div>

      <h3 className=" btn btn-dark myName">นายวรเทพ ทาระ รหัสนักศึกษา 66036435</h3>
    </div>
  );
}

export default Components;
