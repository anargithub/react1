import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form({
  buttonValue,
  onClick,
  inputValue,
  onChange,
  placeholder,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Input value={inputValue} onChange={onChange} placeholder={placeholder} />
      <Button value={buttonValue} onClick={onClick} />
    </div>
  );
}
