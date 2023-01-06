import styled from 'styled-components'

export const Title = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 13px;
`
export const Name = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 10px;
`
