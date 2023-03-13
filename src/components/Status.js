function Status(props) {
    return (
        <div className="orders-list">
          <div className="status">
            <img src="" />
            {props.data.id}
            {props.data.products[0].name}
          </div>
        </div>
    );
  }
  
  export default Status;