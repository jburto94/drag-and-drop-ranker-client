import { createContext, useState } from 'react';

const handleDragEnd = (listItems, itemToUpdate) => {
  if (!itemToUpdate.destination || itemToUpdate.destination.index === itemToUpdate.source.index) {
    return;
  }

  const updatedList = [...listItems];
  const [updatedItem] = updatedList.splice(itemToUpdate.source.index, 1);
  updatedList.splice(itemToUpdate.destination.index, 0, updatedItem);

  return updatedList;
}

const convertUserInput = input => {
  // converts every newline into an item
  const cleanedInput = input.split(/\r?\n/);
  // removes any empty items (if the user added an empty linebreak)
  return cleanedInput.filter(item => item);
}

const createNewList = result => {
  const listData = result;
  const convertedListData = convertUserInput(listData);
  const newList = convertedListData.map((item, idx) => ( { item: item, id: String(idx)} ));
  return newList;
}

const displayList = listData => {
  const displayedList = listData.map((item, idx) => ( { item: item, id: String(idx)} ));
  return displayedList;
}

const addToList = (listItems, itemsToAdd) => {
  const newItems = convertUserInput(itemsToAdd);
  const oldList = listItems.map(item => item.item);
  const newList = oldList.concat(newItems).map((item, idx) => ( { item, id: String(idx)} ));
  return newList;
}

const handleRemoveItem = (listItems, itemToRemove) => {
  const updatedList = [...listItems].filter(listItem => listItem.id !== itemToRemove.id);
  return updatedList;
}

const handleEditItem = (listItems, editedItem) => {
  const updatedList = [...listItems].map(listItem => listItem.id === editedItem.id ? editedItem : listItem);
  return updatedList;
}

export const ListContext = createContext({
  list: [],
  setList: () => {},
  listId: null,
  setListId: () => {},
  title: null,
  setTitle: () => {},
  edit: null,
  setEdit: () => {},
  add: null,
  setAdd: () => {}
});

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [listId, setListId] = useState('');
  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState(true);
  const [add, setAdd] = useState(false);

  const onDragEnd = item => {
    // Checks if user draged item to valid spot, does not update if invalid
    const reorderedList = handleDragEnd(list, item)
    if (reorderedList) {
      setList(reorderedList);
    }
  }

  const removeItem = item => {
    setList(handleRemoveItem(list, item));
  }

  const updateItem = item => {
    setList(handleEditItem(list, item));
  }

  const createList = listData => {
    setList(createNewList(listData));
  }

  const renderList = listData => {
    setList(displayList(listData));
  }

  const clearList = () => {
    setList([]);
  }

  const updateList = (list, newItems) => {
    setList(addToList(list, newItems));
  }

  const resetListData = () => {
    setList([]);
    setListId('');
    setTitle('');
  }

  const value = {
    list,
    setList,
    listId,
    setListId,
    title,
    setTitle,
    edit,
    setEdit,
    add,
    setAdd,
    onDragEnd,
    removeItem,
    updateItem,
    renderList,
    createList,
    clearList,
    updateList,
    resetListData
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
};