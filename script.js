var arr=[];
var id1=1;
var studentId=null;
function Student(name,email,gpa,age,degree){
    this.id=id1++;
    this.name=name;
    this.email=email;
    this.gpa=gpa;
    this.age=age;
    this.degree=degree;
}
const form=document.getElementById("form");
const tableEl=document.querySelector("table");
const searchEl=document.getElementById("searchInput");
function mySubmission(e,id3){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const gpa=document.getElementById("gpa").value;
    const age=document.getElementById("age").value;
    const degree=document.getElementById("degree").value;

    if(studentId!=null){
        for(i of arr){
                if(i.id==studentId){
                    i.name=name;
                    i.email=email;
                    i.gpa=gpa;
                    i.age=age;
                    i.degree=degree;
                    break;
                }
        }
        console.log("after edit",arr);
        updateTable();
        document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("gpa").value="";
    document.getElementById("age").value="";
    document.getElementById("degree").value="";
    document.getElementById("submit").innerHTML="Add Student"
    studentId=null;
    return;
    }    
 
    const student=new Student(name,email,gpa,age,degree);
    arr.push(student);
    
    
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("gpa").value="";
    document.getElementById("age").value="";
    document.getElementById("degree").value="";
    updateTable();
    console.log("data added",arr)
  
}

function updateTable(){
    const tbodye=document.querySelector('tbody');
    tbodye.innerHTML="";
    for(student of arr){
    tbodye.innerHTML+=`
    <td>{student.id}</td>
    <td>{student.name}</td>
    <td>{student.email}</td>
    <td>{student.age}</td>
    <td>{student.gpa}</td>
    <td>{student.degree} <span><i class="fa-solid fa-pen-to-square edit" id="edit"></i>
    <i class="fa-solid fa-trash-can delete" id="delete"></i><span>
    </td> ` 
    }

}



form.addEventListener('submit',mySubmission);
