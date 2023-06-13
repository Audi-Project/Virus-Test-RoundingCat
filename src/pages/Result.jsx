import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import DomToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {
  Div, Container, Section, Section2, Box, Box2, ButtonSection, ShareSection,
  ShareButton, ModalBackDrop
} from '../styles/Result-styles';
import reset from '../assets/result/reset.svg';
import all from '../assets/result/all.svg';
import share from '../assets/result/share.svg';
import link from '../assets/result/link.svg';
import download from '../assets/result/download.svg';
import Modal from '../components/result/modal/Modal';
import data from '../data/data';
import { ResultShare } from '../components/share/Share';

function Result() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const { params } = useParams();
  const image = data.findIndex((val) => val.name === params);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const modalSideClick = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(!isOpen);
    }
  };

  const urlCopyHandler = () => {
    const url = window.location.href;
    window.navigator.clipboard.writeText(url).then(() => alert('링크가 복사되었습니다.'));
  };

  const onDownload = () => {
    DomToImage.toBlob(document.querySelector('.card')).then((blob) => {
      saveAs(blob, 'result.png');
    });
  };

  return (
    <Div>
      <Container>
        {isOpen ? (
          <ModalBackDrop ref={modalRef} onClick={modalSideClick}>
            <Modal
              modalSideClick={modalSideClick}
              modalRef={modalRef}
              openModalHandler={openModalHandler}
            />
          </ModalBackDrop>
        ) : null }
        <Section>
          <img className="card" src={data[image].url} alt="MBTI" />
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
              <ShareButton onClick={urlCopyHandler}>
                <img src={link} alt="link" />
              </ShareButton>
              <ResultShare name={params} />
              <ShareButton onClick={onDownload}>
                <img src={download} alt="download" />
              </ShareButton>
            </ShareSection>
          </Box2>
        </Section2>
      </Container>
    </Div>
  );
}

export default Result;
