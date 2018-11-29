import React from "react";
import c from "./WorkDetails.scss";
import Aux from "../../../hoc/Aux";

const WorkDetails = props => {
  return (
    <Aux>
      <div className={c.flexRow}>
        <div className={c.detailCard}>
          <p className={c.detailCard__title}>Role</p>
          <p>{props.details.role}</p>
        </div>

        <div className={c.detailCard}>
          <p className={c.detailCard__title}>Year</p>
          <p>{props.details.date_completed}</p>
        </div>

        <div className={c.detailCard}>
          <p className={c.detailCard__title}>Client</p>
          <p>{props.details.client}</p>
        </div>
      </div>

      <div className={c.flexRow}>
        <div className={c.detailCard}>
          <p className={c.detailCard__title}>Task</p>
          <p>{props.details.task}</p>
        </div>
      </div>
    </Aux>
  );
};

export default WorkDetails;
