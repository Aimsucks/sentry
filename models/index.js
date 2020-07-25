const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .catch(err => {
      console.error(err)
      process.exit()
    })
}

connect().then(console.log(`Connected to database at ${process.env.MONGOOSE_URI}`))
