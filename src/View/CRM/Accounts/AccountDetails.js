import React, { useCallback } from "react";
import Profile from "../../../Layouts/components/Profile";
import EmailIcon from "../../../Icons/svgIcons/EmailIcon";
import CallIcon from "../../../Icons/svgIcons/CallIcon";
import MessageIcon from "../../../Icons/svgIcons/MessageIcon";
import CalenderIcon from "../../../Icons/svgIcons/CalenderIcon";
import FormLabel from "../../../Layouts/components/formFields/FormLabel";
import TextField from "../../../Layouts/components/formFields/TextField";
import PlusIcon from "../../../Icons/svgIcons/PlusIcon";
import Select from "../../../Layouts/components/formFields/Select";
import Tabs from "../../../Layouts/components/formFields/Tabs";
import SimpleCard from "../../../Layouts/components/cards/SimpleCard";
import Dashboard from "./Tabs/Dashboard/Dashboard";

const icons = [
  {
    id: 1,
    name: "Email",
    icon: () => {
      return <EmailIcon />;
    },
  },
  {
    id: 2,
    name: "Call",
    icon: () => {
      return <CallIcon />;
    },
  },
  {
    id: 3,
    name: "Message",
    icon: () => {
      return <MessageIcon />;
    },
  },
  {
    id: 4,
    name: "Calender",
    icon: () => {
      return <CalenderIcon />;
    },
  },
];

const tabs = [
    {
      id: 1,
      name: "Dashboard",
      component: () => {
        return <Dashboard />
      },
    },
    {
      id: 2,
      name: "Orders",
      component: () => {},
    },
    {
      id: 3,
      name: "Address",
      component: () => {},
    },
    {
      id: 4,
      name: "Notes",
      component: () => {},
    },
    {
      id: 5,
      name: "Tasks",
      component: () => {},
    },
    {
      id: 6,
      name: "Contacts",
      component: () => {},
    },
    {
      id: 7,
      name: "Credit History",
      component: () => {},
    },
  ];


const AccountDetails = () => {
  const [active_tab, setActive_tab] = React.useState(tabs[0]);

  const handleTabChange = useCallback(
    (tab) => {
      setActive_tab(tab);
    },
    [active_tab]
  );

  return (
    <div className="flex gap-[32px]">
      <div className="flex flex-col gap-[16px] w-[20%]">
        <SimpleCard className="px-4">
          <Profile />
        </SimpleCard>

        <SimpleCard className="px-4 flex item">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col items-center gap-[6px] py-2"
            >
              <span className="text-blue-900 text-base">{icon.icon()}</span>
              <span className="text-blue-900 text-base">{icon.name}</span>
            </div>
          ))}
        </SimpleCard>

        <SimpleCard className="px-4 flex item">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col items-center gap-[6px] py-2"
            >
              <span className="text-blue-900 text-base">{icon.icon()}</span>
              <span className="text-blue-900 text-base">{icon.name}</span>
            </div>
          ))}
        </SimpleCard>

        <SimpleCard
          card_title="Business Details"
          className="px-4 flex flex-col"
        >
          <div>
            <FormLabel title="Account Name" />
            <TextField />
          </div>

          <div>
            <FormLabel title="Email" />
            <TextField />
          </div>

          <div>
            <FormLabel title="Phone Number" endIcon={() => <PlusIcon />} />
            <TextField />
          </div>

          <div>
            <FormLabel title="Contact Owner" />
            <Select />
          </div>
        </SimpleCard>
      </div>

      <div className="w-[80%]">
        <Tabs tab_list={tabs} active_tab={active_tab} onChange={handleTabChange} />
        <div className="bg-white min-h-full">{active_tab?.component()}</div>
      </div>
    </div>
  );
};

export default AccountDetails;
