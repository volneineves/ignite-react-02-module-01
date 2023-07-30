
interface IPost {
  author?: string
}

export function Post({author}: IPost) {
  return <p>{author}</p>
}