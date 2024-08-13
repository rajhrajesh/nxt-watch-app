import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const VideoImage = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const DetailsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileContainer = styled.div`
  margin-right: 12px;
`

export const Profile = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

export const AboutContainer = styled.div`
  width: 80%;
  margin-left: 10px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${props => (props.darkMode ? '#666' : '#333')};
`

export const ChannelNameViewCountAndPublishedStyling = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`
