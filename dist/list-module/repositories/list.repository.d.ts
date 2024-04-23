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
import { Movie } from "src/model/movie.model";
import { Model } from "mongoose";
import { TVShow } from "src/model/tvshow.model";
import { ListInterface } from "src/model/list.model";
export declare class ListRepository {
    private readonly movieModel;
    private readonly tvshowModel;
    private readonly usersList;
    constructor(movieModel: Model<Movie>, tvshowModel: Model<TVShow>, usersList: Model<ListInterface>);
    addShowToUser(userId: string, contentId: string, contentType: string): Promise<import("mongoose").Document<unknown, {}, ListInterface> & ListInterface & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getShowbyId(contentId: string, contentType: string): Promise<any>;
    getUserList(userId: string, page: number, pageSize: number): Promise<(import("mongoose").Document<unknown, {}, ListInterface> & ListInterface & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    removeContentFromUser(contentId: string, userId: string): Promise<import("mongodb").DeleteResult>;
}
