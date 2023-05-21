const btn = document.getElementById('btn');
const birthday = document.getElementById("birthday");
const result = document.getElementById('result');

function calculateAge(){
    const birthdayValue = birthday.value;
    if(birthdayValue === ''){
        document.getElementById('show').style.display = 'block';
        const message = document.getElementById('message').innerText = `Please enter your birthday`;
    }else{
        document.getElementById('show').style.display = 'none';
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(month < 0){  
        age --;
    }
    return age;
}

btn.addEventListener('click',calculateAge);