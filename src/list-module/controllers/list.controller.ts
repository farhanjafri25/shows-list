import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
    UseInterceptors,
} from "@nestjs/common";
import { AppInterceptor } from "../../app.interceptor";
import { GetCurrentUser } from "../../decorators";
import { SaveListDto } from "../../dto/saveList.dto";
import { ListService } from "../services/list.service";

@UseInterceptors(AppInterceptor)
@Controller('/list')
export class ListController {
	constructor(private readonly listService: ListService) {}

	@Get()
	async getUserList(
		@GetCurrentUser("userId") userId: string,
		@Query() queryParams: { page: number; pageSize: number }
	) {
		return await this.listService.fetchUserLists(
			userId,
			queryParams.page,
			queryParams.pageSize
		);
	}

	@Post("/save")
	async saveUserContent(
		@GetCurrentUser("userId") userId: string,
		@Body() body: SaveListDto
	) {
		return await this.listService.saveUserList(
			body.contentId,
			userId,
			body.contentType
		);
	}

	@Delete("/:contentId")
	async deleteUserContent(
		@GetCurrentUser("userId") userId: string,
		@Param("contentId") contentId: string
	) {
		return await this.listService.removeContentFromUsersList(contentId, userId);
	}
}
