"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const WatchHistorySchema = new mongoose.Schema({
    contentId: { type: String, required: true },
    watchedOn: { type: Date, default: Date.now },
    rating: { type: Number, min: 1, max: 5 },
});
exports.UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    preferences: {
        favoriteGenres: [String],
        dislikedGenres: [String],
    },
    watchHistory: [WatchHistorySchema],
});
//# sourceMappingURL=user.model.js.map