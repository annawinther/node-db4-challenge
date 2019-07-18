const express = require('express');

const db = require('./data/dbQueries');

const server = express();

server.use(express.json());
// server.use('/api/recipes/', RecipesRouter);

server.get('/', async (req, res) => {
    try {
      const recipes = await db.getShoppingList(req.params.id);
      res.json(recipes);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get schemes' });
    }
  });
  
//   server.get('/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const scheme = await Schemes.findById(id);
  
//       if (scheme) {
//         res.json(scheme);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to get schemes' });
//     }
//   });
  
//   server.get('/:id/steps', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const steps = await Schemes.findSteps(id);
  
//       if (steps.length) {
//         res.json(steps);
//       } else {
//         res.status(404).json({ message: 'Could not find steps for given scheme' })
//       }
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to get steps' });
//     }
//   });
  
//   server.post('/', async (req, res) => {
//     const schemeData = req.body;
  
//     try {
//       const scheme = await Schemes.add(schemeData);
//       res.status(201).json(scheme);
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to create new scheme' });
//     }
//   });
  
//   server.post('/:id/steps', async (req, res) => {
//     const stepData = req.body;
//     const { id } = req.params; 
  
//     try {
//       const scheme = await Schemes.findById(id);
  
//       if (scheme) {
//         const step = await Schemes.addStep(stepData, id);
//         res.status(201).json(step);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to create new step' });
//     }
//   });
  
//   server.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
  
//     try {
//       const scheme = await Schemes.findById(id);;
  
//       if (scheme) {
//         const updatedScheme = await Schemes.update(changes, id);
//         res.json(updatedScheme);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to update scheme' });
//     }
//   });
  
//   server.delete('/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const deleted = await Schemes.remove(id);
  
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to delete scheme' });
//     }
//   });

module.exports = server;