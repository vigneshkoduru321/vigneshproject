import styled from 'styled-components'

export const TitleSaved = styled.p`
  color: ${props => (props.islight ? '#334155' : 'white')};
  font-size: 20px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
  margin-top: 10px;
  @media (max-width: 576px) {
    font-size: 17px;
  }
`
export const NameSaved = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const PublishedSaved = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 15px;
  font-weight: 400;
  margin: 0px;

  margin-left: 10px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const ViewsSaved = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 15px;
  font-weight: 400;
  margin: 0px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`
