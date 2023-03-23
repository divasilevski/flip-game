import React from "react";

const ReloadModal = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Перезапустить?</button>
    </div>
  );
};

export default ReloadModal;
