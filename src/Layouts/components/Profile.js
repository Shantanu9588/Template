import React from "react";

const Profile = ({ title, subtitle, className = "" }) => {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="group rounded-full relative cursor-pointer">
        <div class="w-9 h-9 bg-purple-900 text-white rounded-full flex items-center justify-center font-semibold text-base">
          TG
        </div>
        <span className="w-full hidden bg-grey-100-30 text-center text-white absolute text-[9px] font-medium bottom-0 group-hover:block">
          Edit
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium text-blue-900">{title}</p>
        <p className="text-xs font-normal text-blue-900">{subtitle}</p>
      </div>
    </div>
  );
};

export default Profile;
