'use server';

import { API_URL } from '@/lib/config';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const APODCommentSchema = z.object({
  content: z
    .string({
      required_error: 'Add a content for your comment'
    })
    .min(20, { message: 'Your comment is too short. Use more than 20 characters' })
    .max(200, { message: 'Max characters allowed 200' }),
  apodDate: z.string()
});

const AddAPODComment = APODCommentSchema.omit({ apodDate: true });

export type AddAPODCommentState = {
  errors?: {
    content?: string[];
  };
  message?: string | null;
  success?: boolean;
  apodDate: string;
};

export const addAPODComment = async (
  prevState: AddAPODCommentState,
  formData: FormData
): Promise<AddAPODCommentState> => {
  const { apodDate } = prevState;
  const validatedFields = AddAPODComment.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Comment is not valid',
      success: false,
      apodDate
    };

  const { content } = validatedFields.data;

  try {
    const res = await fetch(`${API_URL}/apod-comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content, apodDate })
    });
    if (!res.ok)
      return {
        message: 'Error while adding comment',
        errors: { content: [`Oops! A problem occurred. We couldn't add the comment`] },
        success: false,
        apodDate
      };
  } catch (error) {
    return {
      message: 'Database error: Failed to add comment.',
      success: false,
      apodDate
    };
  }
  const [year, month, day] = apodDate.split('-');
  revalidatePath(`/calendar/day/${year}/${month}/${day}`);
  return {
    message: 'Successfully added a comment',
    success: true,
    apodDate
  };
};
