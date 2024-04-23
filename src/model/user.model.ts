import * as mongoose from 'mongoose';
//User schema in MongoDb

type Genre =
  | 'Action'
  | 'Comedy'
  | 'Drama'
  | 'Fantasy'
  | 'Horror'
  | 'Romance'
  | 'SciFi';

const WatchHistorySchema = new mongoose.Schema({
  contentId: { type: String, required: true },
  watchedOn: { type: Date, default: Date.now },
  rating: { type: Number, min: 1, max: 5 }, 
});

export const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  preferences: {
    favoriteGenres: [String],
    dislikedGenres: [String],
  },
  watchHistory: [WatchHistorySchema],
});

export interface User {
  userId: string;
  username: string;
  password: string;
  preferences: {
    favoriteGenres: Genre[];
    dislikedGenres: Genre[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;
}
