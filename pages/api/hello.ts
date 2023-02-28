/* eslint-disable sort-keys */

export default (req: any, res: any) => {
  res.statusCode = 200;
  res.json({
    i: 'love you',
    wont: 'you tell',
    me: 'your name?',
  });
};
