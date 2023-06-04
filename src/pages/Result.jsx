import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Section, Section2, Box, Box2, ButtonSection, ShareSection, Kakao
} from './Styles';
import ENTP from '../assets/images/ENTP-겉바속촉.png';
import reset from '../assets/result/reset.svg';
import all from '../assets/result/all.svg';
import share from '../assets/result/share.svg';
import link from '../assets/result/link.svg';
// import Modal from '../components/result/Modal;

function Result() {
  const [isOpen, setIsOpen] = useState(false);
  // const modalRef = useRef(null);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  // const modalSideClick = (e) => {
  //   if (modalRef.current === e.target) {
  //     setIsOpen(!isOpen);
  //   }
  // };
  return (
    <Container>
      {isOpen ? (
        <div>
          rmsid
          {/* <Modal modalSideClick={modalSideClick} modalRef={modalRef}/> */}
        </div>
      ) : (
        <>
          <Section>
            <img src={ENTP} alt="ENFP" />
          </Section>
          <Section2>
            <Box>
              <ButtonSection>
                <Link to="/">
                  <img src={reset} alt="reset" />
                </Link>
              </ButtonSection>
              <ButtonSection onClick={openModalHandler}>
                <img src={all} alt="all" />
              </ButtonSection>
            </Box>
            <Box2>
              <img src={share} alt="share" />
              <ShareSection>
                <button type="button">
                  <img src={link} alt="link" />
                </button>
                <button type="button">
                  <Kakao className="w-[50px] rounded-full" src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="공유하기" />
                </button>
              </ShareSection>
            </Box2>
          </Section2>
        </>
      )}
    </Container>
  );
}

export default Result;
