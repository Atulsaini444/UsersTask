import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CameraComponent from './CameraComponent'
import DeviceIDComponent from './DeviceIDComponent'
import LocationComponent from './LocationComponent'
import { Button, Input, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { saveUserInfo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Screen1 = () => {
  const [capturedImage, setCapturedImage] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);
  const toast = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append('deviceid', deviceId);
      formData.append('lat', location.latitude);
      formData.append('log', location.longitude);
      formData.append('photo', capturedImage);
      const response = await axios.post('https://httpbin.org/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        credentials: 'include',
      });

      console.log(response)
      setLoading(false)
      const userData = { deviceid: deviceId, photo: capturedImage, lat: location.latitude, log: location.longitude };
      if (response.status=='200') {
        dispatch(saveUserInfo(userData)); // Save data using Redux
        toast({
          title: 'User information saved successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        toast({
          title: 'user information is not saved',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  };

  const onLatitudeChange = (e)=>{
    setLocation({...location, latitude: e.target.value})
  }
  const onLongitudeChange = (e)=>{
    setLocation({...location, longitude: e.target.value})
  }

  const onDeviceIDChange = (e) => {
    setDeviceId(e.target.value)
  }

  const handleSeeUser = () => {
    navigate('/users')
  }

  return (
    <div className='mainWrapper'>
      <div className='wrapper'>
        <Button colorScheme='blue' onClick={handleSeeUser}>See users</Button>
        <CameraComponent capturedImage={capturedImage} setCapturedImage={setCapturedImage} />
        <DeviceIDComponent setDeviceId={setDeviceId} />
        <LocationComponent location={location} setLocation={setLocation} />
        <Text marginTop='10px'>Device ID : </Text>
        <Input value={deviceId} onChange={onDeviceIDChange} />
        <Text>Latitude : </Text>
        <Input value={location.latitude} onChange={onLatitudeChange} />
        <Text>Longitude : </Text>
        <Input value={location.longitude} onChange={onLongitudeChange} />
        <Button colorScheme='blue' marginTop='10px' onClick={handleSubmit} isLoading = {loading}
          loadingText='Submitting' disabled={loading}>Save</Button>
      </div>
    </div>
  )
}

export default Screen1