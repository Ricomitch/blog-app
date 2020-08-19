const db = require('../db/connection')
const Post = require('../models/Post')
const User = require('../models/User')
const faker = require('faker')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const user1 = new User({ username: faker.internet.userName(), email: faker.internet.email() })
  await user1.save()

  const user2 = new User({ username: faker.internet.userName(), email: faker.internet.email() })
  await user2.save()

  const user3 = new User({ username: faker.internet.userName(), email: faker.internet.email() })
  await user3.save()

  const post1 = new Post({
    title: faker.company.catchPhrase().substr(0,27),
    imgURL: faker.image.imageUrl(400, 300, undefined, true),
    content: faker.lorem.paragraphs(),
    userId: user1._id,
  })
  await post1.save()

  const post2 = new Post({
    title: faker.company.catchPhrase().substr(0,27),
    imgURL: faker.image.imageUrl(400, 300, undefined, true),
    content: faker.lorem.paragraphs(),
    userId: user2._id,
  })
  await post2.save()

  user1.posts.push(post1)
  await user1.save()
}


const run = async () => {
  await main()
  db.close()
}

run()