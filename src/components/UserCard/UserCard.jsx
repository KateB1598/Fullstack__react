import React, { useState } from "react";

const UserCard = () => {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle visibility</button>
      {isShow && (
        <div>
          <h2>Box</h2>
        </div>
      )}
    </div>
  );
};

export default UserCard;
