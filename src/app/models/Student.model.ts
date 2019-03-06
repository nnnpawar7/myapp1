export class StudentModel {
  constructor(
    public fname: string,
    public dob: string,
    public email: string,
    public address: object,
    public gender: string,
    public ID: number,
    public isactive: boolean,
    public grade: object,
    public contact: number,
    public PhotoPath: string,
    public PhotoPreview: boolean
    
  ) {

  }
}
