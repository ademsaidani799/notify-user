import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotifyUser';
  onSuccess(){
    Swal.fire("Awesome","you have completed the course.","success")

  }
  onError(){
    Swal.fire("Oops","An error occured.","error")

  }

  onWarning(){
    Swal.fire("Warning", "be aware !", "warning")
  }
}
