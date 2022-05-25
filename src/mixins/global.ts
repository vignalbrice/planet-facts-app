import type { Data, DataType, DataImgType } from "@/types/data";
import { onMounted, ref, watch } from "vue";

export const useGlobalMixins = (data: Data) => {
  const current = ref<DataType>("overview");
  const img = ref<DataImgType>("planet");
  const imgReactive = ref<String | any>("");
  const firstImage = ref("");
  function setCurrentData({
    name,
    image,
  }: {
    name: DataType;
    image: DataImgType;
  }) {
    current.value = name;
    img.value = image;
  }
  onMounted(async () => {
    const res = `/${data.images[img.value]}`;
    imgReactive.value = res;
    firstImage.value = res;
  });
  watch(img, async (oldImg) => {
    const res = `/${data.images[oldImg]}`;
    imgReactive.value = res;
  });
  return {
    current,
    img,
    imgReactive,
    firstImage,
    data,
    setCurrentData,
  };
};
