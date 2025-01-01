import Image from "next/image";
import Images from "@/app/lib/Images";
function sessionBox() {
  return (
    <>
      <div>
        <div>
          <Image src={Images.sessionImage} alt="sessionImage" />
        </div>
      </div>
    </>
  );
}
export default sessionBox;
