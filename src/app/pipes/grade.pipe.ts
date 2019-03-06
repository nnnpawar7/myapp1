import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'grade'
})

export class GradePipe implements PipeTransform {
  transform(marks: number) {
    if (marks >= 75) {
      return ('Dist: ' + marks)
    } else if (marks >= 60) {
      return ('First: ' + marks)
    } else if (marks >= 55) {
      return ('Heigher Second: ' + marks)
    } else if (marks >= 50) {
      return ('Second: ' + marks)
    } else {
      return ('Pass: ' + marks)
    }
  }
}
