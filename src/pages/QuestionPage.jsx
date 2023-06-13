/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import QuestionBox from '../components/questionPage/QuestionBox';
import ApplyBox from '../components/questionPage/ApplyBox';
import data from '../data/question';
import ProgressBar from '../components/questionPage/ProgressBar';
import Loading from './Loading';

const Container = tw.div`
flex
flex-col
justify-center
w-[390px]
h-[844px]
p-[16px]
bg-[#F0E9FF]

landscape:w-[600px]
`;

const ApplyContainer = tw.div`
flex
flex-col
space-y-[10px]

landscape:flex-row
landscape:space-x-[10px]
landscape:space-y-0
`;

export default function QuestionPage() {
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

  const getResult = () => {
    const obj = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };
    const mbti = [];
    result.forEach((x) => { obj[x] += 1; });
    if (obj.E > obj.I) mbti.push('E');
    else mbti.push('I');

    if (obj.S > obj.N) mbti.push('S');
    else mbti.push('N');

    if (obj.T > obj.F) mbti.push('T');
    else mbti.push('F');

    if (obj.J > obj.P) mbti.push('J');
    else mbti.push('P');

    return mbti;
  };

  let currentQuestion;
  let firstAnswer;
  let secondAnswer;
  let firstType;
  let secondType;

  if (idx < 12) {
    currentQuestion = data[idx].question;
    firstAnswer = data[idx].answer[0].content;
    secondAnswer = data[idx].answer[1].content;
    firstType = data[idx].answer[0].type;
    secondType = data[idx].answer[1].type;
  }

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
            <ApplyBox answer={firstAnswer} onNextQuestion={() => handleNextQuestion(firstType)} />
            <ApplyBox answer={secondAnswer} onNextQuestion={() => handleNextQuestion(secondType)} />
          </ApplyContainer>
        </Container>
      ) : (
        <Loading getResult={getResult} />
      )}
    </div>
  );
}
