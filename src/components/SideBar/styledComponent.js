import styled from 'styled-components'

export const DivSidebar = styled.div`
  display: flex;
  height: 580px;
  width: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto';
`
export const LinkName = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 550;
  font-size: 16px;
  color: ${props => (props.path === props.valuePath ? '#e00707' : '#616e7c')};
  opacity: ${props => (props.path === props.valuePath ? '1' : '0.5')};
`
export const ContactHead = styled.p`
  color: ${props => (props.islight ? '#1e293b' : '  #d7dfe9')};
  font-weight: 600;
  font-size: 15px;
`
export const ContactPara = styled.p`
  color: ${props => (props.islight ? '#1e293b' : '#606060')};
  font-weight: 400px;
  font-size: 12px;
`
