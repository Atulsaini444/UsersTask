import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Screen2 = () => {
  const navigate = useNavigate()
  const userData = useSelector((state) => state.userInfo.userInfo)
  console.log(userData  )
  const onBackClick = () => {
    navigate('/')
  }
  return (
    <div>
      <Button colorScheme='blue' onClick={onBackClick}>Back</Button>
      {userData ? (
        <>
          {userData.map((user) => {
            return (
              <div className='mainUserWrapper'>
                <div className='imageContainer'>
                  <img src={user.photo} alt="Captured" />
                </div>
                <div>
                  <Text fontSize='2xl'>Device ID : {user.deviceid}</Text>
                  <Text fontSize='2xl'>Latitude : {user.lat}</Text>
                  <Text fontSize='2xl'>Longitude : {user.log}</Text>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <div>No data to show</div>
      )}
    </div>
  )
}

export default Screen2