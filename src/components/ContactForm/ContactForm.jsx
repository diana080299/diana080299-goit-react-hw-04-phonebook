import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          id={nameId}
          placeholder="Entry your name"
        />
      </Label>
      <Label htmlFor={numberId}>
        Number
        <Input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          required
          id={numberId}
          placeholder="Entry your number"
        />
      </Label>

      <Button type="submit">Add contacts</Button>
    </Form>
  );
}
