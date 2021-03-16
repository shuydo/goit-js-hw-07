// Задание 4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика
//  на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// ================================
// как обратиться к элементу по свойству data-action?

const counterValue={
    value:0,
    increment(){
        // console.log('increment->this',this);
        this.value+=1;
    },
    decrement(){
        // console.log('decrement->this',this);
        this.value-=1;
    },
}
const decrementBtn=document.getElementsByTagName('button')[0];
const incrementBtn=document.getElementsByTagName('button')[1];
const valueEl=document.querySelector('.js-value');

decrementBtn.addEventListener('click',function(){
    counterValue.decrement();
    value.textContent=counterValue.value;
});

incrementBtn.addEventListener('click',function(){
    counterValue.increment();
    value.textContent=counterValue.value;
});
