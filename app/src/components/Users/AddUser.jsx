import React, {useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
    // const [enterUserName, setEnterUserName] = useState('');
    // const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        const enterUserName = nameInputRef.current.value;
        const enterAge = ageInputRef.current.value;
        if (enterUserName.trim().length === 0 || enterAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (+enterAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (> 0)."
            })
        }
        props.addUserHandler({
            id: Math.random().toString(),
            // name: enterUserName,
            // age: enterAge
            name: nameInputRef.current.value,
            age: ageInputRef.current.value
        })

        // setEnterAge('');
        // setEnterUserName('');
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }

    // const userNameChangeHandler = (e) => {
    //     setEnterUserName(e.target.value);
    // };

    // const ageChangeHandler = (e) => {
    //     setEnterAge(e.target.value);
    // };

    const clearModalClick = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal clearModalClick={clearModalClick} title={error.title} message={error.message}/>
            }
            <Card className={styles.input}>        
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        // onChange={userNameChangeHandler}
                        // value={enterUserName}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        type="number" 
                        id="age" 
                        // onChange={ageChangeHandler}
                        // value={enterAge}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
};

export default AddUser;