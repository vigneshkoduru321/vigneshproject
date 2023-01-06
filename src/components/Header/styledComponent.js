import styled from 'styled-components'

export const NavHeader = styled.div`
  height: 8vh;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${props => (props.islight ? '#1e293b' : 'white')};
  width: 100vw;
  background-color: ${props => (props.islight ? 'white' : 'black')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default NavHeader
