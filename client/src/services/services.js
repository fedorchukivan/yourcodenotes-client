import AuthService from "./auth-service";
import ProjectsService from "./projects-service";
import RecordsService from "./records-service";
import { Http } from "./http-service";

const http = new Http()
const authService = new AuthService(http);
const recordsService = new RecordsService(http);
const projectsService = new ProjectsService(http);

export { authService, recordsService, projectsService };
