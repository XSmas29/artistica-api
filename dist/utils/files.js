"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.uploadFile = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const promises_1 = require("stream/promises");
const uploadFile = (file, uploadDir, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, fs_1.existsSync)(uploadDir)) {
        (0, fs_1.mkdirSync)((0, path_1.join)(__dirname, '../../public', uploadDir), { recursive: true });
    }
    const { createReadStream } = yield file;
    const stream = createReadStream();
    const filePath = (0, path_1.join)(uploadDir, fileName);
    // console.log(filePath)
    // console.log(join(__dirname, `../../public/${filePath}`))
    // writeFileSync(join(__dirname, `../../public/${filePath}`), '')
    // console.log('file created')
    const result = (0, fs_1.createWriteStream)((0, path_1.join)(__dirname, `../../public/${filePath}`));
    stream.pipe(result);
    yield (0, promises_1.finished)(result);
    //       part.file.pipe(writeStream);
    return filePath;
});
exports.uploadFile = uploadFile;
const deleteFile = (filePath) => {
    const fullPath = (0, path_1.join)(__dirname, `../../public/${filePath}`);
    console.log(fullPath);
    if ((0, fs_1.existsSync)(fullPath)) {
        (0, fs_1.unlinkSync)(fullPath);
    }
};
exports.deleteFile = deleteFile;
