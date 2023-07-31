interface IPost {
  author?: string;
  content?: string;
}

export function Post({ author, content }: IPost) {
  return (
    <>
      <p>{author}</p>
      <p>{content}</p>
    </>
  );
}
