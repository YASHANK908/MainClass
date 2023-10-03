import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  status="false";
  color="red";

  Color=['red','blue','green']
  public getdata(a:any){
if(a%2==0){
  this.status="true"
}
else{
  this.status="false"
}
  }
//   a=prompt('enter a')
//   b=prompt('enter b')
// c=50

//  inc(){
//    this.c+=1
//  }
// swap(){
//   let temp= this.a
//   this.a=this.b
//   this.b=temp
// }

// name="yashank"
// mother_name="sunita pant "
// father_name="Vimal pant"

// fun(){
//   console.log("hello")
// }

 
// numbers=[1,2,3,4,5,6,7,8,9,10]
// numbrev=[10,9,8,7,6,5,4,3,2,1]
// a=50

// inc(){
//   this.a+=1
// }

// dec(){
//   this.a-=1
// }
//   reverse:any
// rev(){
 
//   let result = 0;
  
  
//   result = Number(String(this.a).split('').reverse().join(''));

  
  
//   alert("Reversed number is : "+result);
  
// } 

// fac(){
//   let fac=1;
//   for(let i=1;i<=this.a;i++){
//     fac=fac*i
//   }
//   alert("factorial of a:"+fac)

// }
 
 // program to check if a number is prime or not

// take input from the user
// prime(){
// let isPrime = true;

// check if number is equal to 1
// if (this.a === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// check if number is greater than 1
// else if (this.a > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < this.a; i++) {
//         if (this.a % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         alert(`${this.a} is a prime number`);
//     } else {
//         alert(`${this.a} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     alert("The number is not a prime number.");
// }}



  
}
