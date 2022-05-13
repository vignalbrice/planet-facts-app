import type Data from "@/types/data";
import type { DataImgType, DataType } from "@/types/data";
import { onMounted, ref, watch } from "vue";

export default (data: Data) => {
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
  onMounted(() => {
    import(`/${data.images[img.value]}`).then((res) => {
      imgReactive.value = res.default;
      firstImage.value = res.default;
    });
  });
  watch(img, (oldImg) => {
    import(`/${data.images[oldImg]}`).then((res) => {
      imgReactive.value = res.default;
    });
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
