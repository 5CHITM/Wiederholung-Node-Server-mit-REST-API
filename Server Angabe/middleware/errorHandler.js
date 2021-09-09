const errorHandler = (err, req, res, next) => {
  console.log(`Error => ${err.message}`.red);
  res.status(500).json({
    code: 500,
    data: 'Server error',
  });
};

const notFound = (req, res) => {
  console.log(`Error => ${req.originalUrl}`.blue);
  res.status(404).json({
    code: 404,
    data: 'The requested page does not exist.',
  });
};

module.exports = { errorHandler, notFound };
