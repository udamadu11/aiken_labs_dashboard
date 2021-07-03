import React from "react";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Add = ({ add, setAdd }) => {
  const onClickHandle = (e) => {
    e.preventDefault();
    if (add.length < 8) {
      setAdd([
        ...add,
        {
          star: false,
          name: "",
          id: Math.round(Math.random() * 1000),
        },
      ]);
    } else {
      alert("cant add");
    }
  };
  return (
    <div>
      <FontAwesomeIcon icon={faPlusCircle} onClick={onClickHandle} />
    </div>
  );
};

export default Add;
