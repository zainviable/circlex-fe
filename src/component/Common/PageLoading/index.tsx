import Spin from "antd/es/spin";

const PageLoading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spin />
    </div>
  );
};
export default PageLoading;
