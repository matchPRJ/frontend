import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindowF, InfoWindow, MarkerF } from '@react-google-maps/api';
import { carCenterData } from '../components/Data/CarCenterData';
import { gasData } from '../components/Data/gasData';
import { hospitalData } from '../components/Data/hospital';
import gasimg from '../img/gas.png'; 
import carcenterimg from '../img/carservice.png';
import hospitalimg from '../img/hospital.png';
import SiteLogo from '../components/common/SiteLogo';
import NavBar from '../components/common/NavBar';
import { Box, Button, Container, Grid } from '@mui/material';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
  lat: 37.5649867,
  lng: 126.985575
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
}

const MapPage=()=> {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  const [selectedHospitalMarker, setSelectedHospitalMarker] = React.useState<number | null>(null);
  const [selectedGasMarker, setSelectedGasMarker] = React.useState<number | null>(null);
  const [selectedCarCenterMarker, setSelectedCarCenterMarker] = React.useState<number | null>(null);

  const [selectedHospital, setSelectedHospital] = React.useState(false);
  const [selectedGas, setSelectedGas] = React.useState(false);
  const [selectedCarCenter, setSelectedCarCenter] = React.useState(false);

  return isLoaded ? (
    <>
    <SiteLogo/>
        <NavBar/>
        <Container maxWidth = "md" style={{ height: '50vh' }}>
            <Container maxWidth = "xs" sx={{mt:2, mb:2}}>
                <Box display="flex" justifyContent="space-between">
                    <Box m={1}>
                        <Button variant={selectedGas ? "contained" : "outlined" } onClick={() => {setSelectedGas(!selectedGas);}}>주유소</Button>
                    </Box>
                    <Box m={1}>
                        <Button variant={selectedCarCenter ? "contained" : "outlined" } onClick={() => {setSelectedCarCenter(!selectedCarCenter);}}>카센터</Button>
                    </Box>
                    <Box m={1}>
                        <Button variant={selectedHospital ? "contained" : "outlined" } onClick={() => {setSelectedHospital(!selectedHospital);}}>병원</Button>
                    </Box>
                </Box>
            </Container>

    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
        {selectedCarCenter && carCenterData.map((data, index)=>
            <MarkerF position={{lat : parseFloat(data.위도) , lng : parseFloat(data.경도)}} onClick={()=>{
                setSelectedCarCenterMarker(index);
                setSelectedGasMarker(null);
                setSelectedHospitalMarker(null);
            }} icon={{url: carcenterimg,
            scaledSize: new window.google.maps.Size(32, 32),
            }}>
                {selectedCarCenterMarker === index && <InfoWindowF
                    options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
                    onCloseClick={() => {
                        setSelectedCarCenterMarker(null);
                        }}
                    >
                        <div>
                            <h2>{data.자동차정비업체명}</h2>
                            <p>주소 : {data.소재지도로명주소}</p>
                            <p>운영 시간 : {data.운영시작시각} ~ {data.운영종료시각}</p>
                            <p>전화번호 : {data.전화번호}</p>
                        </div>
                    </InfoWindowF>
                    }
            </MarkerF>
        )}

        {selectedGas && gasData.map((data, index)=>
            <MarkerF position={{lat : data.Latitude , lng : data.Longitude}} onClick={()=>{
                setSelectedGasMarker(index);
                setSelectedCarCenterMarker(null);
                setSelectedHospitalMarker(null);
            }} icon={{url: gasimg,
            scaledSize: new window.google.maps.Size(32, 32),
            }}>
                {selectedGasMarker === index && <InfoWindowF
                    options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
                    onCloseClick={() => {
                        setSelectedGasMarker(null);
                        }}
                    >
                        <div>
                            <h2>{data.주유소명}</h2>
                            <p>주소 : {data.주소}</p>
                        </div>
                    </InfoWindowF>
                    }
            </MarkerF>
        )}

        {selectedHospital && hospitalData.map((data, index)=>
            <MarkerF position={{lat : parseFloat(data.wgs84lat) , lng : parseFloat(data.wgs84lon)}} onClick={()=>{
                setSelectedHospitalMarker(index);
                setSelectedCarCenterMarker(null);
                setSelectedGasMarker(null);
            }} icon={{url: hospitalimg,
            scaledSize: new window.google.maps.Size(32, 32),
            }}>
                {selectedHospitalMarker === index && <InfoWindowF
                    options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
                    onCloseClick={() => {
                        setSelectedHospitalMarker(null);
                        }}
                    >
                        <div>
                            <h2>{data.dutyname}</h2>
                            <p>주소 : {data.dutyaddr}</p>
                            <p>전화번호 : {data.dutytel1}</p>
                        </div>
                    </InfoWindowF>
                    }
            </MarkerF>
        )}
      
    </GoogleMap>
    </Container>
    </>
  ) : <></>
}

export default MapPage;