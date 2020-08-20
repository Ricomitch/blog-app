# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Blog App 

Your task is to build a blog using MongoDB, Mongoose, Express, and React.

1. Create a repo named blog-app on github.com **not** on git.generalassemb.ly
2. Add your teammates as collaborators
3. Create a development branch

Your app should include the following:

- CRUD on the backend (an api where you can create, read, update, and delete blog posts)
- CRUD on the frontend (a react frontend that has axios calls that can create, read, update, and delete blog posts)

## Bonus 

Include the concept of a user:
- A post belongs to a user
- A user can have many posts

<details><summary>Here is an example schema.</summary>
<p>

```js
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }]
  },
  { timestamps: true }
)
```

```js
const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
)
```

</p>
</details>

In your seed file you will have to:
1. Create users
2. Create posts and associate them with users
3. Create the association between users and posts

Try using the mongoose `populate()` method to return users with their associated posts:

<details><summary>Here is an example express route using populate.</summary>
<p>

```js
app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
            .populate('posts')
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
```

</p>
</details>

**Tips**
- https://mongoosejs.com/docs/queries.html
- https://mongoosejs.com/docs/populate.html
