import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({comment, id}: {comment: string, id: number}) => {
      return axios.post(`http://localhost:3000/movies/${id}/comments}`, comment);
    },
    onSuccess: (): void => {
      queryClient.invalidateQueries({queryKey: ['movies']});
    }
  })
}