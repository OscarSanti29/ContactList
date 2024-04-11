export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  function handleClick() {
    setSelectedContactId(null);
  }
  return (
    <div>
      <h1>Details</h1>
      <span>
        {" "}
        {selectedContactId.address.street}
        {selectedContactId.address.city}
      </span>
      <button onClick={handleClick}>Go back</button>
    </div>
  );
}
// useEffect(() => {
//   async function fetchcontact() {
//     try {
//       const response = await fetch(
//         `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
//       );
//       const result = await response.json();
//       setcontact(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   fetchcontact();
// }, [selectedContactId]);
// console.log(contact);
