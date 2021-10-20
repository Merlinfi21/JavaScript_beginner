function Project(props) {
    function cancelHandler() {
        props.onCancel();
    }
  
    function confirmHandler() {
        props.onConfirm();
    }
  
    return (
      <div className="modal">
        <p>Are u sure?</p>
        <buton className="btn btn--alt" onClick={cancelHandler}>
          Cancel
        </buton>
        <button className="btn" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Project;
  