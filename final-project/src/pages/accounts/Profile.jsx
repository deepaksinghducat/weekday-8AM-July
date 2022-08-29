import React, { Fragment } from "react";

const Profile = () => {
  return (
    <Fragment>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Profile
        </li>
        <li className="list-group-item">
          Name :  Jhon Doe
        </li>
        <li className="list-group-item">
          Email : jhon@example.com
        </li>
      </ul>
    </Fragment>
  );
};

export default Profile;
