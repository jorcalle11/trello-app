const users = [
  {
    id: "b6e824da-0f80-4062-97c4-efe9da425621",
    name: "John Doe",
    email: "john@doe.com",
    password: "123456",
  },
  {
    id: "b6e824da-0f80-4062-97c4-efe9da425622",
    name: "Jane Doe",
    email: "jane@doe",
    password: "789012",
  },
];

const boards = [
  {
    // use uuid to generate unique id
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1cd",
    title: "Board 1",
    color: "#FF0000",
    userId: users[0].id,
  },
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1ce",
    title: "Board 2",
    color: "#00FF00",
    userId: users[1].id,
  },
];

const lists = [
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1cf",
    title: "List 1",
    boardId: boards[0].id,
  },
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1d0",
    title: "List 2",
    boardId: boards[0].id,
  },
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1d1",
    title: "List 3",
    boardId: boards[1].id,
  },
];

const cards = [
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1d2",
    title: "Card 1",
    description: "Description 1",
    listId: lists[0].id,
  },
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1d3",
    title: "Card 2",
    description: "Description 2",
    listId: lists[0].id,
  },
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1d4",
    title: "Card 3",
    description: "Description 3",
    listId: lists[1].id,
  },
  {
    id: "14d41722-ba61-41b5-9cd5-e5fe11c6d1d5",
    title: "Card 4",
    description: "Description 4",
    listId: lists[2].id,
  },
];

export { users, boards, lists, cards };
