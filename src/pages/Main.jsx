import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/button/Button';

import Copy from '../components/copy/copy';
import title from '../assets/mainTitle.png';
import logoImg from '../assets/mainVirus.png';
import buttonText from '../assets/mainButtonText.png';

export default function Main() {
  return (
    <MainSection>
      <img className="w-[220px]" src={title} alt="제목" />
      <img className="w-[300px]" src={logoImg} alt="로고 이미지" />
      <Link to="/question"><Button url={buttonText} /></Link>
      <Copy />
    </MainSection>
  );
}

const MainSection = tw.section`
  flex
  flex-col
  justify-evenly
  items-center
  w-[390px] 
  h-[844px] 
  bg-[#F0E9FF]
`;
