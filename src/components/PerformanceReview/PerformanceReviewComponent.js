import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import ToggleButton from './toggleButton';
import SearchBar from './SearchBar';
const PerformanceReviewComponent = () => {
             
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
        const reviewQuestion = [
            {
                questionType: 'Performance Summary',
                displayOptions: true,
                questions: [
                    'Key Contributions/ Milestones Achieved',
                    'Overall Performance Summary - Hits & Misses',
                    'Overall Performance rating(2020-21)'
                ],
                options: [ buttons, buttons, buttons ]
            },
            {
                questionType: 'Development Feedback',
                displayOptions: true,
                questions: [
                    'Key Strengths',
                    'Development Areas',
                    'Next Steps'
                ],
                options: [ buttons, buttons, buttons ]
            },
            {
                questionType: 'Development Plan',
                displayOptions: false,
                questions: [
                    'Criticality',
                    'Criticality reason- Niche Skills/Performance/ Business Critical',
                    'Rag Status - Red/ Amber/ Green'
                ],
                options: [ buttons, buttons, buttons ]
            },
            {
                questionType: 'Career Trajectory',
                displayOptions: false,
                questions: [
                    'Next steps - Promotion/ Role change/ Continue in role/ Realignment ',
                ],
                options: [ buttons, buttons, buttons ]
            }

            
        ]
        const [reviewQuestions, setSelectedOption] = React.useState(reviewQuestion);

        const toggleButton = (que, index, id) => {
            
            let buttonDetails = [...buttons];
            buttonDetails[id-1] =  {...buttonDetails[id-1], active: !buttonDetails[id-1].active};
            let optionDetails = [...que.options ];
            optionDetails[index] =  [ ...buttonDetails ];
            const queDetails = { ...que, options: optionDetails  };
            const queIndex = reviewQuestion.findIndex(object => {
                return object.questionType === que.questionType;
              }); 
              
              if (queIndex !== -1) {
                reviewQuestions[queIndex] = queDetails;
              }
            debugger
            setSelectedOption([...reviewQuestions]);
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
                                            { que.displayOptions && que.options[index].map(data => {
                                                return (
                                                    <Button
                                                        className = { data.active ? "blueBtn" : "greyBtn"} 
                                                        variant="outlined"  onClick={() => toggleButton(que, index, data.id)}
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

export default PerformanceReviewComponent
