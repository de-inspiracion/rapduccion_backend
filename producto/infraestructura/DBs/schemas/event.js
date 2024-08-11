const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
});

const Event = mongoose.model('Events', EventSchema);