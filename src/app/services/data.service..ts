import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../app-errors/app-error';
import { NotFoundError } from '../app-errors/not-found-error';
import { BadRequestError } from '../app-errors/bad-request-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  get() {
    return this.http.get(this.url);
  }

  create(resource: any) {
    return this.http
      .post(this.url, resource)
      .pipe(catchError((error: Response) => this.handleError(error)));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, resource);
  }

  delete(id: string) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError((error: Response) => this.handleError(error)));
  }

  private handleError(error: Response) {
    if (error.status === 404) return throwError(() => new NotFoundError(error));

    if (error.status === 400)
      return throwError(() => new BadRequestError(error));

    return throwError(() => new AppError(error));
  }
}
