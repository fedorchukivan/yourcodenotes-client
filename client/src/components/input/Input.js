import './input.css'

const passwordAttributes = {
  autoComplete: 'new-password',
  pattern: "\\w{3,20}"
}

const TextInput = ({
  title,
  name,
  type,
  value,
  onChange
}) => {
  const inputAttributes = {
    name,
    type,
    value
  };

  if (type === 'password') Object.assign(inputAttributes, passwordAttributes);

  return (
  <label className="trip-popup__input input">
    <span className="input__heading">{title}</span>
    <input {...inputAttributes} onChange={(e) => onChange(e.target.value)} required />
  </label>);
}

export default TextInput;