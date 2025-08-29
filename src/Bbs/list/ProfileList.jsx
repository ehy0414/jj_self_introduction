/*
import styled from "styled-components"
import ProfileItem from "./ProfileItem";


export default function ProfileList(props) {
    console.log(props.data)
    return(
        <Wrapper>
            {props.data.map( (profile) =>{
                return (
                    <ProfileItem 
                        key={profile.id}
                        data={profile}
                    />
                )
            })}
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

*/