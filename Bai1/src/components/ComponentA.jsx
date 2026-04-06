import React from 'react';
import { useRecoilValue } from 'recoil';
import { countAtom } from '../CountAtom'; 

export default function ComponentA() {
  const counterValue = useRecoilValue(countAtom);
  return (
    <div >
      <h3>Component A</h3>
      <p>Số đếm: {counterValue}</p>
    </div>
  );
}