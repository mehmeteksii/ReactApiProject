import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import alertify from "alertifyjs"
function FormDemo2() {
    const [{ email, password, city, description }, setFormState] = useState({
        email: "",
        password: "",
        city: "",
        description: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        alertify.success(email + " added to db")
        alertify.success(password + " added to db")
        alertify.success(city + " added to db")
        alertify.success(description + " added to db")

    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormState((prevState) => (
            {
                ...prevState, [name]: value
            }
        ))
    }

    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter email" onChange={handleChange}> </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter password" onChange={handleChange}> </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Enter description" onChange={handleChange}> </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="select" name="city" id="city" onChange={handleChange}>
                        <option>Ankara</option>
                        <option>İstanbul</option>
                        <option>İzmir</option>
                        <option>Adana</option>
                        <option>Diyarbakır</option>
                    </Input>
                </FormGroup>

                <Button type="submit">Save</Button>
            </Form>


        </div>
    )
}

export default FormDemo2