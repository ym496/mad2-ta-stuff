// Global scope variable
var level = 'global';

const school = {
  level: 'school',

  getSchoolLevel: function() {
    console.log(`1. School Level: ${this.level}`);
    return 'helllo'
  },

  getClassroom: function() {
    
    const classroom = {
      level: 'classroom',
      getClassroomLevel: () => {
        console.log(`2. Classroom's Perspective: ${this.level}`);
      },
      getStudent: function() {
        const student = {
          level: 'student',
          getStudentLevel: function() {
            return this.level;
          }
        };
        console.log(`3. Direct Student Call: ${student.getStudentLevel()}`);
        setTimeout(() => {
          console.log(`6. After Delay, who am I?: ${this.level}`);
        }, 10);
        return student.getStudentLevel;
      }
    };
    return classroom;
  }
};

// --- Execution ---
// console.log(school.level);
// const getschool = school.getSchoolLevel;
// console.log(getschool);

school.getSchoolLevel();

const myClassroom = school.getClassroom();
myClassroom.getClassroomLevel();

const getStudentLevelFunc = myClassroom.getStudent();

console.log(`4. Context Call: ${getStudentLevelFunc()}`);
// console.log(`5. Borrowed Context Call: ${getStudentLevelFunc.call(school)}`);
