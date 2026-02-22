import useStore from "../Store/ZustandStore";
import { ZustandBox, ZustandButton, CountButton } from "../style/ZustandStyle";

function Count() {
  const { count, increase, decrease, Reset } = useStore();

  return (
    <ZustandBox>
      <h1>{count}</h1>
      <ZustandButton>
        <CountButton onClick={increase}>+</CountButton>
        <CountButton onClick={Reset}>Reset</CountButton>
        <CountButton onClick={decrease}>-</CountButton>
      </ZustandButton>
    </ZustandBox>
  );
}

export default Count;
