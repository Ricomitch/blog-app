const db = require('../db/connection')
const Post = require('../models/Post')
const User = require('../models/User')
const faker = require('faker')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  for (let i = 0; i < 6; i++) {
    const user = new User({ username: faker.internet.userName(), email: faker.internet.email() })
    await user.save()
    for (let i = 0; i < 3; i++) {
      const post = new Post({
        title: faker.company.catchPhrase().substr(0, 27),
        imgURL: faker.image.imageUrl(400, 300, undefined, true),
        content: faker.lorem.paragraphs(),
        userId: user._id,
      })
      await post.save()
    }
  }
  
}

const run = async () => {
  await main()
  db.close()
}

run()