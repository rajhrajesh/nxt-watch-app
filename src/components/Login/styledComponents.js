import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 36%;
  min-height: 61vh;
  border-radius: 11px;
  padding: 26px;
  box-shadow: 0px 0px 1px 1px #ffffff;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};

  @media screen and (max-width: 575px) {
    width: 81%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 61px;
  margin-bottom: 30px;
`

export const Logo = styled.img`
  width: 80%;
  max-width: 200px;
`

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 14px;
  margin-bottom: 8px;
`

export const CheckBoxLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const InputBox = styled.input`
  border-radius: 4px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  margin-top: 8px;
`

export const CheckBox = styled.input`
  margin-right: 10px;
`

export const LoginButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #574ce9;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`
