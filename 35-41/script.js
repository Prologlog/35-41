let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
   ];
   let answer1 = document.querySelector('#answer1')
   let answer2 = document.querySelector('#answer2')
   let answer3 = document.querySelector('#answer3')
   let button = document.querySelector('#button')
   button.addEventListener('click', function() {
           let a = answer1.value
           if (a === answers[0]) {
               answer1.style.border = '2px solid green';
           } else {
               answer1.style.border = '2px solid red';
           }
           let b = answer2.value
           if (b === answers[1]) {
            answer2.style.border = '2px solid green';
        } else {
            answer2.style.border = '2px solid red';
        }
        let c = answer3.value
           if (c === answers[2]) {
            answer3.style.border = '2px solid green';
        } else {
            answer3.style.border = '2px solid red';
        }
   })