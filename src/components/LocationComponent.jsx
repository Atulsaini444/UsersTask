import { Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

const LocationComponent = ({setLocation}) => {
  const toast = useToast()
  const fetchLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      toast({
        title: 'Location fetched successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    } else {
      console.log('Geolocation is not available in this browser.');
    }
  };

  return (  
    <>
      <Button colorScheme='blue' marginLeft='10px' onClick={fetchLocation}>Fetch Location</Button>
    </>
  );
};

export default LocationComponent;