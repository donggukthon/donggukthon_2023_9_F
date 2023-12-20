// src/components/KakaoShareButton.js
import React from 'react';
import styled from 'styled-components';
import useKakaoShare from '../../hook/useKakaoShare'; // 경로는 실제 프로젝트 구조에 맞게 조정

const ShareButton = styled.button`
cursor: pointer;
border: none;
padding: 0;
background-color: transparent;
position: absolute;
height: 1.67%;
width: 120px;
top: 10.43%;
right: 17.3%;
bottom: 11.9%;
left: 1%;
border-radius: var(--br-8xs);
background: linear-gradient(213.37deg, #fff, #fff 0.01%, #CDDCFF,#CDDCFF);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(4px);
mix-blend-mode: normal;
`;

const KakaoShareButton = () => {
  const { shareToKakao } = useKakaoShare();

  return (
    <ShareButton onClick={shareToKakao}>SNS로 공유하기</ShareButton>
  );
};

export default KakaoShareButton;
