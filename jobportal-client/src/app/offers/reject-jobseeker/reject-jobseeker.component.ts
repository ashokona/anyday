import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-reject-jobseeker',
  templateUrl: './reject-jobseeker.component.html',
  styleUrls: ['./reject-jobseeker.component.css']
})
export class RejectJobseekerComponent implements OnInit {

  id: String;
  success: String;
  error: Object;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loader: LoaderService

  ) {
    this.loader.display(true);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.userService.rejectJobseeker(this.id).subscribe(res => {
      this.loader.display(false);
      this.success = res.message;
    },
      err => {
        this.loader.display(false);
        this.error = err;
      });
  }

  ngOnInit() {
  }

}