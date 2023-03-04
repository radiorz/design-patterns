class Student {
  rollNo: string = "";
  name: string = "";
}

interface RenderProps {
  studentName: string;
  studentRollNo: string;
}
class StudentView {
  render(props: RenderProps): void {
    console.log(`stude`, props.studentName);
    console.log(`stude`, props.studentRollNo);
  }
}
class StudentController {
  constructor(public modal: Student, public view: StudentView) {}
  updateView(): void {
    this.view.render({
      studentName: this.modal.name,
      studentRollNo: this.modal.rollNo,
    });
  }
  setStudentName(name: string): void {
    this.modal.name = name;
  }
  getStudentName(): string {
    return this.modal.name;
  }
  setStudentRollNo(rollNo: string): void {
    this.modal.rollNo = rollNo;
  }
  getStudentRollNo(): string {
    return this.modal.rollNo;
  }
}
function getModal(): Student {
  const student = new Student();
  student.name = "张三";
  student.rollNo = "123";
  return student;
}
const model = getModal();
const view = new StudentView();
const controller = new StudentController(model, view);
controller.updateView();
controller.setStudentName("john");
controller.updateView();
