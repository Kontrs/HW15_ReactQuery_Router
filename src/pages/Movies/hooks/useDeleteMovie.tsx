import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`http://localhost:3000/movies/${id}`);
    },
    onSuccess: (): void => {
      queryClient.invalidateQueries({queryKey: ['movies']});
      navigate('/');
    }
  })
}