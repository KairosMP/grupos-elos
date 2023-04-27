const express = require('express');
const router = express.Router();

const FormController = require('./controllers/FormController');
const FormMiddleware = require('./middlewares/FormMiddlewares');

const formUrl = '/Forms';

router.get(formUrl, FormController.findAll);
router.post(formUrl, FormController.create)

router.put(formUrl + "/:id", FormMiddleware.validateId, FormController.update)
router.delete(formUrl + "/:id", FormMiddleware.validateId, FormController.delete)
router.get(formUrl + "/:id", FormMiddleware.validateId, FormController.findId)

// Define a rota principal da aplicação
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Exporta as rotas para serem usadas pelo servidor
module.exports = router;
