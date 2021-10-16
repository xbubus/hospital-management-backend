var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'best.hospital21@gmail.com',
         pass: 'Besthospital1!'
     }
 });
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [async context => {
      // console.log(context)
      if (context.data.bed) {
        console.log(context.id)
        const ob = await context.app.service('bed').find({ query: { patient: context.id } })
        if (ob.length > 0) {
          console.log("ob!", ob)
          const obb = await context.app.service('bed').patch(ob[0]._id, { isEmpty: true, patient: null }, {})
          console.log(obb)
        }
        const b = await context.app.service('bed').find({ query: { name: context.data.bed } })
        console.log(b)
        const bb = await context.app.service('bed').patch(b[0]._id, { isEmpty: false, patient: context.id }, {})
        console.log(bb)
      } else {
      }
    }],
    patch: [],
    remove: [async context => {
    //  console.log(context)
      const ob = await context.app.service('bed').find({ query: { patient: context.id } })
      if (ob.length > 0) {
        console.log("ob!", ob)
        const obb = await context.app.service('bed').patch(ob[0]._id, { isEmpty: true, patient: null }, {})
        console.log(obb)
       }   }
  ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [async context => {
      //console.log(context)
      const b = await context.app.service('bed').find({ query: { name: context.data.bed } })
       console.log(b)
       const bb = await context.app.service('bed').patch(b[0]._id, { isEmpty: false, patient: context.result._id }, {})
       console.log(bb)
   }],
    update: [],
    patch: [],
    remove: [
      async context=>{
     //   console.log(context)
    // console.log("c:",context.result)
  const mailOptions = {
    from: 'best.hospital21@gmail.com', // sender address
    to: context.result.personalData.email, // list of receivers
    subject: 'Hospital discharge', // Subject line
    html: '<h3>We just discharger you from hospital.</h3>' + '<h4>Below you can find your disease history and attachment with your medical documenation </h4>'+ '<p>'+context.result.diseaseHistory+'</p>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });
        }
      ]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
