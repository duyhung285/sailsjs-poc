module.exports = async function all(req, res) {
  let payment = await Payment.find({});
  return res.json(payment);
};
