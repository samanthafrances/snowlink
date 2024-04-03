const Event = require('../models/event');

async function deleteComment(req, res) {
  const event = await Event.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
  if (!event) return res.redirect('/events');
  event.comments.remove(req.params.id);
  await event.save();
  res.redirect(`/events/${event._id}`);
}

async function create(req, res) {
  const event = await Event.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  event.comments.push(req.body);
  try {
    await event.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/events/${event._id}`);
}

module.exports = {
    create,
    delete: deleteComment
  };
  