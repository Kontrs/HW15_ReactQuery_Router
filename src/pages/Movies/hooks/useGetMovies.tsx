import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../Movies';

export const useGetMovies = () => {
  return useQuery({
    queryKey: ['movies'], 
    queryFn: async (): Promise<Movie[]> => {
      const response = await axios.get<Movie[]>('http://localhost:3000/movies');
      return response.data;
}})

}