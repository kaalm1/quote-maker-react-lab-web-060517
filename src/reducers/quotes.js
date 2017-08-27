
export default function quotesReducer(state = [], action) {
  switch (action.type) {

    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      const idx = state.findIndex(x=>x.id===action.id)
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];

    case "UPVOTE":
      return state.map((quote)=>{
        if(quote.id===action.id){
          quote.votes++
          return quote
        } else {
          return quote
        }})

    case "DOWNVOTE":
    return state.map((quote)=>{
      if(quote.id===action.id){
        quote.votes--
        return quote
      } else {
        return quote
      }})

    default:
      return state;
  }
}
