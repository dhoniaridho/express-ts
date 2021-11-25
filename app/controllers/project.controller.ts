import {Request, Response, NextFunction} from "express";
import Project from "../models/project";
import Joi from "joi";
import Storage from "../../config/storage";
import multer from "multer";

export default class ProjectController {
  static async index(req: Request, res: Response) {
    /**
     * Get all projects from database
     */
    const data = await Project.query();
    return res.json(data);
  }
  static async create(req: Request, res: Response) {
    /**
     * Validate request body
     * before store to database
     */

    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      slug: Joi.string().required().replace(" ", "-"),
      url: Joi.string().required(),
    });

    /**
     * Catch error from validation body
     */

    const {error, value} = schema.validate(req.body, {abortEarly: false});

    /**
     * Return message array
     */

    const errors = error?.details.map((e) => {
      return e.message.replace('"', "").replace('"', "");
    });

    /**
     * Store to database
     */

    if (!errors) {
      try {
        await Project.query().insert(value);
        return res.send("created");
      } catch (error: any) {
        res.json(error.message);
      }
    }
    return res.json(errors ?? null);
  }
  static async update(req: Request, res: Response) {
    /**
     * Validate request body
     * before store to database
     */

    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      slug: Joi.string().required().replace(" ", "-"),
      url: Joi.string().required(),
    });

    /**
     * Catch error from validation body
     */

    const {error, value} = schema.validate(req.body, {abortEarly: false});

    /**
     * Return message array
     */

    const errors = error?.details.map((e) => {
      return e.message.replace('"', "").replace('"', "");
    });

    /**
     * Store to database
     * if no error
     * else return error
     */

    if (!errors) {
      try {
        await Project.query().patchAndFetchById(req.params.id, value);
        return res.send("updated");
      } catch (error: any) {
        res.json(error.message);
      }
    }
    return res.json(errors ?? null);
  }

  static async show(req: Request, res: Response) {
    /**
     * Get project by id
     * then show
     */
    const data = await Project.query().findById(req.params.id);
    if (data) return res.json(data);
    return res.json({message: "not found"});
  }
  static async delete(req: Request, res: Response) {
    /**
     * Get project by id
     * then delete
     */
    const data = await Project.query().deleteById(req.params.id);
    if (data) return res.json(data);
    return res.json({message: "not found"});
  }
  static async upload(req: Request, res: Response) {

    const fileUpload = multer({ storage: Storage({ fileName : `${Date.now()}` }).StorageEngine }).fields([{ name: 'image' }, { name: 'file_upload' }]) 
    fileUpload(req, res, () => {
      req.files
    })

    return res.json({success: true})
  }
}
