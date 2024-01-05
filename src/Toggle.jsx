import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'Hide' : 'Show'} Content
      </button>
      {isToggled && <p>Displayed content when toggled</p>}
    </div>
  );
}

export default Toggle;
