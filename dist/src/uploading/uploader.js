"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uploader = void 0;
const express_1 = __importDefault(require("express"));
class Uploader {
    processUpload(metaDataHeader, body) {
        if (metaDataHeader === undefined)
            return 500;
        metaDataHeader = (typeof metaDataHeader === "string") ? metaDataHeader : metaDataHeader[0];
        let metadata = Buffer.from(metaDataHeader, "base64");
        let parsed = JSON.parse(metadata.toString("ascii"));
        console.log(parsed);
        return 200;
    }
}
exports.Uploader = Uploader;
if (require.main === module) {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.post("/upload", (req, res) => {
        res.send("ok");
    });
    app.listen(3000, () => {
        console.log("server started");
    });
}
