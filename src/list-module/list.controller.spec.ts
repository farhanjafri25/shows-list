import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../user-module/user.module';
import { ListController } from './controllers/list.controller';
import { ListModule } from './list.module';
import { ListRepository } from './repositories/list.repository';
import { ListService } from './services/list.service';

describe('ListController', () => {
    let listController: ListController;
    let listService: ListService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ListController],
            providers: [ListService, ListRepository],
            imports: [ListModule, UserModule]
        }).compile();

        listController = app.get<ListController>(ListController);
        listService = app.get<ListService>(ListService);
    })

    describe('POST /list/save', () => {
        it('should create list and return created status', async () => {
            const contentId = "662805724012ac068c8bff9d";
            const contentType = "MOVIE";

            const result = await listController.saveUserContent("5edcfbe6-77b3-48c0-ab8a-6e797a254f69", { contentId, contentType });
            expect(result).toEqual({
                "code": 201,
                "message": "Success",
                "data": {
                    "userId": "5edcfbe6-77b3-48c0-ab8a-6e797a254f69",
                    "contentId": "662805724012ac068c8bff9d",
                    "contentType": "MOVIE",
                    "_id": "66280a8df3efec20acc89d5b",
                    "__v": 0
                }
            });
        });
    })
})