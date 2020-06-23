import { Component, OnInit } from '@angular/core';
import { GitService } from '../git/git.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  users: any = [];
  repos: any = [];
  username: string;
  gitProfile: any;
  gitRepos: any;
  updateUser: any;

  constructor(Private : GitService) { }

  ngOnInit(): void {
    this.gitProfile()
      .subscribe((res: any) => {
        //console.log(res)
        this.users = res;
      })

    this.gitRepos()
      .subscribe((data: any) => {
        //console.log(data)
        this.repos = data;
      })
  }
  searchUser() {
    this.updateUser(this.username);

    this.gitProfile()
      .subscribe((res: any) => {
        //console.log(res)
        this.users = res;
      })

    this.gitRepos()
      .subscribe((data: any) => {
        //console.log(data)
        this.repos = data;    
      })
  }


}
