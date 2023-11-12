import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /**
   *  Create user
   * const user = await prisma.user.create({
   *  data: {
   *    name: "Deejay Dev",
   *    email: "deejay@deejaydev.work"
   *  }
   * });
   */
  /**
   * Get all users
  const users = await prisma.user.findMany();
  */
  /**
   * Get all users and include their articles
  const users = await prisma.user.findMany({
    include: {
      articles: true
    }
  });
  console.log(users);
  */
  /**
   *
   * create article and associate it with user
  const article = await prisma.article.create({
    data: {
      title: "Deejay's first article",
      body: "This is Deejays first article",
      author: {
        connect: {
          id: 1
        }
      }
    }
  });
  console.log(article);
   */
  /**
   * Get all articles
  
  const articles = await prisma.article.findMany();
  
  console.log(articles);
  */
  /**
   * Create a user and article and associate them
  const user = await prisma.user.create({
    data: {
      name: "Bisola Adejoye",
      email: "danjumashiwaju@mail.com",
      articles: {
        create: {
          title: "This is a title for the article",
          body: "This is Bisola's first article"
        }
      }
    }
  });

  console.log(user);
   */
  /**
   * Create another article for user by id
  const article = await prisma.article.create({
    data: {
      title: "Just another article",
      body: "This is just another article we needed for example yey!",
      author: {
        connect: {
          id: 2
        }
      }
    }
  });
  console.log(article);
   */
  /**
   * Get all articles of users and loop over them
   

  const allUsers = await prisma.user.findMany({
    include: {
      articles: true
    }
  });

  allUsers.forEach((user) => {
    const userInfo = `User: ${user.name}, Email: ${user.email}`;
    console.log(userInfo);
    user.articles.forEach((article) => {
      const articleInfo = `--Article title: ${article.title}, Article body: ${article.body}`;
      console.log(articleInfo);
    });
    console.log("\n");
  });
*/
  /**
   * Updating data
   *
  
  const user = await prisma.user.update({
    where: {
      id: 1
    },
    data: {
      name: "Funky Dev"
    }
  });
  console.log(user);
  */
  /**
   * Remove data
  
  const deleteArticleById = await prisma.article.delete({
    where: {
      id: 2
    }
  });
  console.log(deleteArticleById);
  */

  const allArticles = await prisma.user.findMany({
    include: {
      articles: {
        where: {
          title: {
            contains: 'studio'
          }
        }
      }
    }
  });

  console.log(allArticles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
