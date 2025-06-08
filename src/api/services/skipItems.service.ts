import { SkipItem } from "@/types";
import axiosConfig from "../axiosConfig";

const SKIP_ITEMS_URL = "/skips";
export class SkipItemsService {
    static async getSkipItems(): Promise<SkipItem[]> {
        const response = await axiosConfig.get(`${SKIP_ITEMS_URL}/by-location?postcode=NR32&area=Lowestoft`);
        return response.data;
    }
}