import { useState, useEffect } from "react";

interface SelectProps {
  id: string;
  setValue: (value: string) => void;
}
export default function Select({ id, setValue }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("0");

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue, setValue]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <select
      name={id}
      id={id}
      value={selectedValue}
      onChange={handleChange}
      required
    >
      <option value="0" disabled>
        Select
      </option>
      <option value="15">00:15</option>
      <option value="30">00:30</option>
      <option value="45">00:45</option>
      <option value="60">01:00</option>
      <option value="75">01:15</option>
      <option value="90">01:30</option>
      <option value="105">01:45</option>
      <option value="120">02:00</option>
      <option value="135">02:15</option>
      <option value="150">02:30</option>
      <option value="165">02:45</option>
      <option value="180">03:00</option>
    </select>
  );
}
