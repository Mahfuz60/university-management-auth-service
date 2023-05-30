import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

//database connection
async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`🧧 Database Connected Successfully!`)

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`Failed to Connected database`, err)
  }
}

server()
