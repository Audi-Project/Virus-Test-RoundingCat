import React from 'react';
import tw from 'tailwind-styled-components';

import urlImg from '../../assets/mainUrlShare.png';

export default function Copy() {
  const urlCopyHandler = () => {
    const url = window.location.href;
    window.navigator.clipboard.writeText(url).then(() => alert('링크가 복사되었습니다.'));
  };

  return (
    <Share>
      <div className="text-xl text-[#5B3037]">테스트 공유하기</div>
      <button type="button" onClick={urlCopyHandler}>
        <img src={urlImg} alt="url복사" />
      </button>
    </Share>
  );
}

const Share = tw.div`
  w-[270px]
  h-[90px]
  flex flex-col
  justify-between
  items-center
`;
