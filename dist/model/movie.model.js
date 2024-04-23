"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const mongoose = require("mongoose");
exports.MovieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genres: [String],
    releaseDate: Date,
    director: String,
    actors: [String],
});
//# sourceMappingURL=movie.model.js.map