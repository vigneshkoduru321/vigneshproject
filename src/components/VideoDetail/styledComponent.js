import styled from 'styled-components'

export const DivVideoMain = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 100vh;
  width: 100vw;
`

export const VideoContainer = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  width: 70%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 576px) {
    margin-top: 10px;
    width: 97%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const TitleVideo = styled.div`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`

export const Para = styled.div`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 400;
  font-size: 15px;
  @media (max-width: 576px) {
    font-size: 18px;
    font-weight: 0;
    font-family: 'Roboto';
  }
`

export const ParaView = styled.div`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 400;
  font-size: 15px;
  @media (max-width: 576px) {
    font-size: 18px;
    font-weight: 0;
    font-family: 'Roboto';
    margin-right: 10px;
  }
`

export const Button = styled.button`
  color: ${props => (props.value === props.selectedReaction ? 'red' : 'grey')};
  font-weight: 400;
  font-size: 15px;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    font-size: 16px;
    font-family: 'Roboto';
  }
`

export const ButtonSave = styled.button`
  color: ${props => (props.isSaved ? 'green' : 'grey')};
  font-weight: 400;
  font-size: 15px;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    font-size: 16px;
    font-family: 'Roboto';
  }
`

export const Hr = styled.hr`
  width: 100%;
  margin-top: 40px;
  height: 1px;
  background-color: ${props => (props.islight ? 'grey' : 'grey')};
  @media (max-width: 576px) {
    margin-top: 20px;
  }
`

export const Name = styled.div`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 400;
  font-size: 15px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const Subscribers = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 400;
  font-size: 15px;
  @media (max-width: 576px) {
    font-size: 1px;
  }
`
export const Description = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600;
  font-size: 15px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
