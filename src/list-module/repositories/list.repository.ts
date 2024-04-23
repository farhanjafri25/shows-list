import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "src/model/movie.model";
import { Model } from "mongoose";
import { TVShow } from "src/model/tvshow.model";
import { ListInterface } from "src/model/list.model";

@Injectable()
export class ListRepository {
	constructor(
		@InjectModel("movie_schema")
		private readonly movieModel: Model<Movie>,
		@InjectModel("tvshow_schema")
		private readonly tvshowModel: Model<TVShow>,
		@InjectModel("users_list")
		private readonly usersList: Model<ListInterface>
	) {}

	async addShowToUser(userId: string, contentId: string, contentType: string) {
		try {
			const listObj = new this.usersList({
				userId: userId,
				contentId: contentId,
				contentType: contentType,
			});
			const res = await listObj.save();
			console.log("ListRepository ~ addShowToUser ~ res:", res);
			return res;
		} catch (error) {
			console.log("ListRepository ~ addShowToUser ~ error:", error);
			return null;
		}
	}

	async getShowbyId(contentId: string, contentType: string) {
		let res;
		if (contentType === "MOVIE") {
			res = await this.movieModel.findOne({ _id: contentId });
			console.log("ListRepository ~ getShowbyId ~ res:", res);
			return res;
		}
		res = await this.tvshowModel.findOne({ _id: contentId });
		console.log("ListRepository ~ getShowbyId ~ res:", res);
		return res;
	}
	async getUserList(userId: string, page: number, pageSize: number) {
		const res = await this.usersList
			.find({ userId: userId })
			.skip(page * pageSize)
			.limit(pageSize)
			.exec();
		console.log("ListRepository ~ getUserList ~ res:", res);
		return res;
    }
    
    async removeContentFromUser(contentId: string, userId: string) {
        try {
            const res = await this.usersList.deleteOne({ userId: userId, contentId: contentId });
            return res;
        } catch (error) {
            console.log("ListRepository ~ removeContentFromUser ~ error:", error);
            return null;
        }
    }
}
