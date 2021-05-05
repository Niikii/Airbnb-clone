import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

const Search = () => {
  const [date, setDate] = useState(null);

  function onChange(date) {
    setDate(date);
  }
  return (
    <div className='search'>
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={onChange}
        formatStyle="large"
      />
    </div>
  );
};

export default Search;
