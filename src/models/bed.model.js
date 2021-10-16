// bed-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'bed';
  const mongooseClient = app.get('mongooseClient');
  const { Schema, Types} = mongooseClient;
  const schema = new Schema({
    isEmpty: { type: Boolean, required: true },
    room:{type: Types.ObjectId, required: false, index: true},
    patient:{type: Types.ObjectId, required: false, index: true},
    name: { type: String, required: false },
    respirator: {type: Boolean, required: false},
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
