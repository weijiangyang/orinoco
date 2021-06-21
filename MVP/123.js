function task1 () {
    function first(){
        document.getElementById("first").innerText = "i am the first";
        console.log("first")}
    return setTimeout(first,3000);
    
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     console.log('1', '我是第一个任务，必须第一个执行');
    //     resolve('done');
    //   }, 3000);
    // });
  }
   
  /**
   * 第二个任务
   */
  function task2 () {
    function seconde(){
        document.getElementById("seconde").innerText = "i am the seconde";
        console.log("seconde")}
    return setTimeout(seconde,2000);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     console.log('2', '第二个任务');
    //     resolve('done');
    //   }, 1000)
    // });
  }
   
  /**
   * 第三个任务
   */
  function task3 () {
    function third(){
         document.getElementById("third").innerText = "i am the third";
        console.log("third")}
    return setTimeout(third,1000);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('3', '第三个任务');
    //     reject('error');
    //   }, 1000);
    // });
  }
   
  /**
   * 第四个任务
   */
  function task4 () {
      function forth(){
          document.getElementById("forth").innerText = "i am the forth";
            console.log("forth")}
      return setTimeout(forth,500);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     console.log('4', '第四个任务');
    //     resolve('done');
    //   }, 2000);
    // })
  }
   
  /**
   * 所有任务
   */
  async function allTasks () {
    await task1();
    await task2();
    await task3();
    await task4();
  }
   
  // 执行任务
  allTasks();
  