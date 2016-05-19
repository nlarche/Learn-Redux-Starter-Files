export default function reducer(state = [], action) {
 switch (action.type) {
     case 'INCREMENT_LIKES':
        const i = action.index;
         return [
           ...state.slice(0, i), // before
           { ...state[i], likes : state[i].likes + 1 },  
             ...state.slice(i + 1), //after          
         ] 
     default:
         return state;
 }   
}