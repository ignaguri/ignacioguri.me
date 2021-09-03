/* eslint-disable sort-keys */

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    i: 'love you',
    wont: 'you tell',
    me: 'your name?',
  });
};
