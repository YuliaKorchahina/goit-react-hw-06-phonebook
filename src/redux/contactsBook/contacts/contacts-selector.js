export const getContacts = store => store.contacts;

// export const getFiltredContacts = store => {
//   const { contacts, filter } = store;
//   if (!filter) {
//     return contacts;
//   }
//   const normalizedFilter = filter.toLocaleLowerCase();
//   const getFiltredData = contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter) 
//   );
//   return getFiltredData
// };
