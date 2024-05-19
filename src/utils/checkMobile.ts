const CheckMobile = () => {
  try {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isMobile && isIOS) {
      return { isMobile: true, isIos: true };
    } else if (isMobile && isAndroid) {
      return { isMobile: true, isIos: false };
    } else {
      return { isMobile: false, isIos: false };
    }
  } catch (error) {
    return { isMobile: false, isIos: false };
  }
};

export default CheckMobile;
