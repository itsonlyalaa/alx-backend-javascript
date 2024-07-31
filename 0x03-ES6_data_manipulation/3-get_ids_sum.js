export default function getStudentIdsSum(students) {
	  return students.reduce((val, student) => val + student.id, 0);
}
