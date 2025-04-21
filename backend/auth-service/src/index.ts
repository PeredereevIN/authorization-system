import "dotenv/config";

import connectDatabase from "./database/database";

import authRoutes from "./router/auth.routes";

import { config } from "./configuration/app.config";
import { HTTPSTATUS } from "./configuration/http.config";

import passport from "./middleware/passport.middleware";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { asyncHandler } from "./middleware/asyncHandler.middleware";

import cors from "cors";
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: config.APP_ORIGIN,
        credentials: true,
    })
);

app.use(cookieParser());
app.use(passport.initialize());

app.get(
    "/",
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        res.status(HTTPSTATUS.OK).json({
            message: "Здравствуйте, пользователи!!!",
        });
    })
);

app.use(`${BASE_PATH}/auth`, authRoutes);

app.use(errorHandler);

app.listen(config.PORT, async () => {
    console.log(`Сервер прослушивает порт ${config.PORT} в ${config.NODE_ENV}`);
    await connectDatabase();
});
