import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import ToggleButton from './toggleButton';
import SearchBar from './SearchBar';
const ReviewComponent = () => {
             
        const buttons = [
            {
                "id": 1,
                "label": "Strongly Disagree",
                "active": false
            },
            {
                "id": 2,
                "label": "Disagree",
                "active": false
            },
            {
                "id": 3,
                "label": "Neutral",
                "active": false
            },
            {
                "id": 4,
                "label": "Agree",
                "active": false
            },
            {
                "id": 5,
                "label": "Strongly Agree",
                "active": false
            }
        ];
        const reviewQuestions = [
            {
                questionType: 'Performance Summary',
                displayOptions: true,
                questions: [
                    'Key Contributions/ Milestones Achieved',
                    'Overall Performance Summary - Hits & Misses',
                    'Overall Performance rating(2020-21)'
                ]
            },
            {
                questionType: 'Development Feedback',
                displayOptions: true,
                questions: [
                    'Key Strengths',
                    'Development Areas',
                    'Next Steps'
                ]
            },
            {
                questionType: 'Development Plan',
                displayOptions: false,
                questions: [
                    'Criticality',
                    'Criticality reason- Niche Skills/Performance/ Business Critical',
                    'Rag Status - Red/ Amber/ Green'
                ]
            },
            {
                questionType: 'Career Trajectory',
                displayOptions: false,
                questions: [
                    'Next steps - Promotion/ Role change/ Continue in role/ Realignment ',
                ]
            }

            
        ]
        const [optionalButton, setSelectedOption] = React.useState(buttons);

        const toggleButton = (id) => {
            const buttonDetails = [...buttons];
            const index = buttons.findIndex(stat => stat.id === id);
            buttonDetails[index] = {...buttonDetails[index], active: !buttonDetails[index].active};
            setSelectedOption([...buttonDetails]);
        };
        return (
            <div>
                <div className="reviewHeader">
                    <SearchBar></SearchBar>
                </div>
                <div className="reviewStyle">
                    {reviewQuestions && reviewQuestions?.map((que, index) => {
                        return (
                            <div>
                            <div className="questionText">{que.questionType}</div>

                            { que.questions.map((ele,index) => {
                                return (
                                    <div  className="reviewQuestion">
                                        <div className="margin">{index+1}. {ele}</div>
                                        <ButtonGroup size="large" aria-label="large button group"  className="TextFieldStyle" >
                                            { que.displayOptions && optionalButton.map(data => {
                                                return (
                                                    <Button
                                                        className = { data.active ? "blueBtn" : "greyBtn"} 
                                                        variant="outlined"  onClick={() => toggleButton(data.id)}
                                                        >
                                                        {data.label}
                                                    </Button>
                                                )
                                            }) }
                                        </ButtonGroup>
                                        <div className="TextFieldStyle">
                                            <TextField  variant="outlined"  fullWidth label="Comments" id="fullWidth" />
                                        </div>
                                    </div>
                                    )
                                })}
                        </div>)
                    })}
                </div>
                
            </div>

        )
}

export default ReviewComponent
