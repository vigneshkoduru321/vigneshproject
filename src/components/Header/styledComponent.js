import styled from 'styled-components'

export const NavHeader = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: ${props => (props.islight ? 'white' : 'black')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default NavHeader
