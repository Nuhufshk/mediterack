import { Request, Response } from "express";
import { asyncWrapper } from "../utils";
import { DashboardService } from "../services/dashboard.service";

class DashboardController {
    private readonly dashboardService: DashboardService;

    constructor() {
        this.dashboardService = new DashboardService();
    }

    public getDashboardDataHandler = asyncWrapper(async (req: Request, res: Response) => {
        const data = await this.dashboardService.getDashboardData();
        res.json({ status: true, data });
    });
}

export default new DashboardController();
