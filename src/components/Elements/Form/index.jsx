import Input from "./Input";
import Label from "./Label";

const FormInput = ({ label, placeholder, name }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input type={name} placeholder={placeholder} name={name} id={name}></Input>
    </>
  );
};

export default FormInput;
