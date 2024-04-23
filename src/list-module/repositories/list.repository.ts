import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "src/model/movie.model";
import { Model } from 'mongoose';
import { TVShow } from "src/model/tvshow.model";


@Injectable()
export class ListRepository {
    constructor(
        @InjectModel('movie_schema')
        private readonly movieModel: Model<Movie>,
        @InjectModel('tvshow_schema')
        private readonly tvshowModel: Model<TVShow>
    ) { }
    
    
}