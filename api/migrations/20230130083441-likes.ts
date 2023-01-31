module.exports = {
  async up(db) {
    await db.collection('users').updateMany({}, { $set: { likes: [] } });
    await db.collection('recipes').updateMany({}, { $set: { likes: [] } });
  },

  async down(db) {
    await db.collection('users').updateMany({}, { $set: { likes: null } });
    await db.collection('recipes').updateMany({}, { $set: { likes: null } });
  }
};
