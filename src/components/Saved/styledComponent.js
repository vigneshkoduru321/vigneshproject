import styled from 'styled-components'

export const DivMainSaved = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 100vh;
  width: 100vw;
`
export const HeadTrend = styled.h1`
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
export const SavedListCon = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 80vh;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
`
export const TitleNoSaved = styled.h1`
  color: ${props => (props.islight ? '#334155' : 'white')};
  font-size: 25px;
  font-weight: 600;
`
export const ParaNoSaved = styled.h1`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 15px;
  font-weight: 400;
`
