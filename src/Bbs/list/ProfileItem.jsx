/*
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function ProfileItem(props){
    const navigate = useNavigate();
    const moveHandler = (id) => {
        navigate(`Profile-view/${id}`)
    
    }
    

    return(
        <Wrapper onClick={() => moveHandler(props.data.id)}>
            <TitleText>
                {props.data.title}
            </TitleText>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;
const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

*/