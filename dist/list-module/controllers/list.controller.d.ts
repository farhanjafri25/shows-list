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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { SaveListDto } from "src/dto/saveList.dto";
import { ListService } from "../services/list.service";
export declare class ListController {
    private readonly listService;
    constructor(listService: ListService);
    getUserList(userId: string, queryParams: {
        page: number;
        pageSize: number;
    }): Promise<{
        docs: (import("mongoose").Document<unknown, {}, import("../../model/list.model").ListInterface> & import("../../model/list.model").ListInterface & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        nextPage: number;
    }>;
    saveUserContent(userId: string, body: SaveListDto): Promise<import("mongoose").Document<unknown, {}, import("../../model/list.model").ListInterface> & import("../../model/list.model").ListInterface & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteUserContent(userId: string, contentId: string): Promise<import("mongodb").DeleteResult>;
}
