import React, { memo } from "react";

const Box = ({ list }) => {
  return (
    <div className="box">
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Box);
