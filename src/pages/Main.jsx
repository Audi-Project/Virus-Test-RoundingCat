import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/button/Button';
import Share from '../components/share/Share';
import title from '../assets/mainTitle.png';
import logoImg from '../assets/mainVirus.svg';
import buttonText from '../assets/mainButtonText.png';

export default function Main() {
  return (
    <MainSection>
      <img className="w-[220px]" src={title} alt="제목" />
      <img className="w-[300px]" src={logoImg} alt="로고 이미지" />
      <Link to="/question"><Button url={buttonText} /></Link>
      <Share />
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
  max-[360px]:w-[360px] max-[360px]:h-[740px]
  max-[375px]:w-[375px] max-[375px]:h-[667px]
  max-[390px]:w-[390px] max-[390px]:h-[844px]
  max-[412px]:w-[412px] max-[412px]:h-[915px]
  max-[414px]:w-[414px] max-[414px]:h-[896px]
`;
