import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";

/**
 * UserBox - Profile summary component
 * Maintained for modular consumption or standalone widget display.
 */
const UserBox = ({ userData, onEditPress, onDigitalIdPress, onSharePress, onCopyId, dutyStatus }) => {
  return (
    <>
      <ProfileHeader
        userData={userData}
        onEditPress={onEditPress}
        onDigitalIdPress={onDigitalIdPress}
        onSharePress={onSharePress}
        onCopyId={onCopyId}
        dutyStatus={dutyStatus}
      />
      <ProfileStats />
    </>
  );
};

export default UserBox;
