import { Container } from "./ImagePreview.style";
export function ImagePreview(props){
  const { src } = props;

  console.log(src, 'srcsrcsrc')
  return (
    <Container>
      <img src={src} alt="ejr" />
    </Container>
  )
}