import React from 'react';

const Form = () => {
  const [name, setName] = React.useState<string>('');
  const handleChange = (name: string) => {
    setName(name);
  };
  return (
    <React.Fragment>
      <form>
        <label>
          Name:
          <input type='text' value={name} onChange={(e) => handleChange(e.target.value)} />
        </label>
      </form>
      <span>{name}</span>
    </React.Fragment>
  );
};

export default Form;
