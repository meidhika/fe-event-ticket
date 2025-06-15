import DashboardLayout from "@/components/layouts/DashboardLayout";
import Banner from "@/components/views/Admin/Banner";
const AdminBannerPage = () => {
  return (
    <DashboardLayout
      title="Banner"
      description="List of all Banners, create new Banner, and manage existing banners"
      type="admin"
    >
      <Banner />
    </DashboardLayout>
  );
};

export default AdminBannerPage;
