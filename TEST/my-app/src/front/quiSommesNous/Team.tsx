import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const Container = styled.div`
display: flex;
flex-direction : column;
align-items: center;
margin-top : 300px;
`

const Block = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 120px;
position: relative;
width: 1128px;
height: 500px;
left: -90px;
top: 680px;
margin-top: 20px;
`

const Title = styled.h1`
position: absolute;
width: 441px;
height: 81px;
left: 35px;
top: -100px;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color: #5EA2B1;
`

const BlockText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 8px;
position: absolute;
width: 648px;
height: 320px;
left: 0px;
top: 65px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;`

const Texte1 = styled.span`
width: 648px;
height: 40px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #202124;
`

const Texte2 = styled.span`
width: 568px;
height: 192px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;
`
// CSS pour animation card
const SlideContainer = styled.div `
    width: 240px;
    height: 620px;
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    height: 300px;
    position: relative;
    top: 320px;
    left: 1350px;
  }
  .swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
  }
  .swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
  }
  .swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
  }
  .swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
  }
  .swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
  }
  .swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
  }
  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }
  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }
  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }
  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }
`

const Team = () => {

    return(
        <Container>
            <Block>
                <Title>L'équipe</Title>
                <BlockText>
                    <Texte1>La communication</Texte1>
                    <Texte2>Il était une fois une entreprise appelée "NovaTech" qui avait été fondée par deux jeunes entrepreneurs passionnés par la technologie et l'innovation, Lisa et David. Leur objectif était de créer une entreprise axée sur la recherche et le développement de nouvelles technologies révolutionnaires. Au départ, NovaTech était une petite start-up basée dans un garage. Lisa et David travaillaient jour et nuit pour concrétiser leurs idées novatrices. Ils ont réuni une équipe talentueuse de développeurs, d'ingénieurs et de chercheurs, partageant tous la même vision de transformer le monde grâce à la technologie.</Texte2>
                </BlockText>
            </Block>
            <SlideContainer>
                <Swiper effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                </Swiper>
            </SlideContainer>
        </Container>
    );
}

export default Team;