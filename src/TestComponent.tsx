import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "Daniel" });
  const [inputData, setInputData] = useState<string>("");

  const onChangeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
      <input type="text" value={inputData} onChange={onChangeInputData} />
      <h1>{inputData}</h1>
    </div>
  );
};

export default TestComponent;
