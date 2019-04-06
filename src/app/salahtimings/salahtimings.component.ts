import { Component, OnInit } from '@angular/core';
import { SalahtimingsService } from './salahtimings.service';

@Component({
  selector: 'app-salahtimings',
  templateUrl: './salahtimings.component.html',
  styleUrls: ['./salahtimings.component.css']
})
export class SalahtimingsComponent implements OnInit {

Timings: any;

Date:any;

  constructor(private _salahtimingservice:SalahtimingsService) { }

  ngOnInit() {
  this._salahtimingservice.getSalahTimings().subscribe(
(result)=> {
this.GetTimings(result.data)},
(error:any)=>console.log(error)

  );

  // this._employeeService.getEmployee(this._id).subscribe(
  //   (employee) => this.employee = employee,
  //   (err: any) => console.log(err)
  // );
    
  }

  GetTimings(result)
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    // today = dd + '-' + mm + '/' + yyyy;
    // document.write(today);
this.Date = result.filter(x=>x.date.gregorian.date==dd + '-' + mm + '-' + yyyy)[0].date.readable;
    this.Timings = result.filter(x=>x.date.gregorian.date==dd + '-' + mm + '-' + yyyy)[0].timings;

    console.log(this.Timings)
    console.log(result)

  }

}
