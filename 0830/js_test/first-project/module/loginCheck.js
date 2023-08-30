const loginCheck = (req, res, next) => {
  const userLogin = true; //false
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "login fall..",
    });
  }
};

module.exports = loginCheck;
