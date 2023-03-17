import { Container, Score, TotalScore, ImageWrapper } from "./ScorePrediction.style";
export function ScorePrediction(){
 return (
   <Container>
    {/* todo add a foreach loop through cordinates for the backend and display */}
    {/* <ImageTitle> Red Cockaded Woodpecker</ImageTitle> */}
      <ImageWrapper className="ranked-prototoypes">
        {/* <img className="ranked-prototoypes" src='images/image-7.png' alt="red bellied woodpecker" />
        <img className="ranked-prototoypes" src='images/image-8.png' alt="red bellied woodpecker" />
        <img className="ranked-prototoypes" src='images/image-9.png' alt="red bellied woodpecker" /> */}
        {/* <Score className="ranked-prototoypes">2.5</Score> */}
        {/* <img className="ranked-prototoypes" src='images/image-10.png' alt="red bellied woodpecker" />
        <img className="ranked-prototoypes" src='images/image-11.png' alt="red bellied woodpecker" />
        <img className="ranked-prototoypes" src='images/image-12.png' alt="red bellied woodpecker" /> */}
        {/* <Score className="ranked-prototoypes">2.3</Score>
        <Score className="ranked-prototoypes">1.8</Score> */}
        {/* <TotalScore className="ranked-prototoypes">15.2</TotalScore> */}
      </ImageWrapper>
   </Container>
 )
}
