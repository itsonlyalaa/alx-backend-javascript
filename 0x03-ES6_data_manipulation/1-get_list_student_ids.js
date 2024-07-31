export default function getListStudentIds(studentList) {
	  let NewStudentArray = [];
	  if (studentList instanceof Array) {
		      NewStudentArray = studentList.map((student) => student.id);
		    }

	  return NewStudentArray;
}
