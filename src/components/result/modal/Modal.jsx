import tw from 'tailwind-styled-components';
import ImgContainer from './ImgContainer';

import virusData from '../../../data/virus-data/data';
import closeBtn from '../../../assets/result/closeBtnText.png';

export default function Modal({ modalSideClick, modalRef, openModalHandler }) {
  return (
    <ModalBackDrop ref={modalRef} onClick={modalSideClick}>
      <ModalBox>
        <ModalTitle>바이러스 전체유형</ModalTitle>
        <DummyImgContainer>
          {
            virusData
              .map((data) => (
                <ImgContainer
                  key={data.id}
                  src={data.url}
                  alt={data.mbtiType}
                  mbtiType={data.mbtiType}
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
    </ModalBackDrop>
  );
}
const ModalBackDrop = tw.div`
  bg-[#2121214f]
  relative
  w-screen
  h-screen
  flex
  items-center
  justify-center
`;

const ModalBox = tw.div`
  bg-[#FFFFFF]
  w-[366px]
  h-[531px]
  border-[#8059E6]
  rounded-[10px]
  border-[3px]
  flex
  flex-col
  justify-evenly
  items-center
`;

const DummyImgContainer = tw.div`
  grid grid-rows-4 grid-flow-col gap-2
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
