import AuthService from "./auth-service";
import ProjectsService from "./projects-service";
import RecordsService from "./records-service";

const authService = new AuthService();
const recordsService = new RecordsService();
const projectsService = new ProjectsService();

export { authService, recordsService, projectsService };
