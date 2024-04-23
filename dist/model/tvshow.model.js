"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowSchema = void 0;
const mongoose = require("mongoose");
const episodesSchema = new mongoose.Schema({
    episodeNumber: Number,
    seasonNumber: Number,
    releaseDate: Date,
    director: String,
    actors: [String],
});
exports.TvShowSchema = new mongoose.Schema({
    title: String,
    description: String,
    genres: [String],
    episodes: [episodesSchema],
});
//# sourceMappingURL=tvshow.model.js.map