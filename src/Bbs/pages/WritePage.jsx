import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../api/axios";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const WritePage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    job: "",
    age: "",
    school: "",
  });


  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };          // 위에서 단일값이 아닌 객체형을 했을 때는 이렇게 여러개를 할 수 있는 걸로 //여러 입력값(name, job, age 등)을 하나의 객체로 묶어서 관리할 때 사용

  

  const proSave = async (event) => {
    event.preventDefault();
    try {
      await api.post("/profile", form); // 프로필 저장하는 엔드포인트
      alert("글 작성을 완료했습니다. 홈으로 돌아갑니다. ");
            navigate("/");
    } catch (error) {
      console.error(error);
    }
  };


  

  return (
    <Wrapper>
      <Container>
        <h1>자기소개 작성</h1>
      <Form>
        <BoxContainer>
          <label> 이름:
                <TextInput  type="text" name="name" 
                            value={form.name} 
                            onChange={onChange} />
          </label>
          </BoxContainer>
          
          <BoxContainer>
          <label> 직업:
                <TextInput  type="text"  name="job" 
                            value={form.job}
                            onChange={onChange} />
          </label>
          </BoxContainer>
          
          <BoxContainer>
          <label> 나이:
                <TextInput  type="text" name="age" 
                            value={form.age} 
                            onChange={onChange} />
          </label>
          </BoxContainer>
          
          <BoxContainer>
          <label> 근무지,학교:
                <TextInput  type="text" name="school" 
                            value={form.school} 
                            onChange={onChange} />
          </label>
          </BoxContainer>
</Form>
          <ButtonContainer>
                    <button title="글 작성하기" type="button" onClick={proSave} >글 작성하기</button>
                    &nbsp;&nbsp;&nbsp;

                    <Button title = "뒤로가기"
                            onClick= {() => {navigate("/")}} >
                    </ Button>
                </ButtonContainer>

      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
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


const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 12px;

    input {
      margin-left: 10px;
      padding: 4px 8px;
      font-size: 16px;
    }
  }
`;

export default WritePage;
