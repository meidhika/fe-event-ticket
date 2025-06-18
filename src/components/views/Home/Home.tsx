import { Skeleton } from "@nextui-org/react";
// import HomeEventList from "./HomeEventList";
import HomeSlider from "./HomeSlider";
import useHome from "./useHome";
import Image from "next/image";
// import HomeCategoryList from "./HomeCategoryList";

const Home = () => {
  const {
    dataBanners,
    isLoadingBanners,
    dataFeaturedEvents,
    isLoadingFeaturedEvents,
    dataLatestEvents,
    isLoadingLatestEvents,
    dataCategories,
    isLoadingCategories,
  } = useHome();
  return (
    <div>
      <HomeSlider
        banners={dataBanners?.data}
        isLoadingBanners={isLoadingBanners}
      />
    </div>
  );
};

export default Home;
