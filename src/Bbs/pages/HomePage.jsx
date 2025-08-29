import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../api/axios";


const HomePage = () => {
  const navigate = useNavigate();

  // 자기소개 변수명
    const[profile, setprofile] = useState({});

  // 데이터 받아오기
  const getprofile = async () => {
    try {
      const response = await api.get("/profile"); 
      setprofile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getprofile();
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1>나의 자기소개 페이지</h1>
        <BoxContainer> 이름: {profile.name}</BoxContainer>
        <BoxContainer> 직업: {profile.job}</BoxContainer>
        <BoxContainer> 나이: {profile.age}</BoxContainer>
        <BoxContainer> 근무지,학교: {profile.school}</BoxContainer>

        <ButtonContainer>
          <StyledButton onClick={() => {navigate("/bbs-Write")}}>
                        작성하기
          </StyledButton>
        </ButtonContainer>

        

      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;


const BoxContainer = styled.div`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
    background:rgb(94, 152, 209);
  `;

const ButtonContainer = styled.div`
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 8px;
  background: rgb(94, 152, 209);
  color: white;
  border: none;
  cursor: pointer;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  background: rgb(94, 152, 209);
  color: white;
  border: none;
  cursor: pointer;
`;

export default HomePage;