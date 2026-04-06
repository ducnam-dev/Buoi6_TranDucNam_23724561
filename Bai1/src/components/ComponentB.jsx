import React from 'react';
import { useRecoilValue } from 'recoil';
import { countAtom } from '../CountAtom'; 

export default function ComponentB() {
  const counterValue = useRecoilValue(countAtom);
  return (
 <div >    <h3>Component B</h3>
      <p>Số đếm: {counterValue}</p>
    </div>
  );
}