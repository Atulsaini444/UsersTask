import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Screen2 = () => {
  const navigate = useNavigate()
  const userData = useSelector((state) => state.userInfo.userInfo)
  const onBackClick = () => {
    navigate('/')
  }
  return (
    <div className='screen2Wrapper'>
      <div className='header'>
        <Text as='b' fontSize='2xl'>User List</Text>
        <Button colorScheme='blue' marginLeft='20px' onClick={onBackClick}>Back</Button>
      </div>
      {userData.length > 0 ? (
        <>
          {userData.map((user) => {
            return (
              <div className='mainUserWrapper'>
                <div className='imageContainer'>
                  <img src={user.photo} alt="Captured" />
                </div>
                <div>
                  <div className='textWrapper'>
                    <Text minWidth='110px' as='b' fontSize='xl' marginRight='10px'>Device ID :
                    </Text>
                    <Text fontSize='xl'>
                      {user.deviceid}
                    </Text>
                  </div>
                  <div className='textWrapper'>
                  <Text minWidth='100px' as='b' fontSize='xl' marginRight='10px'>Latitude :
                    </Text>
                    <Text fontSize='xl'>
                    {user.lat}
                    </Text>
                  </div>
                  <div className='textWrapper'>
                  <Text minWidth='100px' as='b' fontSize='xl' marginRight='10px'>Longitude : 
                    </Text>
                    <Text fontSize='xl'>
                    {user.log}
                    </Text>
                  </div>
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