interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps) => {
  return (
    <textarea {...props} className='min-h-[120px] resize-none block p-2 w-full border border-nasa-gray blue-square' />
  );
};

export default Textarea;
