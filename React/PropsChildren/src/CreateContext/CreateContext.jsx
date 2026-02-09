import React, { Component, useState } from "react";
import Coponent1 from "./Coponent1";
import { userContext } from "./context";
const CreateContext = () => {
  const [user, setUser] = useState("Anil");
  return (
    <div>
      {/* CreateContext i want to send the ddata which is avaiable in createcontext

      into the component 3 */}
      <userContext.Provider value={user}>
        <Coponent1 />
      </userContext.Provider>
    </div>
  );
};

export default CreateContext;
