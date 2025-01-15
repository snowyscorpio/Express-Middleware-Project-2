
const logger = (req, res, next) => {
  const now = new Date();
  const formattedDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const formattedTime = now.toTimeString().split(' ')[0]; // HH:mm:ss
  console.log(`[${req.method} ${req.url} ${formattedDate} ${formattedTime}]`);
  next();
};
module.exports = logger;