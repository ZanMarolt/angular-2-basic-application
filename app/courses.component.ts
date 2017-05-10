/**
 * Created by zanmarolt on 5/10/17.
 */
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
        <h2 [class.active]="isActive ? 'active' : ''">Courses</h2>
        {{ title }}
        <input autoGrow />
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title:string = "The title of courses page";
    courses;
    isActive = true;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}