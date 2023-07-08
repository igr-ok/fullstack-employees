const express = require('express');
const router = require('router');
const { auth } = require('../middleware/auth');

router.get('/', auth, () => console.log('get'));