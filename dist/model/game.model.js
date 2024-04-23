"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSchema = void 0;
const mongoose = require("mongoose");
exports.GameSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    score: { type: Number, required: true },
    gameId: { type: String, required: true },
});
//# sourceMappingURL=game.model.js.map