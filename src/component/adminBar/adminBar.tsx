import Images from "../../lib/image";
import NotificationBar from "./notificationBar";
function AdminBar() {
  return (
    <div className="flex items-center gap-[16px]">
      <img src={Images.notificationBing} alt="notificationBing" />
      <NotificationBar responsiveHidden={true} />
    </div>
  );
}
export default AdminBar;
