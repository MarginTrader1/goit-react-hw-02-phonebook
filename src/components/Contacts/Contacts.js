import { Li, Button, Ul } from './Contacts.styled';

export const ContactsList = ({ list, deleteContact }) => {
  return (
    <Ul>
      {list.map(item => (
        <Li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          {/* в событие onClick передаем ссылку на анонимную функцию и вызываем метод deleteContact чтобы передать аргумент id в App  */}
          <Button type="button" onClick={() => deleteContact(item.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
