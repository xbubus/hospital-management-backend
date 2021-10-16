// patient-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const {Schema, Types} = require('mongoose');

module.exports = function (app) {
  const modelName = 'patient';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    personalData:{
      name: { type: String, required: true },
      PESEL: {type: String, required: false },
      email: {type: String, required: false},
      phoneNumber: {type: String, required: false}
    },
    bed: {type: String, required: false},
    dateOfAdmission: {type:Date},
    diseaseHistory: {type:String},
    clinicalCondition: {type:String},
    contagious: {type:Boolean},
    pdf:Schema.Types.Mixed,
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
