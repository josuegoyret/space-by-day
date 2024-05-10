import CommentItem from '../comment-item/CommentItem';

interface CommentsListProps {
  comments: PhotoComment[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <div className='flex flex-col divide-y'>
      {!comments.length && (
        <p className='text-center self-center w-max border border-nasa-gray text-nasa-gray text-sm px-3 py-0.5'>
          No comments yet
        </p>
      )}
      {comments.map((comment, i) => (
        <CommentItem key={i} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
