import React from 'react';
import tw from 'tailwind-styled-components';

import urlImg from '../../assets/mainUrlShare.png';

export default function Share() {
  const urlCopyHandler = () => {
    const url = window.location.href;
    window.navigator.clipboard.writeText(url).then(() => alert('링크가 복사되었습니다.'));
  };

  const handlePageShare = () => {
    window.Kakao.Link.sendCustom({
      templateId: 94563,
    });
  };

  return (
    <ShareSection>
      <div className="text-xl text-[#5B3037]">테스트 공유하기</div>
      <div>
        <button type="button" onClick={urlCopyHandler}>
          <img className="w-[50px] mr-3" src={urlImg} alt="url복사" />
        </button>
        <button type="button" onClick={handlePageShare}>
          <img className="w-[50px] rounded-full" src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="공유하기" />
        </button>
      </div>
    </ShareSection>
  );
}

const ShareSection = tw.div`
  w-[270px]
  h-[90px]
  flex flex-col
  justify-between
  items-center
`;
