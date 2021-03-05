import { Student } from './student';
import { Teacher } from './teacher';

export interface Database {
    teachers: Teacher[];
    students: Student[];
}
