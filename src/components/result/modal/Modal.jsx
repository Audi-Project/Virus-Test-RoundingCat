import tw from 'tailwind-styled-components';
import ImgContainer from './ImgContainer';

import virusData from '../../../data/virus';
import closeBtn from '../../../assets/result/modal/closeBtnText.png';

export default function Modal({ openModalHandler }) {
  return (
    <ModalBox>
      <ModalTitle>바이러스 전체유형</ModalTitle>
      <DummyImgContainer>
        {
          virusData
            .map((virus) => (
              <ImgContainer
                src={virus.url}
                alt={virus.mbtiType}
                mbtiType={virus.mbtiType}
                key={virus.id}
              />
            ))
        }
      </DummyImgContainer>
      <div>
        <ButtonSection onClick={openModalHandler}>
          <img className="inline absolute bottom-1.5 left-9" src={closeBtn} alt="버튼 제목" />
        </ButtonSection>
      </div>
    </ModalBox>
  );
}

const ModalBox = tw.div`
  bg-[#FFFFFF]
  w-[366px]
  h-[531px]
  border-[#8059E6]
  rounded-[10px]
  border-[3px]
  flex
  flex-col
  items-center
  py-[18px]
  justify-between
  absolute
  t-1
`;
const DummyImgContainer = tw.div`
grid grid-rows-4 grid-flow-col gap-5
`;

const ModalTitle = tw.div`
text-[24px]
text-[#8059E6]
`;

const ButtonSection = tw.button`
  bg-[#8152F1]
  p-[20px]
  rounded-full
  relative
  shadow-3xl 
  w-[122px] 
  h-[46px]
`;
