import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  data: any;
  public forecasts: WeatherForecast[];

  constructor(private postData: PostsService) {
  
  }
  ngOnInit() {
    this.postData.getPosts().subscribe((result) => {
      console.warn("result", result)
      this.data = result
    })
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
