import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export function Counter() {
    const countNumber = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <span> {countNumber} </span>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
}