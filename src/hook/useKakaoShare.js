import { useEffect } from 'react';

const useKakaoShare = (linkUrl) => {
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
        imageUrl: 'https://cdn.pixabay.com/photo/2014/12/22/00/07/snowman-576847_960_720.jpg',
        link: {
          mobileWebUrl: linkUrl,
          webUrl: linkUrl,
        },
      },
      itemContent: {
        profileText: '눈사친',
        profileImageUrl: 'https://cdn.pixabay.com/photo/2014/12/22/00/07/snowman-576847_960_720.jpg',
        titleImageUrl: 'https://cdn.pixabay.com/photo/2014/12/22/00/07/snowman-576847_960_720.jpg',
        titleImageText: '눈사람TEST',
        titleImageCategory: 'snow',
        items: [
          {
            item: '눈사람',
            itemOp: '재밌다',
          },
        ],
        sum: '과연 결과는?',
        sumOp: '두근두근',
      },
      social: {
        likeCount: 100,
        commentCount: 20,
        sharedCount: 5000,
      },
      buttons: [
        {
          title: '결과보러가기',
          link: {
            mobileWebUrl: linkUrl,
            webUrl: linkUrl,
          },
        },
      ],
    });
  };

  return { shareToKakao };
};

export default useKakaoShare;
