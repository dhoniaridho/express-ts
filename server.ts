import express from "express";
import Route from "./routes";
import env from "./env";
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan'

class Server {
  private app = express();

  public start(): void {
    console.log(`😉 Starting ${env.APP_NAME} development server`);
    try {
      this.app.listen(env.APP_PORT, () => {
        console.log(
          `✨ Started ${env.APP_NAME} development server: ${env.APP_URL}`
        );
        this.loadConfig();
        this.loadRoute();
      });
    } catch (error: any) {
      console.log(`😫 Something went wrong with message: ${error.message}`);
    }
  }
  private loadRoute() {
    this.app.use(Route);
  }
  private loadConfig() {
    this.app.use(morgan(`[:date[clf]] :method http://127.0.0.1:url :status :res[content-length] - :response-time ms`))
    this.app.use(express.json());
    this.app.use(bodyParser.json({limit: "50mb"}));
    this.app.use(express.static("public"));
    this.app.use(cors());
  }
}

const app = new Server();

app.start();
