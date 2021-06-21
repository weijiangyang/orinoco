function task1 () {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('1', '我是第一个任务，必须第一个执行');
        resolve('done');
      }, 3000);
    });
  }
   
  /**
   * 第二个任务
   */
  function task2 () {
   
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('2', '第二个任务');
        resolve('done');
      }, 1000)
    });
  }
   
  /**
   * 第三个任务
   */
  function task3 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('3', '第三个任务');
        reject('error');
      }, 1000);
    });
  }
   
  /**
   * 第四个任务
   */
  function task4 () {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('4', '第四个任务');
        resolve('done');
      }, 2000);
    })
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
  