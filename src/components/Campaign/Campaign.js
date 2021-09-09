import React, {useState,useEffect,useCallback } from "react";
import AddCampaign from "./AddCampaign";
import './Campaign.css';
import CampaignData from "./CampaignData";


const Campaign = (props) => {
    const [data, setdata] = useState([]);
    console.log("Entered Campaign", data);
    
    const fetchDataHandler = useCallback(async function () {
      try {
        const response = await fetch(
          "https://campaign-3ce5a-default-rtdb.firebaseio.com/campaign_data.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!!");
        }
        const transformeddata=[];
        const data = await response.json();
        for(let key in data) {
          console.log(key)
            transformeddata.push({
            id: key,
            name: data[key].name,
            status: data[key].status,
            date: data[key].date,
            method: data[key].method,
            media: data[key].media,
             } )}
        setdata(transformeddata);
      } catch (error) {
        alert(error);
      }
    }, []);


    useEffect(() => {
      fetchDataHandler();
    }, [fetchDataHandler]);
  
    const [addCampaign,setNewCampaign] = useState(false);
    
    const onAddCampaignHandler = () => {
        setNewCampaign(true);
    }

    const cancelCamapignHandler = (flag) => {
        setNewCampaign(flag);
    }

     async function addCamapignHandler(campaign_data) {
               const response = await fetch(
                 "https://campaign-3ce5a-default-rtdb.firebaseio.com/campaign_data.json",
                 {
                   method: "POST",
                   body: JSON.stringify(campaign_data),
                   headers: {
                     'Access-Control-Allow-Origin': '*',
                     "Content-Type": "application/json",
                   },
                 }
               );
               console.log(campaign_data);
               console.log(JSON.stringify(campaign_data));  
               const data = await response.json();
               console.log(data);
               if(response.ok)
               {
                setNewCampaign(false);
                alert("Added Campaign successfully");
               }
             } 
             
    return (
      <React.Fragment>
      <div className="container">
        <div className="row w-100 campaign mt-4 shadow text-center p-3">
              <div className="col-10 col-md-4">
                <p>
                  <i className="fas fa-bars"></i>
                  How are you doing today <span className="inder">Inder</span>
                  ?👋
                </p>
              </div>
              <div className="col-10 col-md-4 mb-4">
                <div className="card1">
                  <button className="btn btn-light mt-0">
                    Web Campaign <i className="fas fa-sort"></i>
                  </button>
                  <p>
                    Credits :<span className="inder"> 200 </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <i className="far fa-question-circle"></i>
                <i className="far fa-user-circle"></i>
              </div>
         </div>  
            <div className="row mt-4">
              <div className="col-12 col-md-6 second-line">
                <h1>Campaigns</h1>
              </div>

                <div className="col-12 col-md-6 mb-4 mt-2">
                  <i className="fas fa-sync-alt"></i>
                  <button
                    className="btn-camp btn btn-light"
                    onClick={onAddCampaignHandler}
                  >
                    + Create New Campaign
                  </button>
                  </div>
              </div>
                  {addCampaign && (
                    <AddCampaign
                      onAddCampaign={addCamapignHandler}
                      onClose={cancelCamapignHandler}
                    />
                  )}
            {<CampaignData items={data} key={data.id} />}
      </div>
    </React.Fragment>
    );
}
export default Campaign;