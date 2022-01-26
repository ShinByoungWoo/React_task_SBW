import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DayList = (props) => {
  const navigate = useNavigate(); // 링크 이동 리액트 훅 
  
  const days = [ // Detail.js에 내려줄 데이터 선언
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];

  // 난수 생성을 위한 함수 사용
  // 월~일까지 매일 난수 생성을 도와줌
  const mon = Math.floor(Math.random() * 5) + 1;
  const tue = Math.floor(Math.random() * 5) + 1;
  const wed = Math.floor(Math.random() * 5) + 1;
  const thu = Math.floor(Math.random() * 5) + 1;
  const fri = Math.floor(Math.random() * 5) + 1;
  const sat = Math.floor(Math.random() * 5) + 1;
  const sun = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="wrap">
      <Myh1>이번주 나의 점수는?</Myh1>
      <MyLine />
      <ScoreWrap>
        <DayText>월</DayText>
        <Scores index={1} random={mon} />
        <Scores index={2} random={mon} />
        <Scores index={3} random={mon} />
        <Scores index={4} random={mon} />
        <Scores index={5} random={mon} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[0]}`);
          }}
        />
      </ScoreWrap>

      <ScoreWrap>
        <DayText>화</DayText>
        <Scores index={1} random={tue} />
        <Scores index={2} random={tue} />
        <Scores index={3} random={tue} />
        <Scores index={4} random={tue} />
        <Scores index={5} random={tue} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[1]}`);
          }}
        />
      </ScoreWrap>

      <ScoreWrap>
        <DayText>수</DayText>
        <Scores index={1} random={wed} />
        <Scores index={2} random={wed} />
        <Scores index={3} random={wed} />
        <Scores index={4} random={wed} />
        <Scores index={5} random={wed} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[2]}`);
          }}
        />
      </ScoreWrap>

      <ScoreWrap>
        <DayText>목</DayText>
        <Scores index={1} random={thu} />
        <Scores index={2} random={thu} />
        <Scores index={3} random={thu} />
        <Scores index={4} random={thu} />
        <Scores index={5} random={thu} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[3]}`);
          }}
        />
      </ScoreWrap>

      <ScoreWrap>
        <DayText>금</DayText>
        <Scores index={1} random={fri} />
        <Scores index={2} random={fri} />
        <Scores index={3} random={fri} />
        <Scores index={4} random={fri} />
        <Scores index={5} random={fri} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[4]}`);
          }}
        />
      </ScoreWrap>

      <ScoreWrap>
        <DayText>토</DayText>
        <Scores index={1} random={sat} />
        <Scores index={2} random={sat} />
        <Scores index={3} random={sat} />
        <Scores index={4} random={sat} />
        <Scores index={5} random={sat} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[5]}`);
          }}
        />
      </ScoreWrap>

      <ScoreWrap>
        <DayText>일</DayText>
        <Scores index={1} random={sun} />
        <Scores index={2} random={sun} />
        <Scores index={3} random={sun} />
        <Scores index={4} random={sun} />
        <Scores index={5} random={sun} />
        <Semo
          className=""
          onClick={() => {
            navigate(`/detail/${days[6]}`);
          }}
        />
      </ScoreWrap>
    </div>
  );
};

const ScoreWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: coenter;
  margin: auto;
  width: 100%;
`;

const DayText = styled.p`
  margin: auto;
  width: 16px;
  font-weight: bold;
`;

const Scores = styled.div`
  padding: 20px;
  margin: 12px auto;
  background-color: ${(props) =>
    props.index <= props.random ? "yellow" : "#eee"};
  border-radius: 50%;
`;

const Semo = styled.div`
  appearance: none;
  border-color: transparent;
  margin: auto -30px auto auto;
  background-color: transparent;
  width: 0px;
  height: 0px;
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
  border-left: 35px solid skyblue;
  border-right: 35px solid transparent;
  cursor: pointer;
`;

const Myh1 = styled.h1`
  color: rgba(108, 31, 233, 0.88);
  text-align: center;
`;

const MyLine = styled.hr`
  margin: 30px auto;
`;

export default DayList;
