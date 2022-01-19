import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calendario = () =>{
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col items-center w-full mt-3">
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Calendario;