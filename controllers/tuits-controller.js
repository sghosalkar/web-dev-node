import * as tuitsDao from "../models/tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const createdTuit = await tuitsDao.createTuit(newTuit);
  res.json(createdTuit);
}

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
  res.json(status);
}

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  const result = await tuitsDao.deleteTuit(tuitIdToDelete);
  res.json(result);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
