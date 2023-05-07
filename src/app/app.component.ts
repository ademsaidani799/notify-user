import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotifyUser';

  constructor(private toastrService:ToastrService){}
  onSuccess(){
    Swal.fire("Awesome","you have completed the course.","success")

  }
  onError(){
    Swal.fire("Oops","An error occured.","error")

  }

  onWarning(){
    Swal.fire("Warning", "be aware !", "warning")
  }

  onConfirm(){
    Swal.fire({  title: 'Are you sure?',
    html: "If you delete this you cannot revert it? are you sure you want to delete?",
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`}).then((res)=>{
      console.log(res)
      if(res.isConfirmed){
        Swal.fire("Deleted");
      }
    })

  }

  onToastrSuccess(){
     

    this.toastrService.success("you succeeded")
  }
  onToastrError(){
    this.toastrService.error("better luck next time")

  }
}
