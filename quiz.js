//Класс, который представляет сам тест
class Quiz
{
   constructor(type, questions, results)
   {
       //Тип теста: 1 - класичний текст з правильними відповідями, 2 - тест без правильних відповідей
       this.type = type;
       //Масив з питаннями
       this.questions = questions;
       //Масив з можливими результатами
       this.results = results;
       //Кількість набраних очок
       this.score = 0;
       //Номер результата з масива
       this.result = 0;
       //Номер питання
       this.current = 0;
   }
 
   Click(index)
   {
       //Додаємо очки
       let value = this.questions[this.current].Click(index);
       this.score += value;
 
       let correct = -1;
 
       //Якщо додано хоч 1 очко, то відповідб вважємо правильною
       if(value >= 1)
       {
           correct = index;
       }
       else
       {
           //Інакше шукаєм, яка відповідь була правильною
           for(let i = 0; i < this.questions[this.current].answers.length; i++)
           {
               if(this.questions[this.current].answers[i].value >= 1)
               {
                   correct = i;
                   break;
               }
           }
       }
 
       this.Next();
 
       return correct;
   }
 
   //Переходимо до наступного питання
   Next()
   {
       this.current++;
      
       if(this.current >= this.questions.length)
       {
           this.End();
       }
   }
 
   //Перевірка отриманого результату
   End()
   {
       for(let i = 0; i < this.results.length; i++)
       {
           if(this.results[i].Check(this.score))
           {
               this.result = i;
           }
       }
   }
}
 
//Клас, який представляє питання
class Question
{
   constructor(text, answers)
   {
       this.text = text;
       this.answers = answers;
   }
 
   Click(index)
   {
       return this.answers[index].value;
   }
}
 
//Клас, який представляє відповідь
class Answer
{
   constructor(text, value)
   {
       this.text = text;
       this.value = value;
   }
}
 
//Клас, який представляє результат
class Result
{
   constructor(text, value)
   {
       this.text = text;
       this.value = value;
   }
 
   //Цей метод перевіряє, чи достатньо очок набрано
   Check(value)
   {
       if(this.value <= value)
       {
           return true;
       }
       else
       {
           return false;
       }
   }
}