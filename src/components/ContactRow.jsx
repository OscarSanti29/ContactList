export default function ContactRow({ setSelectedContactId, contact }) {
  function handleClick() {
    setSelectedContactId(contact);
  }
  return (
    <tr onClick={handleClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
