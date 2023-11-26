import { Title, Input, Container } from '../Filter/Filter.styled';
export const Filter = props => {
  return (
    <Container>
      <Title style={{ fontSize: 30 }}>Find contacts by name</Title>
      <Input
        type="text"
        name="name"
        value={props.filter}
        onChange={props.onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        placeholder="Search your name"
      />
    </Container>
  );
};
