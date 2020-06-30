import { Component, OnInit } from '@angular/core';
import { GitService } from '../git/git.service';
import{NgProgressHttpClientModule} from '@ngx-progressbar/http-client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  users: any=[];
  repos: any=[];
  username: string;

  constructor(private gitService: GitService) { 
    this.gitService.getGitInfo().subscribe(users =>{
      console.log(users);
      this.users = users;
    });
    this.gitService.getGitRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
  }
  findGit(){
    this.gitService.updateGit(this.username);
    this.gitService.getGitInfo().subscribe(users =>{
      console.log(users);
      this.users=users
    });
    this.gitService.getGitRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
    this.gitService.getGitInfo()
      .subscribe(users => {
        //console.log(res)
        this.users = users;
      })

    this.gitService.getGitRepos()
      .subscribe(repos => {
        //console.log(data)
        this.repos = repos;
      })
  }

  searchUser() {
    this.gitService.updateGit(this.username);

    this.gitService.getGitInfo()
      .subscribe(users=> {
        //console.log(res)
        this.users = users;
      })

    this.gitService.getGitRepos()
      .subscribe(repos => {
        //console.log(data)
        this.repos = repos;
      })
  }

}
