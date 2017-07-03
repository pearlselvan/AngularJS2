import  {Component } from '@angular/core'


@Component ( {
    selector :  'emp-cmp',
    templateUrl: 'emp-component.html',
    styleUrls: ['../app.component.css']
}

)

export class Todo {
    fname : String = "Muthu Web Developer"
    lname : String = "Web Developer"
    phone : String = "9292668848"
}
