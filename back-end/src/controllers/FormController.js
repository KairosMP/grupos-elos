// Importando o model do formulário
const { v4: uuid } = require('uuid');
const Form = require('../models/Form');
const sendEmail = require('../email/email');

module.exports = {
  // Função para criar um novo formulário

  create: async (req, res) => {
    const { cpf, userName, fone, email, cep, publicPlace, number, neighborhood, city, state } =
      req.body;

    const formData = {
      _id: uuid(),
      cpf,
      userName,
      fone,
      email,
      cep,
      publicPlace,
      number,
      neighborhood,
      city,
      state,
    };

    Form.create(formData)
      .then(() => res.status(201).send({ message: 'Formulário criado com sucesso' }))
      .catch((err) => res.status(500).send({ message: 'Erro ao criar formulário', error: err }));

      sendEmail()
  },

  // Função para buscar todos os formulários

  findAll: async (req, res) => {
    try {
      // Buscando todos os formulários no banco de dados

      const allForms = await Form.find();

      // Enviando a resposta com todos os formulários encontrados

      res.status(200).json(allForms);
    } catch (error) {
      // Enviando a resposta com o erro caso não seja possível buscar os formulários

      res.status(500).json({ mensagem: 'Unable to fetch forms', error });
    }
  },

  // Função para buscar um formulário pelo ID

  findId: async (req, res) => {
    try {
      // Buscando o formulário pelo ID recebido nos parâmetros da requisição

      const form = await Form.findById(req.params.id);

      // Verificando se o formulário foi encontrado

      if (!form) {
        return res.status(404).json({ mensagem: 'Form not found' });
      }

      // Enviando a resposta com o formulário encontrado

      res.status(200).json(form);
    } catch (error) {
      // Enviando a resposta com o erro caso não seja possível buscar o formulário

      res.status(500).json({ mensagem: 'could not fetch the form', error });
    }
  },

  // Função para atualizar um formulário pelo ID

  update: async (req, res) => {
    try {
      // Atualizando o formulário pelo ID recebido nos parâmetros da requisição

      const formUpdate = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });

      // Verificando se o formulário foi encontrado

      if (!formUpdate) {
        return res.status(404).json({ mensagem: 'Form not found' });
      }

      // Enviando a resposta com o formulário atualizado

      res.status(200).json(formUpdate);
    } catch (error) {
      // Enviando a resposta com o erro caso não seja possível atualizar o formulário

      res.status(500).json({ mensagem: 'Unable to update form', error });
    }
  },

  // Função para excluir um formulário pelo ID

  delete: async (req, res) => {
    try {
      await Form.deleteOne({ _id: req.params.id });
      return res.status(200).json({ message: 'Form delete successfully!' });
    } catch (err) {
      return res.status(500).json({ mensagem: 'Unable to delete form', error: err });
    }
  },
};
