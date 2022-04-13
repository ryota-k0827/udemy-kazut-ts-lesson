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

  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default TestComponent;
