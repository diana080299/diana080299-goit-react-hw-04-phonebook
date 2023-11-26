import { Contact } from '../Contact/Contact';
export const ContactList = props => {
  return (
    <div>
      <Contact contacts={props.contacts} onDelete={props.onDelete} />
    </div>
  );
};
