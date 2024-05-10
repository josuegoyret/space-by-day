import CommentForm from '../comment-form/CommentForm';
import CommentsList from '../ui/comments-list/CommentsList';

interface DayCommentsProps {
  date: string;
}

const DayComments = ({ date }: DayCommentsProps) => {
  const comments: PhotoComment[] = [
    {
      id: 'abc',
      content:
        'I really enjoyed this blog post! The author did a great job of explaining the topic in a clear and concise way.',
      createdAt: date,
      updatedAt: date
    },
    {
      id: 'abc',
      content:
        'This is a really interesting topic. I learned a lot from this post. Looking forward to more content like this.',
      createdAt: date,
      updatedAt: date
    },
    {
      id: 'abc',
      content:
        "Great post! The examples and code snippets were really helpful. I can't wait to try this out in my own project.",
      createdAt: date,
      updatedAt: date
    }
  ];
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10'">
      <CommentForm apodDate={date} />
      <CommentsList comments={comments} />
    </section>
  );
};

export default DayComments;
