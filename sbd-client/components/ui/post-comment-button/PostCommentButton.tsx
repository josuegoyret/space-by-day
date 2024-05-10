'use client';

import { useFormStatus } from 'react-dom';
import PrimaryButton from '../library/primary-button/PrimaryButton';
import LoaderIcon from '../library/icons/LoaderIcon';

const PostCommentButton = () => {
  const { pending } = useFormStatus();
  return (
    <PrimaryButton type='submit' className='flex items-center justify-center gap-2 w-48'>
      {pending && <LoaderIcon size='20' />}
      Post Comment
    </PrimaryButton>
  );
};

export default PostCommentButton;
