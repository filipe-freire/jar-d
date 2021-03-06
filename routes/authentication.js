'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const router = new Router();

router.post('/sign-up', (req, res, next) => {
  const { name, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then(hash => {
      return User.create({
        name,
        email,
        passwordHash: hash
      });
    })
    .then(user => {
      req.session.user = user._id;
      res.json({
        user: {
          name: user.name,
          email: user.email,
          id: user._id
        }
      });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then(document => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = user._id;
        const { _id, name } = user;
        res.json({
          user: {
            id: _id,
            name: name,
            email: email
          }
        });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch(error => {
      next(error);
    });
});

router.post('/sign-out', (req, res) => {
  req.session.destroy();
  res.json({});
});

router.get('/me', (req, res) => {
  if (req.user) {
    const { name, email, _id } = req.user;
    const user = {
      id: _id,
      name,
      email
    };
    res.json({ user });
  } else {
    res.json({});
  }
});

module.exports = router;
