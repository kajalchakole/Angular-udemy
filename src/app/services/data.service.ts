import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(data){
    return this.http.post(this.url, JSON.stringify(data))
    .map(response => response.json())
    .catch(this.handleError);
  }

  update(data){
    return this.http.patch(this.url + '/' + data.id, JSON.stringify({isRead : true}))
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error) {
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    if(error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
