import styled from 'styled-components'

export const LinkText = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-size: 15px;
`
export default LinkText
