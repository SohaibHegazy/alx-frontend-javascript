const getListStudentsIds = (listStudents) => {
  if (Array.isArray(listStudents)) {
    return listStudents.map((student) => student.id);
  }
  return [];
};

export default getListStudentIds;
