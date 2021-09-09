import React  from "react";
import './CampaignData.css';
import Tablerow from "./Tablerow";

const CampaignData = (props) => {
  console.log("campaign_data",props.items);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Campaign Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created at</th>
                <th scope="col">Method</th>
                <th scope="col">Media</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.items.map((item) => (
                <tr>
                  <Tablerow items={item} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CampaignData);