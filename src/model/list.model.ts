import * as mongoose from 'mongoose';

type ContentType = "MOVIE" | "TVSHOW"

export const ListSchema = new mongoose.Schema({
    userId: String,
    contentId: String,
    contentType: String
})

export interface ListInterface {
    userId: string,
    contentId: string,
    contentType: ContentType,
}