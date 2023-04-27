const { validate: isUuid } = require('uuid');
const Form = require('../models/Form');

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
      return response.status(400).json({ error: 'Invalid ID.' });
    }

    try {
      const form = await Form.findById(id);
      response.form = form;
      if (!form) {
        return response.status(404).json({ error: "Form not found."})
      }
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }

    next();
  },
};