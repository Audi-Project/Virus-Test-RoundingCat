import React from 'react';
import tw from 'tailwind-styled-components';

export default function Button({ url }) {
  return (
    <ButtonSection>
      <img src={url} alt="버튼 제목" />
    </ButtonSection>
  );
}

const ButtonSection = tw.section`
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
