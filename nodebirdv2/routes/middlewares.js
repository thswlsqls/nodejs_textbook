exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) { //passport가 req객체에 불린값을 반환하는 IsAuthenticated메서드를 추가한다.
      next();
    } else {
      res.status(403).send('로그인 필요');
    }
  };
  
  exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/');
    }
  };