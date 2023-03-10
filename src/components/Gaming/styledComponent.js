import styled from 'styled-components'

export const DivMainGame = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 100vh;
  width: 100vw;
`
export const HeadGame = styled.h1`
  color: ${props => (props.islight ? '#1E293B' : 'white')};
`
export const HeadContainer = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
`
