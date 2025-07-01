import React, { useRef, useCallback } from "react";
import BagIcon from "../../../../../Icons/svgIcons/BagIcon";
import RefreshIcon from "../../../../../Icons/svgIcons/RefreshIcon";
import ClockIcon from "../../../../../Icons/svgIcons/ClockIcon";
import CareIcon from "../../../../../Icons/svgIcons/CareIcon";
import GrowthIcon from "../../../../../Icons/svgIcons/GrowthIcon";
import DropIcon from "../../../../../Icons/svgIcons/DropIcon";
import DatabaseIcon from "../../../../../Icons/svgIcons/DatabaseIcon";
import ClassifyIcon from "../../../../../Icons/svgIcons/ClassifyIcon";
import CelebrateIcon from "../../../../../Icons/svgIcons/CelebrateIcon";
import TruckIcon from "../../../../../Icons/svgIcons/TruckIcon";
import HistoryIcon from "../../../../../Icons/svgIcons/HistoryIcon";
import CertificateIcon from "../../../../../Icons/svgIcons/CertificateIcon";
import StopwatchIcon from "../../../../../Icons/svgIcons/StopwatchIcon";
import WalmartIcon from "../../../../../Icons/svgIcons/WalmartIcon";
import EbayIcon from "../../../../../Icons/svgIcons/EbayIcon";
import FacebookIcon from "../../../../../Icons/svgIcons/FacebookIcon";
import AmazonIcon from "../../../../../Icons/svgIcons/AmazonIcon";
import EtsyIcon from "../../../../../Icons/svgIcons/EtsyIcon";
import ChatIcon from "../../../../../Icons/svgIcons/ChatIcon";
import BackIcon from "../../../../../Icons/svgIcons/BackIcon";
import RightIcon from "../../../../../Icons/svgIcons/RightIcon";
import LeftIcon from "../../../../../Icons/svgIcons/LeftIcon";
import SimpleCard from "../../../../../Layouts/components/cards/SimpleCard";
import YearSelection from "../../../../../Layouts/components/formFields/YearSelection";
import Select from "../../../../../Layouts/components/formFields/Select";
import DonutChart from "../../../../../Layouts/components/charts/DonutChart";
import BarChart from "../../../../../Layouts/components/charts/BarChart";
import Table from "../../../../../Layouts/components/table/Table";
import Tabs from "../../../../../Layouts/components/formFields/Tabs";

const carousel_data = [
  {
    title: "Total Order",
    value: "123",
    growth: 25,
    icon: () => {
      return <BagIcon />;
    },
  },
  {
    title: "Total Taken",
    value: "123",
    drop: 25,
    icon: () => {
      return <CareIcon />;
    },
  },
  {
    title: "Total Revenue",
    value: "123",
    growth: 25,
    icon: () => {
      return <DatabaseIcon />;
    },
  },
  {
    title: "Pending Order",
    value: "$1234.99",
    growth: 25,
    icon: () => {
      return <ClockIcon />;
    },
  },
  {
    title: "Pending Returns",
    value: "$1234.99",
    growth: 25,
    icon: () => {
      return <RefreshIcon />;
    },
  },
];

const order_stats = [
  {
    title: "All",
    stat: "50",
    icon: () => <ClassifyIcon />,
  },
  {
    title: "New",
    stat: "50",
    icon: () => <CelebrateIcon />,
  },
  {
    title: "Pending",
    stat: "50",
    icon: () => <StopwatchIcon />,
  },
  {
    title: "Dispatched",
    stat: "50",
    icon: () => <TruckIcon />,
  },
  {
    title: "Delivered",
    stat: "123",
    icon: () => <CertificateIcon />,
  },
  {
    title: "Cancelled",
    stat: "50",
    icon: () => <HistoryIcon />,
  },
];

const orders = [
  {
    id: "415368",
    quantity: 4,
    product: "White Danim Tshit M...",
    image: "/assets/Images/t-shirt.png",
    channel: "Walmart",
    channelLogo: () => <WalmartIcon />,
    customer: "Harris Santana",
    customerAvatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    total: "$151.00",
    delivery: "Today",
  },
  {
    id: "275936",
    quantity: 1,
    product: "iPhone 15 pro max",
    image: "/assets/Images/phone.png",
    channel: "ebay",
    channelLogo: () => <EbayIcon />,
    customer: "Gabriella Golden",
    customerAvatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    total: "$400.00",
    delivery: "Today",
  },
  {
    id: "275063",
    quantity: 2,
    product: "David Beckham classic",
    image: "/assets/Images/dbc.png",
    channel: "facebook",
    channelLogo: () => <FacebookIcon />,
    customer: "Lilia Ponce",
    customerAvatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    total: "$167.00",
    delivery: "Tomorrow",
  },
  {
    id: "274778",
    quantity: 3,
    product: "Samsung i-20 series",
    image: "/assets/Images/sam_watch.png",
    channel: "amazon",
    channelLogo: () => <AmazonIcon />,
    customer: "Rehan Chase",
    customerAvatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    total: "$262.00",
    delivery: "Tomorrow",
  },
  {
    id: "638032",
    quantity: 5,
    product: "Nykaa Red lipstick",
    image: "/assets/Images/nykaa.png",
    channel: "Etsy",
    channelLogo: () => <EtsyIcon />,
    customer: "Maxim Bray",
    customerAvatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    total: "$319.00",
    delivery: "05/01/2023",
  },
];

const iconMap = {
  message_class: "bg-orange-400",
  order_class: "bg-red-400",
  reply_class: "bg-blue-900-10",
};

const ActivityItem = ({ iconType, user, action, target, time, nested }) => {
  const containerClass = nested
    ? "flex items-start gap-2 ml-6 mb-6"
    : "flex items-start gap-2 mb-3";

  return (
    <div className={containerClass}>
      <div
        className={`p-[2px] w-6 h-6 ${iconMap[iconType]} rounded-full flex items-center justify-center`}
      >
        {iconType === "reply_class" ? <BackIcon /> : <ChatIcon />}
      </div>
      <div className="text-sm text-gray-700">
        <span className="text-semi-base font-normal text-purple-900 leading-[22px]">
          {user}
        </span>{" "}
        <span className="text-semi-base font-normal text-blue-900-85 leading-[22px]">
          {action}
        </span>{" "}
        {target && (
          <span className="text-purple-900 text-semi-base font-normal leading-[22px]">
            {target}
          </span>
        )}{" "}
        <span className="text-semi-base font-normal text-blue-900-85 leading-[22px]">
          • {time}
        </span>
      </div>
    </div>
  );
};

const ActivitySection = ({ date, items }) => (
  <div className="mb-5">
    <p className="text-xs font-medium text-blue-900 uppercase mb-2">{date}</p>
    <div className="space-y-2">
      {items.map((item, idx) => (
        <ActivityItem key={idx} {...item} />
      ))}
    </div>
  </div>
);

const RecentActivities = ({ activities }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-b-xl">
      <div className="space-y-6 h-[314px] overflow-y-scroll">
        {activities.map((section, idx) => (
          <ActivitySection
            key={idx}
            date={section.date}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

const activityData = [
  {
    date: "Today",
    items: [
      {
        iconType: "message_class",
        user: "Christian Wood",
        action: "Sent Message to",
        target: "Nikita Houston",
        time: "1 min ago",
      },
      {
        iconType: "reply_class",
        user: "Nikita Houston",
        action: "Replay your message",
        target: '"Hello"',
        time: "1 min ago",
        nested: true,
      },
      {
        iconType: "order_class",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Ebay",
        time: "1 min ago",
      },
      {
        iconType: "reply_class",
        user: "Rohan Walker",
        action: "Replay your message",
        target: "Ebay",
        time: "1 min ago",
        nested: true,
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        iconType: "order_class",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Amazon",
        time: "12:30PM",
      },
    ],
  },
  {
    date: "25 May 2024",
    items: [
      {
        iconType: "order_class",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
      },
    ],
  },
  {
    date: "24 May 2024",
    items: [
      {
        iconType: "order_class",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
      },
    ],
  },
  {
    date: "23 May 2024",
    items: [
      {
        iconType: "order_class",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
      },
    ],
  },
  {
    date: "22 May 2024",
    items: [
      {
        iconType: "order_class",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
      },
    ],
  },
];

const revenue_tabs = [
  {
    id: 1,
    name: "Revenue",
  },
  {
    id: 2,
    name: "Orders",
  },
  {
    id: 3,
    name: "Customers",
  },
];

const activity_tabs = [
  {
    id: 1,
    name: "Message",
  },
  {
    id: 2,
    name: "Emails",
  },
];

const Dashboard = () => {
  const scrollRef = useRef(null);

  const [selected_revenue_tab, setSelected_revenue_tab] = React.useState(
    revenue_tabs[0]
  );

  const [message_tab, setMessage_tab] = React.useState(activity_tabs[0]);

  const handleRevenueTabChange = useCallback(
    (tab) => {
      setSelected_revenue_tab(tab);
    },
    [selected_revenue_tab]
  );

  const handleMessageTabChange = useCallback(
    (tab) => {
      setMessage_tab(tab);
    },
    [message_tab]
  );

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-4 flex flex-col gap-[16px]">
      <div className="relative">
        {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-[-12px] top-1/2 border border-blue-900-10 -translate-y-1/2 z-10 bg-white p-1 shadow rounded-full cursor-pointer"
      >
        <LeftIcon />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-[-12px] border border-blue-900-10 top-1/2 -translate-y-1/2 z-10 bg-white p-1 shadow rounded-full cursor-pointer"
      >
        <RightIcon />
      </button>

      <div ref={scrollRef} className="flex gap-[16px] no-scrollbar overflow-x-auto">
        {carousel_data.map((item, index) => {
          return (
            <SimpleCard className="!p-0 !min-w-[277px]" key={index}>
              <div className="flex flex-col">
                <div className="p-5 flex items-center gap-[16px]">
                  <div
                    className="w-[54px] h-[54px] rounded-xl bg-white flex items-center justify-center border-[2px] border-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(to bottom right, #f601c9, #ff9000)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "content-box, border-box",
                    }}
                  >
                    <div className="bg-white p-2 rounded-2xl">
                      {item.icon()}
                    </div>
                  </div>
                  {/* <div className="w-[54px] h-[54px] p-px rounded-2xl bg-gradient-to-r from-[#c421ff] via-[#ff2164] to-[#ff9b21]">
                    <div className="bg-white p-2 rounded-2xl">
                      {item.icon()}
                    </div>
                  </div> */}
                  <div>
                    <h3 className="text-xs font-medium text-blue-900-85">
                      {item.title}
                    </h3>
                    <p className="text-[22px] font-semibold text-blue-900">
                      {item.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-blue-900-10 px-5 py-3">
                  <div className="flex items-center gap-2">
                    {item.growth ? <GrowthIcon /> : <DropIcon />}
                    <span className="text-xs font-semibold text-green-600 leading-[18px]">
                      {item.growth ? item?.growth : item?.drop}%
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-blue-900-85 leading-[18px]">
                      From The Last Month
                    </span>
                  </div>
                </div>
              </div>
            </SimpleCard>
          );
        })}
      </div>
      </div>
     

      <div className="flex gap-[16px] w-full">
        <SimpleCard
          card_title="Order Status"
          title_className="text-semi-base font-semibold"
          className="bg-grey-100 !p-0 w-2/4"
          end_section={() => {
            return (
              <div className="flex items-center gap-[16px]">
                <Select />
                <YearSelection />
              </div>
            );
          }}
          header_className="border-b border-blue-900-10 bg-gray-100 rounded-t-xl px-4 py-3"
        >
          <div className="flex items-center bg-gray-100 rounded-b-xl">
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 rounded-xl overflow-hidden">
              {order_stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[8px] px-5 py-8"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    {item.icon()}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      {item.title}
                    </div>
                    <div className="text-2xl font-semibold">{item.stat}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-10">
              <DonutChart />
            </div>
          </div>
        </SimpleCard>
        <SimpleCard
          card_title="Recent Activities"
          title_className="text-semi-base font-semibold"
          className="bg-grey-100 !p-0 w-2/4"
          header_className="border-b border-blue-900-10 px-4 py-3 "
          end_section={() => {
            return (
              <Tabs
                tab_list={activity_tabs}
                parent_className="inline-flex bg-[#f7f9fa] border border-gray-200 rounded-xl p-1 gap-[4px]"
                tab_className="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200"
                active_className="bg-white text-slate-800 shadow"
                inactive_className="text-slate-600 hover:bg-white hover:shadow"
                active_tab={message_tab}
                onChange={handleMessageTabChange}
              />
            );
          }}
        >
          <RecentActivities activities={activityData} />
        </SimpleCard>
      </div>

      <SimpleCard
        className="!p-0"
        header_className="border-b border-blue-900-10 px-4 py-3"
        card_title="Recent Orders"
      >
        <Table data={orders} />
      </SimpleCard>

      <SimpleCard
        className="!p-0"
        header_className="border-b border-blue-900-10 px-4 py-3"
        end_section={() => {
          return (
            <div className="flex items-center gap-[16px]">
              <Select />
              <YearSelection />
            </div>
          );
        }}
        card_title={() => (
          <Tabs
            tab_list={revenue_tabs}
            parent_className="inline-flex bg-[#f7f9fa] border border-gray-200 rounded-xl p-1 gap-[4px]"
            tab_className="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200"
            active_className="bg-white text-slate-800 shadow"
            inactive_className="text-slate-600 hover:bg-white hover:shadow"
            active_tab={selected_revenue_tab}
            onChange={handleRevenueTabChange}
          />
        )}
      >
        <BarChart />
      </SimpleCard>
    </div>
  );
};

export default Dashboard;
