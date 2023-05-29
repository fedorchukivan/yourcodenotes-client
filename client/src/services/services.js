import AuthService from "./auth-service";
import RecordsService from "./records-service";

const authService = new AuthService();
const recordsService = new RecordsService();

export { authService, recordsService };
