import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = () => {
    setValue((curVal) => !curVal);
  };

  return [value, toggleValue];
};

export default useToggle;
