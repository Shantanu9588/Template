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

  const sample_profile = {
    title: "Truck Grear",
    subtitle: "jillali@onechanneladmin.com"
  }

  const email_options = [
    {
      id: 1,
      email: "suchithkumar@onechanneladmin.com"
    }
  ]

  return (
    <div className="flex gap-[32px] p-4">
      <div className="flex flex-col gap-[16px] w-[20%]">
        <SimpleCard className="px-4">
          <Profile 
            title={sample_profile?.title}
            subtitle={sample_profile?.subtitle}
          />
        </SimpleCard>

        <SimpleCard className="py-4 flex items-center">
          {icons.map((icon, index) => (
            <>
            <div
              key={icon.id}
              className="flex flex-col items-center gap-[6px] py-2 w-[84px]"
            >
              {icon.icon()}
              <span className="text-blue-900 text-xs leading-[18px] font-normal">{icon.name}</span>
            </div>
            {index !== icons?.length - 1 && <div className="h-full w-px bg-blue-900-10 px-auto" />}
            </>
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
          <div className="h-px w-full bg-blue-900-10 my-3" />
          <div>
            <FormLabel title="Email" />
            <TextField />
          </div>
          <div className="h-px w-full bg-blue-900-10 my-3" />
          <div>
            <FormLabel title="Phone Number" endIcon={() => <PlusIcon />} />
            <TextField />
          </div>
          <div className="h-px w-full bg-blue-900-10 my-3" />
          <div>
            <FormLabel title="Contact Owner" />
            <Select 
              options={email_options}
              title_key="email"
            />
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
