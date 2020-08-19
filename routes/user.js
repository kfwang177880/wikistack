const { Router } = require('express');
const { Page, User } = require('../models')
const { userList, userPages } = require('../views')

app.use('user', userRouter);
