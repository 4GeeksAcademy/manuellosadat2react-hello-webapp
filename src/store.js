
export const initialStore = () => {
  return {
    message: null,
    todos: [
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
    name: "Jane Doe",
    address: "123 Main St",
    phone: "555-1234",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
    ]
  };
};



export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'add_task': {
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    }

    case 'delete_contact': {
      const { id } = action.payload;

      return {
        ...store,
        todos: store.todos.filter(todo => todo.id !== id)
      };
    }

    default:
      return store; 
  }
}

