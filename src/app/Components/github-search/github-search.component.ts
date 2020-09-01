import { Component, OnInit } from '@angular/core';
import {delay, mapTo} from 'rxjs/operators';
import {GitSearchService} from '../../Services/git-search.service';
import {fromEvent, merge, Observable, of} from 'rxjs';
import {Repository} from '../../Models/repository';
import {User} from '../../Models/user';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {
  isConnected = true;
  gtrepos: Repository[];
  gtusers: User[];
  gtuserdetails: any;
  repodata: boolean;
  online$: Observable<boolean>;
  status: string;
  repodetail: boolean;
  loading = false;


  criteriaArray: string[] = ['Users', 'Repositories'];
  constructor(private gtService: GitSearchService) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
    this.networkStatus();
  }
  public networkStatus(): void {
    this.online$.subscribe(value => {
      if (value) {
        this.isConnected = true;
        this.status = 'ONLINE';
      } else {
        this.isConnected = false;
        this.status = 'OFFLINE';
      }
    });
  }
  findRepos(repoLocation: string): void {
    this.repodetail = true;
    this.loading = true;
    this.gtService.getUserDetails(repoLocation).then(res => {
      this.gtuserdetails = res;
      this.loading = false;
    });
  }

  ngOnInit(): void { }
  performSearch(criteria: string, data: string): void {
    if (criteria === this.criteriaArray[0]) {
      delay(5000);
      this.repodata = false;
      this.repodetail = false;
      this.loading = true;
      this.gtService.searchByUser(data).then(users => {
        this.gtusers = users.items;
        this.loading = false;
      });
    } else {
      this.repodata = true;
      this.repodetail = false;
      this.loading = true;
      this.gtService.searchByRepos(data).then(repos => {
        this.gtrepos = repos.items;
        this.loading = false;
      });
    }
  }

}
