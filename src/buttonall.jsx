
import React, { useState } from 'react';


function ButtonGroup() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>Open</button>
      {isOpen && (
        <div>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      )}
    </div>
  );
}
export default ButtonGroup;