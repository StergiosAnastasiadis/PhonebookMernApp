import React from "react";

const PersonSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="phonebook.jpg" alt="PhoneBook" />
            <span className="card-title">
              {props.person.firstName} {props.person.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {props.person.phone} -- Email: {props.person.email}
            </p>
          </div>
          <div className="card-action"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonSingle;
