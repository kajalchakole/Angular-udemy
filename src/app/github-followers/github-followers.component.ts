import { Component, OnInit } from '@angular/core';
import { GithubFollowerService } from '../services/github-follower.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers;
  constructor(private service : GithubFollowerService) { }

  ngOnInit() {
    this.service.getAll().subscribe(followers => {
      this.followers = followers;
    });
  }

}
