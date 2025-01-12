import { useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';
import mapImage from '@/assets/images/rough_map.jpeg'

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;
  const [showMapImage, setShowMapImage] = useState(false);

  const handleShowMapImage = () => {
    setShowMapImage(!showMapImage);
  };

  return (
    <div>
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>네이버 지도</Button>
      <Button onClick={() => window.open(kakaoMap)}>카카오맵</Button>
      <Button onClick={handleShowMapImage}>약도 보기</Button>
    </MapButtonWrapper>
    {showMapImage && <MapImage src={mapImage} alt="Map" />}
    </div>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const MapImage = styled.img`
  display: block;
  margin: 16px auto;
  max-width: 100%;
  height: auto;
`;
