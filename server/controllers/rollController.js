const rollController = {};

rollController.getRoll = (req, res, next) => {
  const numDie = isNaN(req.params.num)
    ? req.params.num
    : Number(req.params.num);
  console.log(numDie);
  if (
    typeof numDie !== 'number' ||
    numDie < 1 ||
    numDie > 6 ||
    !Number.isInteger(numDie)
  ) {
    console.log(req.params.num);
    return res.sendStatus(400);
  }
  const roll = [];
  for (let i = 0; i < numDie; i++) {
    roll[i] = Math.ceil(Math.random() * 6);
  }
  res.locals.roll = roll;
  console.log(roll);
  return next(res.locals.roll);
};

module.exports = rollController;
