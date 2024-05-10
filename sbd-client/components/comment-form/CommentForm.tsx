import PrimaryButton from '../ui/library/primary-button/PrimaryButton';
import Textarea from '../ui/library/textarea/Textarea';

const CommentForm = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-8'>
      <h2 className='text-2xl font-bold md:text-3xl'>Comment on this photo</h2>
      <form className='space-y-4 md:space-y-6'>
        <Textarea id='comment' rows={4} placeholder='Write your comment...'></Textarea>
        <PrimaryButton type='submit'>Post Comment</PrimaryButton>
      </form>
    </div>
  );
};

export default CommentForm;
