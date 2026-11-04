//exe1
console.log("------ exe1 ------");
function getUser(userId) {
  fetch("https://jsonplaceholder.typicode.com/users/" + userId).then((res) => {
    res.json().then((data) => {
      console.log(data.name);
    });
  });
}

getUser(2);

//exe2
console.log("------ exe2 ------");
async function getPost(postId) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
  );
  const data = await res.json();
  console.log(`Post title: ${data.title}`);
}

getPost(5);

//exe3
console.log("------ exe3 ------");

function getUserEmail(userId) {
  fetch("https://jsonplaceholder.typicode.com/users/" + userId).then((res) => {
    res.json().then((data) => {
      console.log(`User's Email: ${data.email}`);
    });
  });
}

getUserEmail(3);

//exe4
console.log("------ exe4 ------");
async function listUserTodos(userId) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=" + userId,
  );
  const data = await res.json();
  const tasks_user = data.filter((task) => {
    return task.completed === false;
  });
  console.log(`User ${userId} has ${tasks_user.length} todos`);
}

listUserTodos(2);

//exe5
console.log("------ exe5 ------");
async function checkPostExists(postId) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postId,
    );
    const data = await res.json();
    if (res.status === 404) {
      throw new Error("Post not found");
    } else {
      console.log("Post exists");
    }
  } catch (error) {
    console.error("Post not found", error);
  }
}

checkPostExists(20);

//exe6
console.log("------ exe6 ------");
function fetchWithDelay(url, delay) {
  setTimeout(() => {
    fetch(url).then((res) => {
      res.json().then((data) => {
        console.log(JSON.stringify(data).slice(0, 50));
      });
    });
  }, delay);
}

fetchWithDelay("https://jsonplaceholder.typicode.com/posts/", 2000);

//exe7
console.log("------ exe7 ------");
async function showKeys(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(Object.keys(data[0]));
}

showKeys("https://jsonplaceholder.typicode.com/posts/");

//exe8
console.log("------ exe8 ------");
async function getUserFirstPost(userId) {
  const user = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId,
  );
  const user_posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
  );

  const posts_arr = await user_posts.json();
  console.log(`first post title of user ${userId}: ${posts_arr[0]["title"]}`);
}

getUserFirstPost(2);

//exe9
console.log("------ exe9 ------");
async function getPostCommentsCount(postId) {
  const res_comments = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + postId,
  );
  const res_comments_arr = await res_comments.json();

  console.log(`Post ${postId} has ${res_comments_arr.length} comments`);
}

getPostCommentsCount(1);

//exe10
console.log("------ exe10 ------");
async function todoAndUser(todoId) {
  const todo_res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + todoId,
  );

  const todo = await todo_res.json();
  const user_id = todo.userId;
  const user_res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + user_id,
  );

  console.log(await user_res.json());
}

todoAndUser(1);
