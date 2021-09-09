import React,{ Fragment,useState} from "react";
import axios from '../axiosInstance';
import './Tablerow.css';
import AddCampaign from "./AddCampaign";

const Tablerow = (props) => {
    const [updateState,setNewState] = useState(false);
    const [data,setNewData] = useState();
    const deleteHandler = async () => {
      console.log("deleteHandler");
      console.log("campaign_data2", props.items);
      console.log(props.items.id, props.items.name);
      axios.delete(`/campaign_data/${props.items.id}.json`)
      .then(response => alert("Deleted Sucessfully"));
    };

    const updateHandler = () =>  {
      console.log("Update Handler");
      setNewState(true);
      console.log("update",data);
    }

    const cancelUpdateHandler = (flag) => {
      setNewState(flag);
    };

    const addDataHandler = (data) => {
      setNewData(data);
      axios
        .put(`/campaign_data/${props.items.id}.json`, data)
        .then((response) => {
          console.log(response);
        });
      setNewState(false);
    }
    
    return (
      <Fragment >
        <th scope="row" className="data">{props.items.name}</th>
        <td className="data">{props.items.status}</td>
        <td className="data">{props.items.date}</td>
        <td className="data">{props.items.method}</td>
        <td className="data">{props.items.media}</td>
        <td className="data">
          <i className="fas fa-pen-square" onClick={updateHandler}></i>
          {updateState && <AddCampaign onAddCampaign={addDataHandler} onClose={cancelUpdateHandler} update={updateState} item={props.items}/>}
          <i className="far fa-trash-alt" onClick={deleteHandler}></i>
        </td>
      </Fragment>
    );
}
export default React.memo(Tablerow);