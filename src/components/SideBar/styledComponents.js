import styled from 'styled-components'

export const SideBarContainer = styled.ul`
  min-height: 100vh;
  width: 19%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
  list-style-type: none;
  margin-top: 0;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const OptionItem = styled.li`
  margin-bottom: 20px;
  font-size: 16px;
`

export const OptionsContainer = styled.div`
  margin-top: 100px;
  position: fixed;
`

export const ContactUsContainer = styled.div`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  height: 198px;
  bottom: 0;
  width: 16%;
  position: fixed;
`

export const ContactUsHeading = styled.p`
  font-size: 14px;
  padding-left: 12px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 51px;
  margin: 0 10px 0 15px;
`

export const SocialMediaIcon = styled.img`
  width: 36px;
  height: 36px;
`

export const ContactUsDescription = styled.p`
  font-size: 14px;
  padding-left: 12px;
`
