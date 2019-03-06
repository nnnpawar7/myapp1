export interface IEmployee {
    empCode: number;
    Gender: string;
    Name: string;
    Dept: string;
    DOB: Date;
    Address: string;
    Salary: number;
    Contact: number;
    computeSalary?(Salary: number): number;
}

export class Employee implements IEmployee {
    constructor(public empCode: number, public Gender: string, public Name: string,
        public Dept: string, public DOB: Date,
        public Address: string, public Salary: number, public Contact: number) {
    }
}
