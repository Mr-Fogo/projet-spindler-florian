const { v4: uuidv4 } = require("uuid");
const { ACCESS_TOKEN_SECRET } = require("../config.js");
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require("../database");

const usersFilePath = path.join(__dirname, '../user.json');

// Fonction pour générer un token JWT
function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
}

// Fonction pour obtenir un utilisateur par login et mot de passe
function getUserByLoginAndPassword(login, password) {
  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  return users.find(user => user.login === login && user.password === password);
}

// Route pour la connexion
exports.login = (req, res) => {
  const { login, password } = req.body;

  let pattern = /^[A-Za-z0-9]{1,20}$/;
  if (pattern.test(login) && pattern.test(password)) {
    const utilisateur = getUserByLoginAndPassword(login, password);
    if (utilisateur) {
      const { id, name, firstname, login, email } = utilisateur;
      const user = { id, name, firstname, login, email };
      let accessToken = generateAccessToken(user);
      res.setHeader('Authorization', `Bearer ${accessToken}`);
      res.send(utilisateur);
    } else {
      res.status(404).send({
        message: "Utilisateur inexistant"
      });
    }
  } else {
    res.status(400).send({
      message: "Login ou mot de passe invalide"
    });
  }
};


  exports.register = (req, res) => {
    const { nom, prenom, email, login, password } = req.body;
    let pattern = /^[A-Za-z0-9]{1,20}$/;
    if (pattern.test(login) && pattern.test(password)) {
        const user = User.create({ name:nom, firstname:prenom, email:email, login:login, password:password });
        res.status(201).send(user);
    } else {
      res.status(400).send({
        message: "Login ou mot de passe invalide"
      });
    }
  };


// Route pour obtenir les informations de l'utilisateur
exports.userinfo = (req, res) => {
  const authorization = req.headers['authorization'];
  if (authorization) {
    const token = authorization.split(' ')[1];
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        res.status(401).send({
          message: "Token invalide"
        });
      } else {
        res.send(user);
      }
    });
  }     
}

  
