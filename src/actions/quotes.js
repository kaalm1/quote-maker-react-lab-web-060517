// TODO: Create action creators as defined in tests

export const upVote = (quote) => {
  return {
    type: 'UPVOTE',
    id: quote.id
  };
}

export const downVote = (quote) => {
  return {
    type: 'DOWNVOTE',
    id: quote.id
  };
}

export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote
  };
}

export const removeQuote = (quote) => {
  return {
    type: 'REMOVE_QUOTE',
    id: quote.id
  };
}
