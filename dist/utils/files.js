"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.uploadFile = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const promises_1 = require("stream/promises");
const uploadFile = async (file, uploadDir, fileName) => {
    if (!(0, fs_1.existsSync)(uploadDir)) {
        (0, fs_1.mkdirSync)((0, path_1.join)(__dirname, '../../public', uploadDir), { recursive: true });
    }
    const { createReadStream } = await file;
    const stream = createReadStream();
    const filePath = (0, path_1.join)(uploadDir, fileName);
    // console.log(filePath)
    // console.log(join(__dirname, `../../public/${filePath}`))
    // writeFileSync(join(__dirname, `../../public/${filePath}`), '')
    // console.log('file created')
    const result = (0, fs_1.createWriteStream)((0, path_1.join)(__dirname, `../../public/${filePath}`));
    stream.pipe(result);
    await (0, promises_1.finished)(result);
    //       part.file.pipe(writeStream);
    return filePath;
};
exports.uploadFile = uploadFile;
const deleteFile = (filePath) => {
    const fullPath = (0, path_1.join)(__dirname, `../../public/${filePath}`);
    console.log(fullPath);
    if ((0, fs_1.existsSync)(fullPath)) {
        (0, fs_1.unlinkSync)(fullPath);
    }
};
exports.deleteFile = deleteFile;
