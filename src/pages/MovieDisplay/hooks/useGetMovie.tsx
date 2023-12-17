import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../../Movies/Movies';
import { useParams } from 'react-router-dom';

export const useGetMovie = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ['movie'], 
    queryFn: async (): Promise<Movie> => {
      const response = await axios.get<Movie>(`http://localhost:3000/movies/${id}`);
      return response.data;
}})

}