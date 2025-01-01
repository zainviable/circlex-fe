import images from "../../lib/image";
// import Heading from "../../component/Heading/heading"; // Import the Heading component
// import Title from "antd/es/typography/Title";
import CommonHeading from "../Common/CommonHeading";
interface DashboardCardProps {
  usersCount?: number;
  cardWidth?: string;
  color?: string;
  imageSrc?: string;
  title?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  usersCount = 200,
  cardWidth = "w-full", // Default width is full (100%) for mobile
  color = "text-[rgba(23,106,69,1)]",
  imageSrc = images.profileUser, // default image if no prop is passed
  title = "Total Users", // default title if no prop is passed
}) => {
  return (
    <div
      className={`${cardWidth} gap-4 flex bg-white flex-col items-center rounded-xl py-[29px] px-[31px]`}
      style={{ boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)" }}
    >
      <img src={imageSrc} alt="profileUser" height={40} width={40} />
      {/* Using the Heading component */}
      <CommonHeading
        text={title}
        color="#000"
        fontSize="20px"
        fontWeight="700"
        lineHeight="24px"
      />
      <CommonHeading
        text={usersCount}
        color="rgba(23, 106, 69, 1)"
        fontSize="32px"
        fontWeight="600"
        lineHeight="24px"
      />
    </div>
  );
};

// Example data for multiple cards
const cardData = [
  {
    usersCount: 200,
    cardWidth: "w-full md:w-[49%] lg:w-[23%]", // Responsive width
    color: "text-[rgba(23,106,69,1)]",
    imageSrc: images.profileUser,
    title: "Active Users",
  },
  {
    usersCount: 300,
    cardWidth: "w-full md:w-[49%] lg:w-[23%]", // Responsive width
    color: "text-blue-500",
    imageSrc: images.profileUser,
    title: "New Users",
  },
  {
    usersCount: 400,
    cardWidth: "w-full md:w-[49%] lg:w-[23%]", // Responsive width
    color: "text-red-500",
    imageSrc: images.profileUser,
    title: "Inactive Users",
  },
  {
    usersCount: 500,
    cardWidth: "w-full md:w-[49%] lg:w-[23%]", // Responsive width
    color: "text-yellow-500",
    imageSrc: images.profileUser,
    title: "Total Users",
  },
];

const Dashboard = () => {
  return (
    <div className="flex gap-y-4 flex-wrap dashboard-wrapper justify-between pt-[50px] pb-[30px]">
      {cardData.map((data, index) => (
        <DashboardCard
          key={index}
          usersCount={data.usersCount}
          cardWidth={data.cardWidth}
          color={data.color}
          imageSrc={data.imageSrc}
          title={data.title}
        />
      ))}
    </div>
  );
};

export default Dashboard;
