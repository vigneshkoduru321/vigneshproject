import styled from 'styled-components'

export const TitleGameCard = styled.p`
  color: ${props => (props.islight ? '#334155' : 'white')};
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0px;
`
export const ViewsGameCard = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 10px;
`
