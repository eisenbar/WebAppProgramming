<template>
    <div class="form">
        <v-text-field label="Your Email" v-model="userEmail"></v-text-field>
        <v-text-field type="password" label="Password" v-model="userPassword"></v-text-field>
        <v-container v-show="isLoggedIn === false">
            <v-row justify="end">
                <v-btn @click="doSignUp">SignUp</v-btn>
                <v-btn @click="doSignIn">SignIn</v-btn>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    import { AppAUTH } from "../db-init.js";

    export default{
        data: function(){
            return {
                isLoggedIn: false,
                userEmail: "",
                userPassword: ""
            }
        },
        methods: {
            doSignUp(){
                AppAUTH.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
                .then((u) => {
                    alert("User created with UID " + u.user.uid);

                    this.$router.push({ path: "/budget" });
                })
                .catch((err) => {
                    alert("Error " + err);
                });
            },
            doSignIn(){
                AppAUTH.signInWithEmailAndPassword(this.userEmail, this.userPassword)
                .then((u) => {
                    alert("You logged in as " + u.user.email);

                    this.$router.push({ path: "/budget" });
                })
                .catch((err) => {
                    alert("Error " + err);
                });
            }
        },
        mounted(){
            AppAUTH.onAuthStateChanged((u) => {
                if(u == null) this.isLoggedIn = false;
                else this.isLoggedIn = true;
            });
        }
    }
</script>
<style>
    .form {
        width: 50vw;
        border: 1px solid black;
    }
</style>