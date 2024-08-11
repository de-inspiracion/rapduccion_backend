const { default: mongoose } = require("mongoose");

const TickerSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  phone: String,
  state: { type: String, default: 'created', enum: ['created', 'paid', 'canceled'] },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  date: Date,
  location: String,
});

module.exports = { Ticket: mongoose.model('Tickets', TickerSchema) };