import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handle(req, res) {
  console.log(req, ' update req')
  console.log(req.body.title, ' title')
  console.log('id ', req.query.id)
  const postId = req.query.id
  const { title, content } = req.body
  if(req.method === 'PUT') {
  const post = await prisma.post.update({
    where: { id: postId },
    data: {
      title: title,
      content: content,
    }
  });
  res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}

// export default async function handle(req, res) {
//   const postId = req.query.id;
//   const { title, content } = req.body;
//   const session = await getSession({ req });
//   const post = await prisma.post.update({
//     where: { id: postId },
//     data: {
//       title: title,
//       content: content,
//     },
//   });
//   res.json(post);
// }