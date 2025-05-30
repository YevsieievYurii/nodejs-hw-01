import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('⚠️ Контактів немає — видаляти нічого.');
    return;
  }

  const removedContact = contacts.pop();
  await writeContacts(contacts);

  console.log(`Видалено останній контакт: ${removedContact.name}`);
};

removeLastContact();
