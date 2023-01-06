import styled from 'styled-components'

export const DivSidebar = styled.div`
  display: flex;
  height: 580px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto';
`
export const LinkName = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 550;
  font-size: 16px;
  color: ${props => (props.selectedLink === props.value ? 'red' : '#616e7c')};
  opacity: ${props => (props.selectedLink === props.value ? '1' : '0.5')};
`
export const ContactHead = styled.p`
  color: ${props => (props.islight ? '#1e293b' : '  #d7dfe9')};
  font-weight: 500;
  font-size: 15px;
`
export const ContactPara = styled.p`
  color: ${props => (props.islight ? 'black' : '#606060')};
  font-weight: 600px;
  font-size: 15px;
`
