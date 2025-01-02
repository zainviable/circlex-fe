"use client";
import React, { useState } from "react";
import { Table, Button, Space, Checkbox, Pagination } from "antd";
import Images from "../../lib/image";

// Define the columns of the table
const columns = [
  {
    title: "",
    dataIndex: "checkbox",
    render: () => <Checkbox />,
    width: "5%",
  },
  {
    title: "USER",
    dataIndex: "user",
    render: (text: string, record: any) => (
      <div className="flex items-center">
        <img
          src={record.image}
          alt="User"
          className="w-8 h-8 rounded-full mr-3"
        />
        {text}
      </div>
    ),
    sorter: (a: any, b: any) => a.user.localeCompare(b.user),
  },
  {
    title: "USER TYPE",
    dataIndex: "userType",
    sorter: (a: any, b: any) => a.userType.localeCompare(b.userType),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    sorter: (a: any, b: any) => a.email.localeCompare(b.email),
    onHeaderCell: () => ({
      className: "", // No class for header
    }),
    onCell: () => ({
      className: "emailTd", // Class applied to td (body cells)
    }),
  },
  {
    title: "DATE",
    dataIndex: "date",
    sorter: (a: any, b: any) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
  {
    title: "VIEW",
    dataIndex: "view",
    render: () => (
      <Button
        className="table-button px-[20px] py-[15px] flex items-center"
        type="link"
        style={{
          color: "rgba(49, 55, 74, 1)",
          fontWeight: 600,
          borderColor: "rgba(49, 55, 74, 1)",
        }}
      >
        <img src={Images.Eye || ""} alt="View" height={16} width={16} />
        View
      </Button>
    ),
  },
  {
    title: "ACTION",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button
          type="primary"
          style={{
            backgroundColor: "rgba(217, 251, 208, 1)",
            borderColor: "rgba(217, 251, 208, 1)",
            color: "rgba(28, 108, 9, 1)",
          }}
        >
          Approve
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "rgba(255, 224, 219, 1)",
            borderColor: "rgba(255, 224, 219, 1)",
            color: "rgba(185, 26, 2, 1)",
          }}
        >
          Decline
        </Button>
      </Space>
    ),
  },
];

// Handle approve and decline logic
const handleApprove = () => {
  console.log("Approve:");
};

const handleDecline = () => {
  console.log("Decline:");
};

// Data for the table rows
const data = [
  {
    key: "1",
    user: "Carry Anna",
    userType: "Health Expert",
    email: "annac34@gmail.com",
    date: "Dec 12, 12:56 PM",
    image: Images.profileUser, // User image
  },
  {
    key: "2",
    user: "Milind Mikuja",
    userType: "Health Organisation",
    email: "mimiku@yahoo.com",
    date: "Dec 12, 12:56 PM",
    image: Images.profileUser, // User image
  },
  {
    key: "3",
    user: "Stanly Drinkwater",
    userType: "Health Expert",
    email: "stnlwasser@hotmail.com",
    date: "Dec 12, 12:56 PM",
    image: Images.profileUser, // User image
  },
  {
    key: "4",
    user: "Josef Stravinsky",
    userType: "Health Organisation",
    email: "Josefsky@sni.it",
    date: "Dec 12, 12:56 PM",
    image: Images.profileUser, // User image
  },
  {
    key: "5",
    user: "Igor Borvibson",
    userType: "Health Expert",
    email: "andersonory@netflix.chill",
    date: "Dec 12, 12:56 PM",
    image: Images.profileUser, // User image
  },
];

const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Table
        className="dashboardTable overflow-x-auto mb-[20px]"
        columns={columns}
        dataSource={data}
        rowClassName="table-row"
        pagination={false}
      />
      <div className="pagination-parent">
        <Pagination
          total={data.length}
          showSizeChanger={false}
          defaultPageSize={5}
          current={currentPage}
          className="text-right py-[10px]"
          onChange={setCurrentPage}
          showTotal={(total, range) => (
            <span>
              <b>
                {range[0]} to {range[1]}
              </b>{" "}
              items of <b>{total}</b>
            </span>
          )}
        />
      </div>
    </>
  );
};

export default UserTable;
