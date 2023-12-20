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
        imageUrl: 'data:image/jpeg;base64,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',
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
