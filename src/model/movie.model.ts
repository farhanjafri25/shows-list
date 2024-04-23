import * as mongoose from 'mongoose';

type Genre =
  | 'Action'
  | 'Comedy'
  | 'Drama'
  | 'Fantasy'
  | 'Horror'
  | 'Romance'
  | 'SciFi';

export const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  genres: [String],
  releaseDate: Date,
  director: String,
  actors: [String],
});

export interface Movie {
  id: string;
  title: string;
  description: string;
  genres: Genre[];
  releaseDate: Date;
  director: string;
  actors: string[];
}
