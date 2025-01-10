import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/utils/url/endpoints-url';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterProcessSelectionService {

  private url = `${environment.route}/${ENDPOINTS.V1.ADMIN_URL.FILTER_PROCESS_SELECTION_LIST}`;

  constructor(private http: HttpClient) { }

  getAll(pageSize: number, pageNumber: number): Observable<any> {
    const headers = {
      'message-uuid': '<uuid>',
      'request-app-id': '<uuid>',
      'Accept': 'application/json'
    };
    const params = {
      pageSize: pageSize.toString(),
      pageNumber: pageNumber.toString()
    };

    return this.http.get(this.url, { headers: headers, params: params });
  }
}
