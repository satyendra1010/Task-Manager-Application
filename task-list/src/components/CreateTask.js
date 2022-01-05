const CreateTask = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div>
      <div className="box" id="heading">
        <h1>Tasks</h1>
      </div>
      <div className="box">
        <form class="item" action="/" method="post">
          <input
            type="text"
            name="newItem"
            placeholder="Task Name"
            autocomplete="off"
          />
          <textarea
            type="text"
            name="description"
            placeholder="Task Description"
            rows="4"
            cols="50"
          />
          <input type="date" name="date" />
          <input type="text" name="progress" value="New Task" />
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
