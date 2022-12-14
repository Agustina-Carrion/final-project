import * as React from "react";
import pin from "../../assets/Map-Marker-Pin.png";

function Pin() {
  return <img src={pin} className="h-8 w-8" alt="pin" />;
}

export default React.memo(Pin);
