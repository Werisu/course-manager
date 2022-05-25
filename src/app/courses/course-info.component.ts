import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course!: Course;
  courseId: number;

  constructor(private activetedRoute: ActivatedRoute, private courseService: CourseService){
    this.courseId = parseInt(this.activetedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
     this.courseService.retrieveById(this.courseId).subscribe({
       next: couse => this.course = couse,
       error: e => console.log(e)
     });
  }

  save(){
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with sucess', course),
      error: err => console.log(err)
    });
  }

}
