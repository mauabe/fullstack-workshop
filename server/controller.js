const { List, Todo } = require ('../database/models.js');

module.exports = {

  fetch: (req, res) => {
    console.log('in GET...');
    const { listName } = req.query;
    Todo.find({ list_name: listName })
      .then(todos => {
        res.status(200).send(todos)
      })
      .catch(error => {
        console.log('Error in GET', error)
      });
  },

  post: () => {
    console.log('in POST...');
    const{ listName, todo } = req.body;
    new Todo ({
      name: todo,
      list_name: listName
    })
      .save()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  delete: (req, res) => {
    console.log('in DELETE...');
    const { todo } =req.query;
    Todo.deleteOne({
      name: todo
    })
    .then(deleted => {
      res.status(202).send(deleted);
    })
    .catch(error => {
      console.log(error);
    });
  },
};