# Angular X toast message service

Show toast messages (bootstrap alerts) from anywhere in your angular application.
Can be used in Angular 4+ projects.

[Github](https://github.com/speti43/DobozMeetup/tree/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/shared)

[Demo](https://raw.githubusercontent.com/speti43/DobozMeetup/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/shared/demo.png)

## Install
```
npm i ngx-bootstrap-alert-service@latest --save
```
.angular-cli.json : 
```
"apps": [
    {
      ...
    "styles": [
            "styles.css",          
            "../node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
```
## Usage

app.module.ts:
```
import { BootstrapAlertModule } from 'ngx-bootstrap-alert-service';
...
imports: [
    ...
    BootstrapAlertModule
  ]

```



app.component.ts:
```
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';
import { ToastMessageModel } from 'ngx-bootstrap-alert-service';

constructor(private bootstrapAlertService: BootstrapAlertService) {

}

messageList: ToastMessageModel[] = [];

ngOnInit() { 
    this.bootstrapAlertService.getAlertEvent().subscribe(r => {
      this.messageList.push(r);
    });
}

```



app.component.html:
```
<toast-message-component [alerts]="messageList"></toast-message-component>
```


You can now throw messages from anywhere you like, for example from a service:
```
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';

constructor(private bootstrapAlertService: BootstrapAlertService) {

}

someMethod(){
    this.bootstrapAlertService.showError('This is an error!');    
    this.bootstrapAlertService.showInfo('This is an info!');    
    this.bootstrapAlertService.showWarning('This is a warning!');    
    this.bootstrapAlertService.showSucccess('This is a success message!');
}

```