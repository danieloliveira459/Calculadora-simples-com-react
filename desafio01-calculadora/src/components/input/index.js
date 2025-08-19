
import { InputContainer } from "./style";

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input className="Input" type="text" placeholder="0" value={value} />
    </InputContainer>
  );
}

export default Input;
