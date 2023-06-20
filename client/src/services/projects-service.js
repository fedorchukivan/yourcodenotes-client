import { ApiPath } from "../common/enums/api-path";
import { HttpMethod } from "../common/enums/http-methods";
import { ProjectRoutes } from "../common/enums/project-routes";
import { serverConfig } from "../config";

export default class ProjectsService {
  constructor(http) {
    this.http = http;
  }

  getProjectsOfUser() {
    return this.http.load(this._getUrl(ProjectRoutes.PROJECTS), {
      method: HttpMethod.GET
    });
  }

  getSharedProjects() {
    return this.http.load(this._getUrl(ProjectRoutes.SHARED), {
      method: HttpMethod.GET
    });
  }

  addProject(payload) {
    return this.http.load(this._getUrl(ProjectRoutes.CREATE), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  addSection(payload) {
    return this.http.load(this._getUrl(ProjectRoutes.CREATE_SECTION), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  removeSection(id) {
    return this.http.load(this._getUrl(ProjectRoutes.DELETE_SECTION + '/' + id), {
      method: HttpMethod.DELETE
    });
  }

  removeProject(id) {
    return this.http.load(this._getUrl(ProjectRoutes.DELETE_PROJECT + '/' + id), {
      method: HttpMethod.DELETE
    });
  }

  addUser(payload) {
    return this.http.load(this._getUrl(ProjectRoutes.ADD_PARTICIPANT), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  removeUser(payload) {
    return this.http.load(this._getUrl(ProjectRoutes.REMOVE_PARTICIPANT), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  _getUrl(path = '') {
    return `${serverConfig.API}${ApiPath.PROJECT}${path}`;
  }
}