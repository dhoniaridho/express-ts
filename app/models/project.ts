import {Model} from "objection";
import DB from "../../config/db";

Model.knex(DB)

class Project extends Model {


  /**
   * Types
   * 
   * define types data model
   */

  id!: number;
  title!: string;
  slug!: string;
  description!: string;
  url!: string;

    /**
   * Table Name
   * 
   * define table name
   */

  static get tableName() {
    return "projects";
  }
}

export default Project;
