import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserModel } from './user.model';
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { ToastMessageModel } from 'ng2-alert-service/toast-message-component/toast-message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css', './app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  users: UserModel[];
  messageList: ToastMessageModel[] = [];


  constructor(private http: Http,
    private bootstrapAlertService: BootstrapAlertService) {

  }

  ngOnInit() {
    this.refreshList();

    this.bootstrapAlertService.getAlertEvent().subscribe(r => {
      this.messageList.push(r);
    })

    this.bootstrapAlertService.showError('This is an error!');


    this.bootstrapAlertService.showInfo('This is an info!');


    this.bootstrapAlertService.showWarning('This is a warning!');


    this.bootstrapAlertService.showSucccess('This is a success message!');
  }

  onSubmit(heroForm: NgForm) {
    let options = new RequestOptions();
    options.headers = new Headers({ 'Content-Type': 'application/json' });
    let data = heroForm.value;
    this.http.post("/api/values", data, options).subscribe(() =>
      this.refreshList()
    );
  }

  refreshList() {
    this.http.get('api/values').subscribe(response => this.users = response.json());
  }

  deleteItem(index) {
    this.http.delete('api/values/' + index).subscribe(() =>
      this.refreshList());
  }
}
