import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import loadingVirus from '../assets/loading/loadingVirus.svg';

export default function Loading({ getResult }) {
  const navigation = useNavigate();
  const result = getResult().join('');

  useEffect(() => {
    setTimeout(() => {
      navigation(`/result/${result}`);
    }, 2000);
  }, []);

  return (
    <div className="flex items-center w-[390px] h-[844px] bg-[#D8C5FD] justify-center">
      <Contianer>
        <div className="mb-[50px] text-[24px] absolute top-[7rem]">진단서를 작성하고 있습니다</div>
        <div className="animate-bounce">
          <img src={loadingVirus} alt="loading-virus" />
        </div>
        <div className="text-[26px] flex absolute bottom-[12rem]">
          <span>바이러스 분석 중</span>
          <div className="animate-typing overflow-hidden whitespace-nowrap">
            ...
          </div>
        </div>
      </Contianer>
    </div>
  );
}

const Contianer = tw.div`
flex
flex-col
items-center
`;
