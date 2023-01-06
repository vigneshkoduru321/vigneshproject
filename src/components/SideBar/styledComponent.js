import styled from 'styled-components'

export const DivSidebar = styled.div`
  display: flex;
  height: 580px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const LinkName = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600px;
  font-size: 20px;
`
export const ContactHead = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600px;
  font-size: 20px;
`
export const ContactPara = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600px;
  font-size: 15px;
`
