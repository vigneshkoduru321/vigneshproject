import styled from 'styled-components'

export const DivMainHome = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 100vh;
  width: 100vw;
`
export default DivMainHome
