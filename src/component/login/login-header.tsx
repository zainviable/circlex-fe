import Images from "../../lib/image"; // Assuming your images are stored here

// Define types for props
interface LoginHeaderProps {
  backBtnVisible?: boolean; // Optional boolean for visibility of the back button
  backBtnLink?: string; // Optional string for the link of the back button
}

const LoginHeader: React.FC<LoginHeaderProps> = ({
  backBtnVisible = true,
  backBtnLink = "/",
}) => {
  return (
    <header className="bg-[#adecff] p-4">
      <div className="flex items-center">
        {/* Conditionally render Back Button */}
        {backBtnVisible && (
          <div className="back-btn w-[5%] flex">
            {/* Back Button Section (Left side) */}
            <a href={backBtnLink} className="flex items-center space-x-2">
              <img
                src={Images.backBtn} // This is the path to your back button image
                alt="Back"
                width={40} // Adjust width as per your design
                height={40} // Adjust height as per your design
              />
              <span className="text-[14px] text-[rgba(0, 145, 191, 1)]">
                Back
              </span>
            </a>
          </div>
        )}

        <div
          className={`login-logo flex justify-center ${
            backBtnVisible ? "w-[90%]" : "w-[100%]"
          }`}
        >
          {/* Centered Circle Icon Section */}
          <img
            src={Images.CircleIcon} // This is the path to your circle icon or image
            alt="Circle Icon"
            width={80} // Adjust width as per your design
            height={80} // Adjust height as per your design
          />
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
