

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
      console.log(context)
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
      console.log(context)
      const b = await context.app.service('bed').find({ query: { name: context.data.bed } })
       console.log(b)
       const bb = await context.app.service('bed').patch(b[0]._id, { isEmpty: false, patient: context.result._id }, {})
       console.log(bb)
   }],
    update: [],
    patch: [],
    remove: []
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
