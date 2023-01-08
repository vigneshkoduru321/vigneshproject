import styled from 'styled-components'

export const TitleSaved = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 17px;
  }
`
export const NameSaved = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const PublishedSaved = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const ViewsSaved = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
