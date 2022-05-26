import { computed } from "vue";
import { useScreen } from "vue-screen";

const useMedia = () => {
  const screen = useScreen();
  const media = computed(() => {
    return {
      isTablet: screen.width >= 767 && screen.width <= 1024,
      isMobile: screen.width >= 325 && screen.width <= 767,
    };
  });

  return media;
};

export default useMedia;
