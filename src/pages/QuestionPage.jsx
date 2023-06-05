import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import QuestionBox from '../components/questionPage/QuestionBox';
import ApplyBox from '../components/questionPage/ApplyBox';
import data from '../data/question';
import ProgressBar from '../components/questionPage/ProgressBar';

const Container = tw.div`
flex
flex-col
justify-center
w-[390px]
p-[16px]
`;

const ApplyContainer = tw.div`
flex
flex-col
space-y-[10px]
`;

export default function QuestionPage() {
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState([]);
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(-20);
  const [width, setWidth] = useState(0);

  const handleNextQuestion = (answerType) => {
    setIdx((prevIdx) => prevIdx + 1);
    setResult((prevResults) => [...prevResults, answerType]);
    setProgress((prevProgress) => prevProgress + 27);
    setWidth((preWidth) => preWidth + 27);
  };

  const currentQuestion = data[idx].question;
  const firstAnswer = data[idx].answer[0].content;
  const secondAnswer = data[idx].answer[1].content;

  return (
    <div>
      {idx < data.length ? (
        <Container>
          <p>
            {idx + 1}
            /
            {data.length}
          </p>
          <ProgressBar progress={progress} width={width} />
          <QuestionBox question={currentQuestion} />
          <ApplyContainer>
            <ApplyBox answer={firstAnswer} onNextQuestion={handleNextQuestion} />
            <ApplyBox answer={secondAnswer} onNextQuestion={handleNextQuestion} />
          </ApplyContainer>
        </Container>
      ) : (
        <div>끝!</div>
      )}
    </div>
  );
}
