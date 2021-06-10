<template>
<!--   <h1>Users</h1>
  <UsersTable v-if="users.length" :users="users" />
  <div v-if="usersLoadingError">{{ usersLoadingError }}</div>
 -->
<!--   <head class="main" >
  <meta name="viewport" content="width=device-width, initial-scale=1">

  </head> -->
  <body class="user">

    <h1 class="title">Login </h1>

    <form action="/action_page.php" method="post">
      <div class="imgcontainer">
        <img src="../assets/img_avatar2.png"  alt="Avatar" class="avatar">
      </div>

      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
            
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>

      <div class="container" >
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>

  </body>

</template>

<script>
// @ is an alias to /src
import UsersTable from "@/components/UsersTable.vue";
import axios from "axios";

export default {
  name: "Users",
  components: {
    UsersTable,
  },
  data: function () {
    return {
      users: [],
      usersLoadingError: "",
    };
  },

  methods: {
    fetchUsers: function () {
      axios
        .get(`${process.env.VUE_APP_BACKEND_BASE_URL}/users`)
        .then((response) => {
          this.users = response.data.users;
        })
        .catch((error) => {
          this.usersLoadingError = "An error occured while fetching users.";
          console.error(error);
        });
    },
  },
  mounted: function () {
    this.fetchUsers();
  },
};
</script>
<style>
.user {
  background-color:black; 
  opacity: 0.9;
  padding: 15px;
}
.title {
  padding-top: 10px;
  padding: 20px;
  color:#f1bf19; 
  text-align:center;
}
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #f1bf19;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
  color: white;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>