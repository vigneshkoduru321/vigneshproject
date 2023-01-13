import styled from 'styled-components'

export const TitleTrendCard = styled.p`
  color: ${props => (props.islight ? '#334155' : 'white')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 10px;
`

export const ParaTrendCard = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 450;
  margin: 0px;
`

export const ParaTrendCardP = styled.p`
  color: ${props => (props.islight ? '#475569' : 'white')};
  font-family: 'Roboto';
  font-weight: 450;
  margin-left: 10px;
  font-size: 15px;
`
