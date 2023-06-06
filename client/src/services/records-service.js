import { ApiPath } from "../common/enums/api-path";
import { HttpMethod } from "../common/enums/http-methods";
import { RecordRoutes } from "../common/enums/record-routes";
import { serverConfig } from "../config";

export default class RecordsService {
  constructor(http) {
    this.http = http;
  }

  getUserRecords(payload) {
    return this.http.load(this._getUrl(RecordRoutes.RECORDS), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  getPublicRecords(payload) {
    return this.http.load(this._getUrl(RecordRoutes.OPEN_DB), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  getSectionRecords(payload) {
    return this.http.load(this._getUrl(RecordRoutes.OF_SECTION + '/' + payload.sectionId), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  addRecord(payload) {
    return this.http.load(this._getUrl(RecordRoutes.CREATE), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    });
  }

  removeRecord(id) {
    return this.http.load(this._getUrl(RecordRoutes.DELETE + '/' + id), {
      method: HttpMethod.DELETE
    });
  }

  updateRecord(payload) {
    return this.http.load(this._getUrl(RecordRoutes.UPDATE), {
      method: HttpMethod.UPDATE,
      contentType: 'application/json',
      payload
    });
  }

  unpublishRecord(recordId) {
    return this.http.load(this._getUrl(RecordRoutes.UNPUBLISH + '/' + recordId), {
      method: HttpMethod.UPDATE,
      contentType: 'application/json',
      payload: {}
    });
  }
  
  _getUrl(path = '') {
    return `${serverConfig.API}${ApiPath.RECORD}${path}`;
  }
}