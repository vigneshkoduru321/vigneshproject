import styled from 'styled-components'

export const TitleGameCard = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600;
  font-family: 'Roboto';
`
export const ViewsGameCard = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 400;
  font-family: 'Roboto';
`
