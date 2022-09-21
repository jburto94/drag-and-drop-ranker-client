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

const addToList = (listItems, itemsToAdd) => {
  const newItems = convertUserInput(itemsToAdd);
  const oldList = listItems.map(item => item.item);
  const newList = oldList.concat(newItems).map((item, idx) => ( { item: item, id: String(idx)} ));
  return newList;
}

const handleRemoveItem = (listItems, itemToRemove) => {
  const updatedList = [...listItems].filter(listItem => listItem.id !== itemToRemove.id);
  return updatedList;
}

export const ListContext = createContext({
  list: [],
  setList: () => {},
  edit: null,
  setEdit: () => {},
  add: null,
  setAdd: () => {}
});

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
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

  const createList = listData => {
    setList(createNewList(listData));
  }

  const clearList = () => {
    setList([]);
  }

  const updateList = (list, newItems) => {
    setList(addToList(list, newItems));
  }

  const value = {
    list,
    setList,
    edit,
    setEdit,
    add,
    setAdd,
    onDragEnd,
    removeItem,
    createList,
    clearList,
    updateList
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
};