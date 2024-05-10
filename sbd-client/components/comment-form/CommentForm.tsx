'use client';

import { useFormState } from 'react-dom';
import { addAPODComment } from '@/actions/apod-comment.action';
import Textarea from '../ui/library/textarea/Textarea';
import PostCommentButton from '../ui/post-comment-button/PostCommentButton';

interface CommentFormProps {
  apodDate: string;
}

const CommentForm = ({ apodDate }: CommentFormProps) => {
  const initialState = {
    message: null,
    errors: {},
    success: undefined,
    apodDate
  };

  const [state, dispatch] = useFormState(addAPODComment, initialState);

  return (
    <div className='flex flex-col gap-6 md:gap-8'>
      <h2 className='text-2xl font-bold md:text-3xl'>Comment on this photo</h2>
      <form action={dispatch} className='flex flex-col gap-4 md:gap-6'>
        <div className='flex flex-col gap-1'>
          <Textarea
            id='content'
            name='content'
            aria-describedby='content-error'
            rows={4}
            placeholder='Write your comment...'
          ></Textarea>
          {state.errors?.content ? (
            <div id='content-error' aria-live='polite' className='flex flex-col text-sm text-nasa-red'>
              {state.errors.content.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <PostCommentButton />
      </form>
    </div>
  );
};

export default CommentForm;
