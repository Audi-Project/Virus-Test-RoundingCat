import tw from 'tailwind-styled-components';
import loadingVirus from '../assets/loading/loadingVirus.svg';

export default function Loading() {
  return (
    <div className="flex items-center w-[390px] h-[844px] bg-[#D8C5FD]">
      <Contianer>
        <div className="mb-20 text-[24px]">진단서를 작성하고 있습니다</div>
        <div className="animate-bounce">
          <img src={loadingVirus} alt="loading-virus" />
        </div>
        <div className="text-[26px] flex">
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
