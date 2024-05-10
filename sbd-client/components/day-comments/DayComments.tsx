import { getAPODComments } from '@/services/apod-comment.service';
import CommentForm from '../comment-form/CommentForm';
import CommentsList from '../ui/comments-list/CommentsList';

interface DayCommentsProps {
  date: string;
}

const DayComments = async ({ date }: DayCommentsProps) => {
  const { apodComments } = await getAPODComments({ apodDate: date });
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10'">
      <CommentForm apodDate={date} />
      <CommentsList comments={apodComments} />
    </section>
  );
};

export default DayComments;
