import React from "react";

const Options = ({ post }) => {
  const texto = !post ? "antes" : "después";
  return (
    <>
      <option className="text-black" value="1">
        1 minuto {texto}
      </option>
      <option className="text-black" value="5">
        5 minutos {texto}
      </option>
      <option className="text-black" value="10">
        10 minutos {texto}
      </option>
      <option className="text-black" value="15">
        15 minutos {texto}
      </option>
      <option className="text-black" value="20">
        20 minutos {texto}
      </option>
      <option className="text-black" value="25">
        25 minutos {texto}
      </option>
      <option className="text-black" value="30">
        30 minutos {texto}
      </option>
    </>
  );
};

export default Options;
