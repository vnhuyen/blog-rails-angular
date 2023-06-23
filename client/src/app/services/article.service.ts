import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  url: string = 'http://127.0.0.1:3000';
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + '/api/v1/articles');
  }
}
