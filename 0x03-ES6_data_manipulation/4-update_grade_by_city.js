export default function updateStudentGradeByCity(
	  students,
	  city,
	  newGrades,
) {
	  const StudentsFilter = students.filter(
		      (student) => student.location === city,
		    );

	  const StudentsGrades = StudentsFilter.map(
		      (student) => {
			            for (const GradeInfo of newGrades) {
					            if (student.id === GradeInfo.studentId) {
							              student.grade = GradeInfo.grade; // eslint-disable-line
							            }
					          }
			            if (student.grade === undefined) {
					            student.grade = 'N/A'; // eslint-disable-line
					          }
			            return student;
			          },
		    );

	  return StudentsGrades;
}
