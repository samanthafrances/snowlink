const Event = require('/models/event');
const User = require('/models/user');
  
const index = async (req, res) => {
  const events = await Event.find({});
  res.render('events/index', { title: 'Upcoming Events', events });
};
  

const newEvent = (req, res) => {
  res.render('events/new', { title: 'Submit Event', errorMsg: '' });
};
  

const create = async (req, res) => {
    req.body.attending =!!req.body.attending;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      const event = await Event.create(req.body);
      res.redirect(`/events/${event._id}`);
    } catch (err) {
      console.log(err);
      res.render('events/new', { errorMsg: err.message });
    }
  };

  module.exports = {
    index,
    show,
    new: newEvent,
    create
  };