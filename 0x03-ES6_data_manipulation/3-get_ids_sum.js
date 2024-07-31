const getStudentIdsSum = (students) => students.reduce((sum, { id }) => sum + id, 0);

export default getStudentIdsSum;
