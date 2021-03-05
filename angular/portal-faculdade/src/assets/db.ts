import { Database } from "src/app/shared/models/database";

export function getData() {
    return _dataBase;
}

export function setData(data: Database) {
    _dataBase = data;
}

let _dataBase: Database = {
    teachers: [
        { name: 'Professor1', age: 25, email: 'professor1@email.com', discipline: 'Análise' },
        { name: 'Professor2', age: 24, email: 'professor2@email.com', discipline: 'Desenvolvimento' },
        { name: 'Professor3', age: 23, email: 'professor3@email.com', discipline: 'Sistemas' },
    ],
    students: [
        { name: 'Aluno1', age: 25, email: 'aluno1@email.com', course: 'Análise' },
        { name: 'Aluno2', age: 24, email: 'aluno2@email.com', course: 'Desenvolvimento' },
        { name: 'Aluno3', age: 23, email: 'aluno3@email.com', course: 'Sistemas' },
    ]
};
