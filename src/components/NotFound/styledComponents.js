import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
`
export const NotFoundContentContainer = styled.div`
  min-height: 100px;
  margin-top: 81px;
  width: 87%;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotFoundText = styled.h1`
font-size: 34px;
font-family: "Roboto";`

export const SorryMsg = styled.p`
font-size: 18px;
font-family: "Roboto";
`

export const NotFoundImage = styled.img`
  width: 30%;
`
