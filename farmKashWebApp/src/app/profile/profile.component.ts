import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  applicant: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs:  ApplicationService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    //fetch all info on a particular Id
    this.route.params.subscribe(params => {
      this.bs.getApplicantsId(params['id']).then(res => {
        this.applicant = res;
        console.log('this.applicant',this.applicant)
    });
  });

  }

  click(){
    alert('Email sent');
  }

}
