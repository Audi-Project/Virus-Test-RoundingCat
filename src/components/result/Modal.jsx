import tw from 'tailwind-styled-components';
import ImgContainer from './ImgContainer';

import virusData from '../../data/virus-data/data';

export default function Modal() {
  return (
    <ModalBackDrop>
      <ModalBox>
        <ModalTitle>바이러스 전체유형</ModalTitle>
        <DummyImgContainer>
          {
            virusData
              .map((data) => (
                <ImgContainer
                  imgSize={data.imageSize}
                  src={data.url}
                  alt={data.mbtiType}
                  mbtiType={data.mbtiType}
                />
              ))
          }
        </DummyImgContainer>
        <FakeBtn />
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

const FakeBtn = tw.button`
bg-[#8059E6]
w-[122px]
h-[46px]
rounded-[50px]
`;
