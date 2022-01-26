import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const { days } = useParams();
  
  const navigate = useNavigate();

  
  const id_num = 0;

  
  // 색 변경 
  const ChangeColor = (e) => {
    const id_num = e.target.id;
    // console.log(id_num)
    for (let i = 1; i <= 5; i++) {
      const num = document.getElementById(i);
      // console.log(num)
      if (i <= id_num) {
        // 1~5보다 id_num이 크거나 같으면
        if (!num.classList.contains(styles.changeBack)) {
          // 클 때 num의 값이 스타일이 있는지 조건 (느낌표 붙여서 false먼저)
          num.classList.add(styles.changeBack); // 스타일이 없으니 스타일을 넣어주라
        }
      } else {
        // 1~5보다 id_num이 작을 때
        if (num.classList.contains(styles.changeBack)) {
          // 스타일이 있는지 확인해보고 있다면
          num.classList.remove(styles.changeBack); // 스타일을 지워라
        }
      }
    }
  };


  return (
    <div>
      <div>
        <H3>
          <Days>{days}</Days>의 평점 남기기
        </H3>
        <MyLine />
        <Ratings className="rates">
          <div className={styles.rate} id="1" onClick={ChangeColor} />
          <div className={styles.rate} id="2" onClick={ChangeColor} />
          <div className={styles.rate} id="3" onClick={ChangeColor} />
          <div className={styles.rate} id="4" onClick={ChangeColor} />
          <div className={styles.rate} id="5" onClick={ChangeColor} />
        </Ratings>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          평점 남기기
        </Button>
      </div>
    </div>
  );
};

const MyLine = styled.hr`
  margin: 30px auto;
`;

const Days = styled.span`
  width: 100vm;
  border-radius: 20%;
  background-color: skyblue;
  color: white;
`;

const Ratings = styled.div`
  display: flex;
  justify-content: center;
  align-items: coenter;
  margin: auto;
  width: 100%;
`;

const H3 = styled.h2`
  text-align: center;
  font-weight: bold;
  color: purple;
`;

const Button = styled.button`
  width: 80%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  font-size: 16px;
  margin: auto;
  display: block;
  cursor: pointer;
`;

export default Detail;
