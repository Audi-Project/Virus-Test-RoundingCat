import React from 'react';
import tw from 'tailwind-styled-components';

export default function Button({ url }) {
  return (
    <StartButton>
      <img src={url} alt="버튼 제목" />
    </StartButton>
  );
}

const StartButton = tw.button`
  bg-[#8152F1]
  p-[20px]
  text-3xl
  text-center
  font-bold
  text-white
  w-[280px]
  h-[78px]
  rounded-full
  cursor-pointer
`;
