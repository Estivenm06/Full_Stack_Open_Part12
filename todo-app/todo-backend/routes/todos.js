const express = require('express');
const {Todo} = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
    const todos = await Todo.find({})
    res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  try{
    const todo = req.todo
    todo 
    ? res.status(200).send(todo)
    : res.sendStatus(405); // Implemented :)
  }catch(e){
    console.log(e);
  }
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  try{
    const todo = req.todo
    const {text, done} = req.body
    if(!todo){
      res.sendStatus(405); // Implemented
    }
    if(!text){
      res.sendStatus(204); // Implemented
    }
    done
    ? done
    : todo.done
    const todoToUpdate = {
      text, done
    }
    const todoUpdated = await Todo.findByIdAndUpdate(todo.id, todoToUpdate)
    res.status(200).send(todoUpdated)
  }catch(e){
    console.log(e);
  }
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
