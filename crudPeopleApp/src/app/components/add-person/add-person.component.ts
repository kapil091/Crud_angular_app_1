import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  addPersonForm!: FormGroup;
  file: any;
  url: string | ArrayBuffer;
  peopleListArray:any=[];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.addPersonForm = this.formBuilder.group
    ({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      dob: ['', Validators.required],
      avatar:['',Validators.required],
      // country:['',Validators.required],
     });
  }

  onFileChanged(event: any) 
  {
    this.file = "";
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.url = reader.result;
      };
    }
  }

  submit(){
    if(!this.addPersonForm.invalid)
    console.log(this.addPersonForm.value);
    let obj ={
      'avatar':this.addPersonForm.value.avatar,
      'dob': this.addPersonForm.value.dob,
      'email': this.addPersonForm.value.email,
      'name':this.addPersonForm.value.name
    }
    this.peopleListArray.push(obj);
    console.log(this.peopleListArray);
   localStorage.setItem('peopleList',JSON.stringify(this.peopleListArray));
   this.addPersonForm.reset();
  }
}