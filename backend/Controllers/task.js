const Task = require("../models/task");

const createTask = (req, res) =>  {
    Task.create(req.body, function (err, data) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(data);
    });
  console.log("successfully saved the task");
}

const updateTask = (req, res) => {
    Task.findByIdAndUpdate({_id: req.params._id}, {
        $set: req.body
      },{new:true}, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data)
          console.log('Data updated successfully')
        }
      })
}

const getAllTask = (req, res) => {
    const currentPage = +req.query.currentpage;
    const pageSize = +req.query.pagesize;
    const options = {
      page: currentPage,
      limit: pageSize
    }
    Task.paginate({}, options).then((result) =>{
        res.send({
          totalitems : result.totalDocs,
          list: result.docs,
          query: req.query
        })
      });
}

const getOneTask = (req,res) => {
    Task.findById({_id: req.params._id}, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
}

const deleteTask = (req,res) => {
    Task.findByIdAndRemove({_id: req.params._id}, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          })
        }
      })
}







module.exports.createTask = createTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;
module.exports.getOneTask = getOneTask;
module.exports.getAllTask = getAllTask;
