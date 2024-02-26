import Input from "./Input";
import Label from "./Label";

const Form = ({ name, label, type, placeholder }) => {
  return (
    <form>
      <div className="mb-3">
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} />
      </div>
    </form>
  );
};

export default Form;
