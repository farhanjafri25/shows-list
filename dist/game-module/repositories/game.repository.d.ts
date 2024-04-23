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
import { QuestionInterface } from 'src/model/question.model';
import { Model } from 'mongoose';
import { GameScore } from '../../model/game.model';
export declare class GameRepository {
    private readonly questionModel;
    private readonly gameScoreModel;
    constructor(questionModel: Model<QuestionInterface>, gameScoreModel: Model<GameScore>);
    getQuestions(page: number, pageSize?: number): Promise<(import("mongoose").Document<unknown, {}, QuestionInterface> & QuestionInterface & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getQuestionById(questionId: string): Promise<import("mongoose").Document<unknown, {}, QuestionInterface> & QuestionInterface & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    saveGameScore(userId: string, roomId: string, score: number): Promise<any>;
}
