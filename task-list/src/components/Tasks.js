import "../css/styles.css";
import classes from "../css/Dropdown.module.css";

const Tasks = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div className="box">
      <h1>Tasks!</h1>
      <form class="item" action="/" method="post">
        <input
          type="text"
          name="newItem"
          placeholder="Task Name"
          autocomplete="off"
          value="Buy protein"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Task Description"
          rows="4"
          cols="50"
          value="Buy protein powder from Muscleblaze."
        />
        <input type="text" name="date" value={`${today}`} />
        <input type="text" name="progress" value="Inprogress" />
        <div className={classes.dropdown}>
          <button className={classes.dropbtn}>Options</button>
          <div className={classes.dropdown_content}>
            <a className={classes.dropdown_content_a} >
              <button name="edit">
                <i class="fas fa-edit"></i>
              </button>
            </a>
            <a className={classes.dropdown_content_a}>
              <button name="edit">
                <i class="fas fa-trash-alt"></i>
              </button>
            </a>
          </div>
        </div>
      </form>
      <div className='center'>
        <button type="submit" name="list">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};
export default Tasks;
