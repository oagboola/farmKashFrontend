import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Applicants } from '../applicants';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  // applicant: Applicants[];
  applicant =[];
 
  
  constructor(private bs:  ApplicationService) { }

  ngOnInit() {

    //fetch all applicants on loading of system
    this.bs
    .getApplicants()
      .then((data: any) => {
        this.applicant = data;
        console.log('applicant',this.applicant[1]);
    });
  }


}
