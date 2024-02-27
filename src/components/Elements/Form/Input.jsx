const Input = ({ type, placeholder, name, id, onChange }) => {
  return <input type={type} placeholder={placeholder} name={name} id={id} onChange={onChange} className="form-control" />;
};

export default Input;
