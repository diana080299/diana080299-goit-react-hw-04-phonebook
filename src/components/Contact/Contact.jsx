import { Li, Button } from './Contact.styled';

export const Contact = props => {
  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };

  return (
    <ul>
      {props.contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {formatNumber(contact.number)}{' '}
          <Button type="button" onClick={() => props.onDelete(contact.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </ul>
  );
};
