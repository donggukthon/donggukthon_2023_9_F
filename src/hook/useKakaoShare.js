// src/hooks/useKakaoShare.js
import { useEffect } from 'react';

const useKakaoShare = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('60eea66aec4b50f004184123112f0a72');
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareToKakao = () => {
    if (!window.Kakao) {
      console.error('Kakao instance is not loaded');
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '결과보러가기',
        description: '과연 나의 테스트 결과는 무엇일까?',
        imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      itemContent: {
        profileText: 'Kakao',
        profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageText: 'Cheese cake',
        titleImageCategory: 'Cake',
        items: [
          {
            item: 'Cake1',
            itemOp: '1000원',
          },
          {
            item: 'Cake2',
            itemOp: '2000원',
          },
          {
            item: 'Cake3',
            itemOp: '3000원',
          },
          {
            item: 'Cake4',
            itemOp: '4000원',
          },
          {
            item: 'Cake5',
            itemOp: '5000원',
          },
        ],
        sum: '총 결제금액',
        sumOp: '15000원',
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  return { shareToKakao };
};

export default useKakaoShare;
