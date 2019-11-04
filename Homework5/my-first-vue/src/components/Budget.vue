<template>
    <div>
        <h2>Ryan Eisenbarth</h2>
        <div id="expenseform" class="form">
            <v-text-field label="Description" type="text" v-model="expenseDesc" />
            <v-text-field label="Amount" type="number" v-model="expenseAmt" />
            <v-text-field label="Category" type="text" v-model="expenseCat" />
            <v-text-field label="Date" type="date" v-model="expenseDate" />
            <v-btn color="primary" @click="yourButtonHandler">Add</v-btn>
            <v-btn color="primary" @click="remove" v-bind:disabled="userSelections.length == 0">Remove Selection(s)</v-btn>
        </div>
        <table>
            <tbody>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Remove</th>
                <tr v-for="(myExpense,pos) in myExpense" :key="pos">
                    <td>{{myExpense.description}}</td>
                    <td class= "num">{{myExpense.amount}}</td>
                    <td>{{myExpense.date}}</td>
                    <td>{{myExpense.category}}</td>
                    <td>
                        <input type="checkbox" 
                            v-bind:id="myExpense.mykey"
                            v-on:change="selectionHandler" 
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="4">Total: </td>
                    <td>{{ parseFloat(totalExpense).toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { AppDB } from "../db-init.js";
    export default {
        data: function() {
            return {
                userSelections: [],
                myExpense: [],
                totalExpense: 0,
                expenseDesc: "",
                expenseAmt: 0,
                expenseCat: "",
                expenseDate: ""
            };
        },
        methods: {
            yourButtonHandler() {
                //alert(`You enter ${this.expenseAmt}`);
                AppDB.ref("budget")
                    .push()
                    .set({
                        description: this.expenseDesc,
                        amount: this.expenseAmt,
                        date: this.expenseDate,
                        category: this.expenseCat
                    });
            },
            
            fbAddHandler(snapshot) {
                const item = snapshot.val();
                this.myExpense.push({ ...item, mykey: snapshot.key });

                // accumulate the total
                this.totalExpense += parseFloat(item.amount);
            },

            fbRemoveListener(snapshot) {
                /* snapshot.key will hold the key of the item being REMOVED */
                this.myExpense = this.myExpense.filter(z => z.mykey != snapshot.key);
            },

            selectionHandler (changeEvent){
                // The ID of the checkbox is also the key of the record in Firebase
                const whichKey = changeEvent.target.id;
                if (changeEvent.target.checked) {
                    this.userSelections.push(whichKey);
                } else {
                    this.userSelections = this.userSelections.filter(id => id != whichKey);
                }
            },

            remove() {
                this.userSelections.forEach((victimKey) => {
                    AppDB.ref("budget")
                        .child(victimKey)
                        .remove();
                });
            }
        },
        mounted() {
            AppDB.ref("budget").on("child_added", this.fbAddHandler);
            AppDB.ref("budget").on("child_removed", this.fbRemoveListener);
        },

        beforeDestroy(){
            AppDB.ref("budget").off("child_added", this.fbAddHandler);
            AppDB.ref("budget").off("child_removed", this.fbRemoveListener);
        }
    };

</script>
<style>
    .form{
        border: 1px solid black;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr; 
    }

    table{
        border: 1px solid black;
    }
    table th{
        background: rgb(13,66,102);
        color: white;
    }

    table tr:nth-child(even){
        background: rgb(180, 175, 175);
    }
    table tr:nth-child(odd){
        background: rgb(255, 242, 241);
    }

    table tr:last-child{
        color: black;
        text-align: right;
        background: white;
    }

    .num{
        text-align: right;
    }

</style>