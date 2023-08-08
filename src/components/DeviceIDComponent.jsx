import { Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

const DeviceIDComponent = ({ setDeviceId }) => {
  const toast = useToast()
  const fetchDevices = async () => {
    const deviceList = await navigator.mediaDevices.enumerateDevices();
    const result = deviceList.filter((item) => item.deviceId.length > 0)
    setDeviceId(result[0].deviceId);
    toast({
      title: 'Device Id fetched successfully',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right'
    })
  };

  return (
    <>
      <Button colorScheme="blue" onClick={fetchDevices}>Fetch Device</Button>
    </>
  );
};

export default DeviceIDComponent;