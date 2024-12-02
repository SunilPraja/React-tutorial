import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function TextForm({showAlertMsg, heading, darkMode }) {
    const [text, setText] = useState("Enter your text here");

    // Convert text to uppercase
    const changeToUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
      showAlertMsg("UpperCase success", "info");
    };

    const changeToLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlertMsg("LowerCase success", "info");
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        // alert("Text copied to clipboard!");
        showAlertMsg("Text copied to clipboard!", "info");
    };

    const changeToClear = () => {
        let newText = "";
        setText(newText);
        showAlertMsg("Text Cleared!", "info");
    };

    // Update text on change
    const handleChange = (event) => {
        setText(event.target.value);
    };

    // Clear placeholder text on first click
    const handleTextClick = () => {
        if (text === "Enter your text here") {
            setText("");
        }
    };
    const isTextEmpty = text.trim().length === 0;

    return (
        <>
            <div className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Container className={`p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                    <Form className='my-3'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h3'>{heading}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                value={text}
                                onClick={handleTextClick}  // Clear text on first click
                                onChange={handleChange}   // Update text as user types
                                className={darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}
                            />
                        </Form.Group>
                        <Button onClick={changeToUppercase} disabled={isTextEmpty}> Uppercase</Button>
                        <Button className='mx-2' onClick={changeToLowercase} disabled={isTextEmpty}> Lowercase</Button>
                        <Button onClick={changeToClear} disabled={isTextEmpty}> Clear  Text</Button>
                        <Button className='mx-2' onClick={copyToClipboard} disabled={isTextEmpty}> Copy text</Button>
                    </Form>
                </Container>
                <Container className={ ` pb-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
                    <p><b>{text.split(/\s+/).filter((text)=>text.length).length} </b> Word and <b>{text.length} </b> Charector</p>
                    <h3 className='my-4'>Overwiew</h3>
                    <p>{text}</p>
                </Container>
            </div>
        </>
    );
}
