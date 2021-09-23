import { useSelector } from "react-redux";
import { increment, decrement, isLogin } from './actions';
import { useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter.count} </h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(isLogin())}>{login ? 'Logout' : 'Login'}</button>
    </>
  );
}

export default App;
