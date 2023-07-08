const express = require('express');
const router = require('router');
const { auth } = require('../middleware/auth');
const { all } = require('./users');

// api/employees
router.get('/', auth, all);
// api/employees/:id
router.get('/:id', auth, () => console.log('get one empl'));
// api/employees/add
router.post('/add', auth, () => console.log('add empl'));
// api/employees/remove/:id
router.post('/remove/:id', auth, () => console.log('del empl'));
// api/employees/edit/:id
router.put('/edit/:id', auth, () => console.log('edit empl'));

module.exports = router;