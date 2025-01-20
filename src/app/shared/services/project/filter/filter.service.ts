import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINTS } from 'src/app/utils/url/endpoints-url';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private readonly url = `${environment.route}/${ENDPOINTS.V1.PROJECT_URL.FILTER}`;

  constructor(private http: HttpClient) { }

  filter(
    skip: number = 0,
    limit: number = 25,
    administrativeCenterId: number,
    projectCode?: string,
    status?: string,
    announcementId?: number,
    processSelectionId?: number,
    projectTypeId?: number
  ): Observable<any> {
    let params = new HttpParams()
      .set('skip', skip.toString())
      .set('limit', limit.toString())
      .set('administrativeCenterId', administrativeCenterId.toString());

    if (projectCode) params = params.set('projectCode', projectCode);
    if (status) params = params.set('status', status);
    if (announcementId) params = params.set('announcementId', announcementId.toString());
    if (processSelectionId) params = params.set('processSelectionId', processSelectionId.toString());
    if (projectTypeId) params = params.set('projectTypeId', projectTypeId.toString());

    return this.http.get(this.url, { params });
  }
}
