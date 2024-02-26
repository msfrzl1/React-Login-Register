const Input = ({ type, placeholder, name }) => {
  return <input type={type} placeholder={placeholder} name={name} id={name} className="form-control" />;
};

export default Input;
