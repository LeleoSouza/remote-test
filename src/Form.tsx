import React from 'react';

const Form = () => {
  const [name, setName] = React.useState<string>('');
  const handleChange = (name: string) => {
    setName(name);
  };
  return (
    <div>
      <span>Hello Matt, hope you like the demo ;) </span>
      <form>
        <label>
          Enter a message:
          <input type='text' value={name} onChange={(e) => handleChange(e.target.value)} />
        </label>
      </form>
      <span>{name}</span>
    </div>
  );
};

export default Form;
