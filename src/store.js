export const initialStore = () => {
  return {
    contacts: [
      {
        id: 1,
        name: "Mike Anamendolla",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "mike.ana@example.com",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      {
        id: 2,
        name: "Mike Anamendolla",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "mike.ana@example.com",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      {
        id: 3,
        name: "Mike Anamendolla",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "mike.ana@example.com",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      {
        id: 4,
        name: "Mike Anamendolla",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "mike.ana@example.com",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(c => c.id !== action.payload)
      };

    default:
      return store;
  }
}
