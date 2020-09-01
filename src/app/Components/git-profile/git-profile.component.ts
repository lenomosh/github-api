import { Component, OnInit } from '@angular/core';
import {GitSearchService} from '../../Services/git-search.service';
import {merge, of, fromEvent, Observable} from 'rxjs';
import {mapTo} from 'rxjs/operators';
import {User} from '../../Models/user';
import {Repository} from '../../Models/repository';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.scss']
})
export class GitProfileComponent implements OnInit {

  online$: Observable<boolean>;
  status: string;
  isConnected = true;
  details: User;
  repos: Repository[];
  loading = false;

  constructor(private gitSearchService: GitSearchService) {
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

  ngOnInit(): void {
    this.loading =  true;
    this.gitSearchService.getMyInfo().then(data => {
      this.details = data;
    });
    this.gitSearchService.getMyRepos().then(repos => {
      this.repos = repos;
      this.loading = false;
    });
  }

}
