import React from "react";

interface DateOfBirthInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <label htmlFor="dateOfBirth">Date de naissance:</label>
      <input
        type="date"
        id="dateOfBirth"
        className="px-2 py-1 rounded-lg ml-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DateOfBirthInput;
