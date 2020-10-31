const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => { //isloggedin 미들웨어를 사용하여 isAuthenticated()의 반환값이 true여야만 다음 미들웨어로 넘어가도록 한다.
  res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
});

router.get('/join', isNotLoggedIn, (req, res) => { //isNotLoggedIn미들웨어를 사용하여 isAuthenticated()의 반환값이 false여야만 다음 미들웨어로 넘어가도록 한다.
  res.render('join', {
    title: '회원가입 - NodeBird',
    user: req.user,
    joinError: req.flash('joinError'),
  });
});

router.get('/', (req, res, next) => {
  res.render('main', {
    title: 'NodeBird',
    twits: [],
    user: req.user,
    loginError: req.flash('loginError'),
  });
});

module.exports = router;