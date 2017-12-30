export function selectBook(book) {
  // selectBook is an AcionCreator, it needs to return an action, an object with a type property (and sometime a payload as well).
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
