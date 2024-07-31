const getListStudentsIds = (listStudents) => {
  let listStudentIds = [];
  if (Array.isArray(listStudents)) {
    return listStudents.map((student) => student.id);
  }
  return [];
};

export default getListStudentIds;
