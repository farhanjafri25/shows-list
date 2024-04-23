"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../jwt.strategy");
const game_controller_1 = require("./controllers/game.controller");
const game_repository_1 = require("./repositories/game.repository");
const game_service_1 = require("./services/game.service");
const socket_gateway_1 = require("./socketController/socket.gateway");
const user_module_1 = require("../user-module/user.module");
const passport_1 = require("@nestjs/passport");
const strategies_1 = require("../strategies");
const mongoose_1 = require("@nestjs/mongoose");
const question_model_1 = require("../model/question.model");
const game_model_1 = require("../model/game.model");
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.join(process.cwd(), process.env.NODE_ENV ? `envs/.env.${process.env.NODE_ENV}` : `/.env`);
dotenv.config({
    path: envPath,
});
let GameModule = class GameModule {
};
exports.GameModule = GameModule;
exports.GameModule = GameModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: `${process.env.JWT_SECRET}`,
            }),
            user_module_1.UserModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'questions_data', schema: question_model_1.QuestionSchema },
                { name: 'game_score_data', schema: game_model_1.GameSchema },
            ]),
        ],
        controllers: [game_controller_1.GameController],
        providers: [
            game_service_1.GameService,
            game_repository_1.GameRepository,
            jwt_strategy_1.JwtStrategy,
            socket_gateway_1.AppGateway,
            strategies_1.AccessTokenStrategy,
        ],
        exports: [
            game_service_1.GameService,
            game_repository_1.GameRepository,
            jwt_strategy_1.JwtStrategy,
            socket_gateway_1.AppGateway,
            strategies_1.AccessTokenStrategy,
        ],
    })
], GameModule);
//# sourceMappingURL=game.module.js.map