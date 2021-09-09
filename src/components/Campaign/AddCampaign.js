import Modal from "../Modal";
import React,{useEffect,useState} from "react";


const AddCampaign = (props) => {
  const [name,setNewName] = useState('');
  const [status,setNewStatus] = useState('');
  const [date,setNewDate] = useState('');
  const [method,setNewMethod] = useState('');
  const [media,setNewMedia] = useState('');
  
    const nameChangeHandler = event => {
      console.log("Change");
      setNewName("");
      setNewName(event.target.value);
    }

    const statusChangeHandler = event => {
        setNewStatus(event.target.value);
    }

    const dateChangeHandler = event => {
      setNewDate(event.target.value);
    }

    const methodChangeHandler = event => {
      setNewMethod(event.target.value);
    }

    const mediaChangeHandler = event => {
         setNewMedia(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
          const campaign_data = {
            /*name: nameRef.current.value,
          status: statusRef.current.value,
          date: dateRef.current.value,
          method: methodRef.current.value,
          media: mediaRef.current.value,*/
            name: name,
            status: status,
            date: date,
            method: method,
            media: media,
          };
          props.onAddCampaign(campaign_data);
    }
    //const nameVal = props.update ? props.item.name : name;
    const statusVal = props.update?props.item.status :status;
    const dateVal = props.update?props.item.date:date;
    const methodVal = props.update?props.item.method:method;
    const mediaVal = props.update?props.item.media:media;
    const oncancelHandler = () => {
        const flag=false;
        alert("Data will not be saved..!!");
        props.onClose(flag);
    }
    useEffect(()=>{
      if (props.update) {
        setNewName(props.item.name);
        setNewStatus(props.item.name);
        setNewDate(props.item.date);
        setNewMethod(props.item.method);
        setNewMedia(props.item.media);
        console.log("Update", props.update);
      }
     
    },[props.item,props.update]);
    
  return (
    <Modal>
      <form className="form-control" onSubmit={formSubmitHandler}>
        <label htmlFor="name">Campaign Name</label>
        <input className="form-control" type="text" id="name"  value={name} onChange={nameChangeHandler} />
        <label htmlFor="status">Status</label>
        <input className="form-control" type="text" id="status" onChange={statusChangeHandler} value={statusVal}/>
        <label htmlFor="date">Created at </label>
        <input className="form-control" type="date" id="date" value={dateVal} onChange={dateChangeHandler}/>
        <label htmlFor="method">Method</label>
        <input className="form-control" type="text" id="method"  value={methodVal} onChange={methodChangeHandler}/>
        <label htmlFor="media">Media</label>
        <input className="form-control" type="text" id="media"  value={mediaVal} onChange={mediaChangeHandler}/>
        <br></br>
        <button className="btn btn-primary">
          Add
        </button>
        <button className="btn btn-danger" onClick={oncancelHandler}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AddCampaign;
