import styled from 'styled-components'

export const LinkText = styled.p`
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  font-family: 'Roboto';
  color: ${props => (props.selectedLink === props.values ? 'red' : '#616e7c')};
  opacity: ${props => (props.selectedLink === props.values ? '1' : '0.5')};
`
export default LinkText
