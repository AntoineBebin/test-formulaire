import styled from "styled-components";
import Anim from '../../image/animation.png';

const Container = styled.div`
width: 86.875rem;
height: 59.5rem;
flex-shrink: 0;
background-image: url(${Anim});
margin-left: 25rem;
margin-top: -5rem;
`

const Animation = () => {

    return(
        <Container>

        </Container>
    );
};

export default Animation;