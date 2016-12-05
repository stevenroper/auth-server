module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send({
      name: 'Steven',
      company: 'STG',
      experience: 'ehh....'
    });
  });
}