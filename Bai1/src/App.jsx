import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { useRecoilValue, useSetRecoilState } from 'recoil'; // Thêm useSetRecoilState
import { countAtom } from './CountAtom'; 

function CounterDisplay() {
  const counterValue = useRecoilValue(countAtom); 
  return <h2>Giá trị hiện tại từ App: {counterValue}</h2>;
}

export default function App() {
  // Hàm để ghi dữ liệu vào Atom
  const setCount = useSetRecoilState(countAtom);

  const handleInc = () => {
    setCount((oldValue) => oldValue + 1); // Tăng 1
  };

  const handleDec = () => {
    setCount((oldValue) => oldValue - 1); // Giảm 1
  };

  return (
    <div>
      <h1>App Context (Recoil)</h1>
      <CounterDisplay /> 
      <hr />
      
      {/* Nút bấm điều khiển */}
      <button onClick={handleInc}>Tăng số (+)</button>
      <button onClick={handleDec} style={{ marginLeft: '10px' }}>Giảm số (-)</button>
      
      <hr />
      <ComponentA />
      <ComponentB />
    </div>
  );
}