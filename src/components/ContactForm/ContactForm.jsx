import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.onSubmit(newContact.name, newContact.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>
          {' '}
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            id={this.nameId}
            placeholder="Entry your name"
          />
        </Label>
        <Label htmlFor={this.numberId}>
          Number
          <Input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
            id={this.numberId}
            placeholder="Entry your number"
          />
        </Label>

        <Button type="submit">Add contacts</Button>
      </Form>
    );
  }
}
