import styled from 'styled-components'

export const DivMainHome = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 100vh;
  width: 100vw;
`
export const ParaSearch = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: '450px';
  font-size: 18px;
`
