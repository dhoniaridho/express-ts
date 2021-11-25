import { Request } from "express";
import multer from "multer";
import path from 'path';
import env from "../env";


function Storage({fileName, pathName} : { fileName?: string, pathName?:string }) {
  const StorageEngine = multer.diskStorage({
    destination: `./storage/${env.FILESYSTEM_DRIVER}/${pathName ?? ''}`,
    filename: function (req :Request, file, cb) {
      cb(null, (fileName ?? file.originalname) + path.extname(file.originalname));
    },
  });
  return {
    StorageEngine
  }
}


export default Storage;
