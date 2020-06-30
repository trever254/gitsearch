import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private usersname: string;
  private apiUrl: string = "https://api.github.com/users/";
  private apiKey: string = environment.accessToken;
  private clientid = 'c2f3fa7846961a1dd9e2'
  private clientsecret = 'a061c133800fb9d1120fc61c0e092a44e59a32d2'

  constructor(private http: HttpClient) {
    console.log("GitService Ready");
    this.usersname = "trever254"
   }
   //Git profiles
   getGitInfo(){
    return this.http.get("https://api.github.com/users/" + this.usersname + "?client_id" + this.clientid + "&client_secret" + this.clientsecret + "?access_token=" + this.apiKey)
  }

  //Git Repos
  getGitRepos() {
    return this.http.get("https://api.github.com/users/" + this.usersname + "/repos?client_id" + this.clientid + "&client_secret" + this.clientsecret + "/repos" + "?access_token=" + this.apiKey)
  }

   updateGit(usersname: string) {
    this.usersname = usersname;
   }
  }
