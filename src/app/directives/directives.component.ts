import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  // courses = [1, 2];
  viewMode = 'map';

  courses: any;

  // onAdd() {
  //   this.courses.push({ id: 4, name: 'course4' });
  // }

  // onRemove(course: any) {
  //   this.courses.splice(this.courses.indexOf(course), 1);
  // }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }
}
