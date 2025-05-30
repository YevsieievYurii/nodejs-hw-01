import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Контактів не знайдено.');
    return;
  }

  console.log('Усі контакти:');
  console.table(contacts);
};

getAllContacts();
