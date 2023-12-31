import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../../Movies/Movies';
import { useNavigate, useParams } from 'react-router-dom';

export const useGetMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return useQuery({
    queryKey: ['movie'], 
    queryFn: async (): Promise<Movie | undefined> => {
      try{
        const response = await axios.get<Movie>(`http://localhost:3000/movies/${id}`);
        return response.data;
      } catch(error) {
        navigate('/404');
        throw error;
      }
  }})
}