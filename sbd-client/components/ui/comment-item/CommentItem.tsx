interface CommentItemProps {
  comment: PhotoComment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className='flex flex-col gap-1 py-4'>
      <div className='text-nasa-gray text-sm'>{comment.createdAt}</div>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentItem;
