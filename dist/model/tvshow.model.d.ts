/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import * as mongoose from 'mongoose';
type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';
export declare const TvShowSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    genres: string[];
    episodes: mongoose.Types.DocumentArray<{
        actors: string[];
        releaseDate?: Date;
        director?: string;
        episodeNumber?: number;
        seasonNumber?: number;
    }>;
    description?: string;
    title?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    genres: string[];
    episodes: mongoose.Types.DocumentArray<{
        actors: string[];
        releaseDate?: Date;
        director?: string;
        episodeNumber?: number;
        seasonNumber?: number;
    }>;
    description?: string;
    title?: string;
}>> & mongoose.FlatRecord<{
    genres: string[];
    episodes: mongoose.Types.DocumentArray<{
        actors: string[];
        releaseDate?: Date;
        director?: string;
        episodeNumber?: number;
        seasonNumber?: number;
    }>;
    description?: string;
    title?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface TVShow {
    id: string;
    title: string;
    description: string;
    genres: Genre[];
    episodes: Array<{
        episodeNumber: number;
        seasonNumber: number;
        releaseDate: Date;
        director: string;
        actors: string[];
    }>;
}
export {};
