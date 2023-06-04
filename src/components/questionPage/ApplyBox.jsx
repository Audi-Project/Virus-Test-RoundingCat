import React from 'react';
import tw from 'tailwind-styled-components';

const Box = tw.button`
  bg-[#DABDFC]
  p-10
  border
  border-solid
  border-black
  rounded-lg
  grid
  drop-shadow-[4px_4px_0_rgba(0,0,0)]

  hover:bg-[#bf8ff5]
  transform active: scale-98
  active:drop-shadow-none
`;

export default function ApplyBox({ onNextQuestion, answer }) {
  return (
    <Box type="button" onClick={onNextQuestion}>{answer}</Box>
  );
}
