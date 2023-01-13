import styled from 'styled-components'

export const DivLoginForm = styled.form`
  background-color: ${props => (props.islight ? 'white' : '#383838')};
  height: 400px;
  width: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.islight ? '#1e293b' : 'white')};
  border-style: solid;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: 600;
  box-shadow: 0.5px 0.5px 10px ${props => (props.islight ? 'black' : 'white')};
`

export const Label = styled.p`
  color: ${props => (props.islight ? '#1e293b' : 'white')};
  font-weight: 600;
`
export const LabelShow = styled.label`
  color: ${props => (props.islight ? '#1e293b' : 'white')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 450;
`
