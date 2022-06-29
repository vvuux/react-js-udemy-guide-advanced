import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button"
import styles from "./AddUser.module.css";

const AddUser = props => {
    const [enterUserName, setEnterUserName] = useState('');
    const [enterAge, setEnterAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enterUserName.trim().length === 0 || enterAge.trim().length === 0){
            return;
        }
        if (+enterAge < 1){
            return
        }
        props.addUserHandler({
            id: Math.random().toString(),
            name: enterUserName,
            age: enterAge
        })

        setEnterAge('');
        setEnterUserName('');
    }

    const userNameChangeHandler = (e) => {
        setEnterUserName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnterAge(e.target.value);
    };

    return (
        <Card className={styles.input}>        
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    onChange={userNameChangeHandler}
                    value={enterUserName}
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                    type="number" 
                    id="age" 
                    onChange={ageChangeHandler}
                    value={enterAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>

    )
};

export default AddUser;