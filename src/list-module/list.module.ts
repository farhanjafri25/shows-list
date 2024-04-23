import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt.strategy';
import { UserModule } from '../user-module/user.module';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from '../strategies';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { MovieSchema } from '../model/movie.model';
import { TvShowSchema } from '../model/tvshow.model';
import { ListSchema } from '../model/list.model';
import { ListController } from './controllers/list.controller';
import { ListService } from './services/list.service';
import { ListRepository } from './repositories/list.repository';

const envPath = path.join(
  process.cwd(),
  process.env.NODE_ENV ? `envs/.env.${process.env.NODE_ENV}` : `/.env`,
);
dotenv.config({
  path: envPath,
});

@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
    }),
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([
      { name: 'movie_schema', schema: MovieSchema },
      { name: 'tvshow_schema', schema: TvShowSchema },
      {name: 'users_list', schema: ListSchema}
    ]),
  ],
  controllers: [ListController],
  providers: [
    ListService,
    ListRepository,
    JwtStrategy,
    AccessTokenStrategy,
  ],
  exports: [
    ListService,
    ListRepository,
    JwtStrategy,
    AccessTokenStrategy,
  ],
})
export class ListModule {}
