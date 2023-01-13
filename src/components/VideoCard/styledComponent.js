import styled from 'styled-components'

export const Title = styled.p`
  color: ${props => (props.islight ? '#1e293b' : 'white')};
  font-size: 15px;
  font-weight: 600;
  margin: 8px;
`
export const Views = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 12px;
  font-weight: 450;
  margin-right: 15px;
  margin: 5px;
`
export const Pub = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-size: 12px;
  font-weight: 450;
  margin: 5px;
`
