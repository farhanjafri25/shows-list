import { BadRequestException, Injectable } from "@nestjs/common";
import { ListRepository } from "../repositories/list.repository";

@Injectable()
export class ListService {
	constructor(private readonly listRepository: ListRepository) {}

	async saveUserList(contentId: string, userId: string, contentType: string) {
		try {
			const saveUserContent = await this.listRepository.addShowToUser(
				userId,
				contentId,
				contentType
			);
			console.log(
				"ListService ~ saveUserList ~ saveUserContent:",
				saveUserContent
			);
			return saveUserContent;
		} catch (error) {
			console.log("ListService ~ saveUserList ~ error:", error);
			throw new BadRequestException("Error saving user list");
		}
	}

	async fetchUserLists(userId: string, page: number, pageSize: number) {
		try {
			const fetchUserList = await this.listRepository.getUserList(
				userId,
				page,
				pageSize
			);
			console.log(
				"ListService ~ fetchUserLists ~ fetchUserList:",
				fetchUserList
			);
			let listDetails = [];
			fetchUserList.forEach((ele) => {
				listDetails.push(
					this.listRepository.getShowbyId(ele.contentId, ele.contentType)
				);
			});
			const promiseArray = await Promise.all(listDetails);
			for (let i = 0; i < fetchUserList.length; i++) {
				fetchUserList[i] = { ...fetchUserList[i], ...promiseArray[i] };
            }
            console.log(`fetchUserList -->`, fetchUserList);
            const res = [];
            fetchUserList.forEach((ele) => {
                res.push(ele['_doc']);
            })
			return {
				docs: res,
				nextPage: fetchUserList.length >= pageSize ? page + 1 : null,
			};
		} catch (error) {
			console.log("ListService ~ fetchUserLists ~ error:", error);
			throw new BadRequestException("Erro fetching users list");
		}
	}

	async removeContentFromUsersList(contentId: string, userId: string) {
		try {
			const res = await this.listRepository.removeContentFromUser(
				contentId,
				userId
			);
			return res;
		} catch (error) {
			console.log("ListService ~ removeContentFromUsersList ~ error:", error);
			return null;
		}
	}
}
