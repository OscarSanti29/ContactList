import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact(selectedContactId) {
  const [contact, setcontact] = useState(null);

  useEffect(() => {
    async function fetchcontact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setcontact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchcontact();
  }, [selectedContactId]);
  console.log(contact);
}
