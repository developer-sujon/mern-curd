import React from "react";
import LodingSvg from ".././assets/img/loader.svg";
function Loding() {
  return (
    <div className="lodingWarpper">
      <img src={LodingSvg} alt="loding" />
    </div>
  );
}

export default Loding;
