import { Request, Response } from "express";
import { profileService } from "../../../services/user/profileSession";

const profileController = async (req: Request, res: Response) => {
    const user = await profileService(req.userId);

    return res.status(200).json(user);
};

export { profileController };