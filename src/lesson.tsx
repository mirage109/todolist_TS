// function flux(state: typeof initialState, action: Action): typeof initialState {
//   return headerReducer(feedReducer(addReducer(state, action), action), action);
// }
/*
interface Action {
  type: string;
  payload: any;
}
type Reducer = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

function composeReducers(...reducers: Reducer[]): Reducer {
  //return reducers.reduce((a, b) => (state, action)=>b(a(state, action), action))
  return (state, action) =>
    reducers.reduce((acc, el) => el(acc, action), state);
}

const flux = composeReducers(addReducer, feedReducer, headerReducer);
*/
export {}