import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticleService, HttpClient],
})
export class ArticlesComponent implements OnInit {
  articles$!: Article[];
  constructor(private api: ArticleService) {}

  ngOnInit() {
    this.api.getArticles().subscribe((articles: Article[]) => {
      this.articles$ = articles;
    });
  }
}
