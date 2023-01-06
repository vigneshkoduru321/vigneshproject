import styled from 'styled-components'

export const DivLoginForm = styled.form`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 400px;
  width: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.islight ? 'black' : 'white')};
  border-style: solid;
  border-width: 1px;
`

export const Label = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 600;
`
export const LabelShow = styled.label`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-weight: 500;
`
