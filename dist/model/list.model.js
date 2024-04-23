"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchema = void 0;
const mongoose = require("mongoose");
exports.ListSchema = new mongoose.Schema({
    userId: String,
    contentId: String,
    contentType: String
});
//# sourceMappingURL=list.model.js.map