import { useState, useEffect } from 'react';

// import sample from './sample.json';

// const { id, code, name, description, instructions, thankyou, copyright, questions} = sample;


const RadioButton = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

function SampleSurvey() {
    const [reason, setReason] = useState(-Infinity);
    const [tool, setTool] = useState(-Infinity);
    const [why, setWhy] = useState('');
    const [firstName, setFirstName] = useState('');
    //     const [email, setEmail] = useState('');
    //     const [phoneNumber, setPhoneNumber] = useState('');
    //     const [phoneType, setPhoneType] = useState('');
    //     const [bio, setBio] = useState('');
    //     const [staff, setStaff] = useState('');;
    //     const [emailNotifications, setEmailNotifications] = useState(true);

    const [hasSubmitted, setHasSubmitted] = useState(false);
    //     const [validationErrors, setValidationErrors] = useState({});

    //     const handleChangeEmailNotifications = () => {
    //         setEmailNotifications(!emailNotifications);
    //     };

    // useEffect(() => {
    //     const errors = {};
    // if (!name.length) errors['name'] = 'Please enter your Name';
    // if (!email.includes('@')) errors['email'] = 'Please provide a valid Email';
    // if (phoneNumber) {
    //     if (!(/^\d+$/.test(phoneNumber) && phoneNumber.length === 10)) {
    //         errors['phoneNumber'] = 'Phone number must be exactly 10 digits';
    //     }
    //     if (!phoneType) errors['phoneType'] = 'Please select a phone type';
    // }
    // if (bio.length > 280) errors['bio'] = 'Bio should be no more than 280 characters in length'
    // setValidationErrors(errors);
    // }, [ /*name, email, phoneNumber, phoneType, bio */ ])

    const onSubmit = e => {
        e.preventDefault();

        setHasSubmitted(true);

        // if (Object.values(validationErrors).length)
        //     return alert(`The following errors were found:

        // ${validationErrors.name ? "* " + validationErrors.name : ""}
        // ${validationErrors.email ? "* " + validationErrors.email : ""}
        // ${validationErrors.phoneNumber ? "* " + validationErrors.phoneNumber : ""}
        // ${validationErrors.phoneType ? "* " + validationErrors.phoneType : ""}
        // ${validationErrors.bio ? "* " + validationErrors.bio : ""}`);

        const sampleInformation = {
            reason,
            tool,
            why,
            submittedOn: new Date()
        };

        console.log(sampleInformation);
        setReason(-Infinity);
        setTool(-Infinity);
        setWhy('');
        setFirstName('');
        setHasSubmitted(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h3>What is your reason for considering a survey?</h3>
                <RadioButton
                    label="Employee Engagement"
                    value={reason === 1}
                    onChange={() => setReason(1)}
                />
                <RadioButton
                    label="Team Dynamics"
                    value={reason === 2}
                    onChange={() => setReason(2)}
                />
                <RadioButton
                    label="Student Safety"
                    value={reason === 3}
                    onChange={() => setReason(3)}
                />
                <RadioButton
                    label="Parent Involvement in Schooling"
                    value={reason === 4}
                    onChange={() => setReason(4)}
                />
            </div>
            <div>
                <h3>Are you planning to use this tool?</h3>
                <RadioButton
                    label="Yes"
                    value={tool === 1}
                    onChange={() => setTool(1)}
                />
                <RadioButton
                    label="No"
                    value={tool === -1}
                    onChange={() => setTool(-1)}
                />
                <RadioButton
                    label="Don't Know"
                    value={tool === 0}
                    onChange={() => setTool(0)}
                />
            </div>
            <div>
                <label htmlFor='whyOrWhyNot'>Why or Why Not?</label>
                <input
                    id='whyOrWhyNot'
                    type='text'
                    onChange={e => setWhy(e.target.value)}
                    value={why}
                />
                {/* <div className='error'>
                     {hasSubmitted && validationErrors.name && `* ${validationErrors.name}`}
                 </div> */}
            </div>
            <div>
                <label htmlFor='firstName'>What is your first name?</label>
                <input
                    id='firstName'
                    type='text'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                {/* <div className='error'>
                     {hasSubmitted && validationErrors.name && `* ${validationErrors.name}`}
                 </div> */}
            </div>

            <button>Submit</button>

        </form>
    );
}

export default SampleSurvey;
