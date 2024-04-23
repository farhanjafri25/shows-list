"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../jwt.strategy");
const user_module_1 = require("../user-module/user.module");
const passport_1 = require("@nestjs/passport");
const strategies_1 = require("../strategies");
const mongoose_1 = require("@nestjs/mongoose");
const path = require("path");
const dotenv = require("dotenv");
const movie_model_1 = require("../model/movie.model");
const tvshow_model_1 = require("../model/tvshow.model");
const list_model_1 = require("../model/list.model");
const list_controller_1 = require("./controllers/list.controller");
const list_service_1 = require("./services/list.service");
const list_repository_1 = require("./repositories/list.repository");
const envPath = path.join(process.cwd(), process.env.NODE_ENV ? `envs/.env.${process.env.NODE_ENV}` : `/.env`);
dotenv.config({
    path: envPath,
});
let ListModule = class ListModule {
};
exports.ListModule = ListModule;
exports.ListModule = ListModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: `${process.env.JWT_SECRET}`,
            }),
            user_module_1.UserModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'movie_schema', schema: movie_model_1.MovieSchema },
                { name: 'tvshow_schema', schema: tvshow_model_1.TvShowSchema },
                { name: 'users_list', schema: list_model_1.ListSchema }
            ]),
        ],
        controllers: [list_controller_1.ListController],
        providers: [
            list_service_1.ListService,
            list_repository_1.ListRepository,
            jwt_strategy_1.JwtStrategy,
            strategies_1.AccessTokenStrategy,
        ],
        exports: [
            list_service_1.ListService,
            list_repository_1.ListRepository,
            jwt_strategy_1.JwtStrategy,
            strategies_1.AccessTokenStrategy,
        ],
    })
], ListModule);
//# sourceMappingURL=list.module.js.map