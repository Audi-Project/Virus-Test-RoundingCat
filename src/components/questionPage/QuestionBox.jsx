import React from 'react';
import tw from 'tailwind-styled-components';

const Box = tw.div`
  bg-[#ffffff]
  place-content-center
  p-10
  md:p-5
  border
  border-solid
  border-black
  rounded-lg
  grid
  place-items-center
  m-[10px]
  mb-[30px]
  shadow-inner

  landscape:p-5
`;

export default function QuestionBox({ question }) {
  return (
    <Box>
      <p className="mb-7 landscape:hidden">🏥</p>
      {question}
    </Box>
  );
}
