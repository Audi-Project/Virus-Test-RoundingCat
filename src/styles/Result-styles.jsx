import tw from 'tailwind-styled-components';

export const Div = tw.div`
  h-screen
`;

export const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  font-Regular
  w-[390px]
  h-[1362px]
  mt-[34px]
`;

export const Section = tw.div`
  w-[390px]
  h-[990px]
`;

export const Section2 = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-[390px]
  h-[370px]
  bg-[#D8C5FD]
`;

export const Box = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-[220px]
  h-[195px]
`;

export const Box2 = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-[220px]
  h-[195px]
`;

export const ButtonSection = tw.button`
  flex
  justify-center
  items-center
  bg-[#8152F1]
  p-[20px]
  text-3xl
  text-center
  font-bold
  text-white
  w-[220px]
  h-[52px]
  rounded-full
  cursor-pointer
  m-3
  shadow-3xl
`;

export const ShareSection = tw.section`
  flex
  items-center
  justify-center
  p-1
  w-[160px]
  h-[65px]
  bg-[#FEFDFF]
  mt-2
  border-solid
  border-2
  border-[#6938EA]
  rounded-[50px]
`;

export const ShareButton = tw.button`
  m-1
`;

export const ModalBackDrop = tw.div`
  bg-[#21212166]
  flex
  items-center
  justify-center
  fixed
  w-full
  h-full
  top-0
`;
