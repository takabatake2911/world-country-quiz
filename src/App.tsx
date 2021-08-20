import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import { getRandFourList } from './utilities';

const App = () => {
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [quizNo, setQuizNo] = useState(0);

    const judgeResult = (value: number) => {
        return () => {
            if (value === quizNo) {
                alert('正解！');
                setCorrectCount(correctCount + 1);
            } else {
                alert(`ざんねん！正解は「${data[quizNo].capital}」でした`);
                setWrongCount(wrongCount + 1);
            }
            setQuizNo(Math.floor(Math.random() * data.length));
        };
    };

    const retryGame = () => {
        setWrongCount(0);
        setCorrectCount(0);
    };

    return (
        <>
            <div className="container">
                <h3 className="text-center m-3">
                    正解数：{correctCount} / {correctCount + wrongCount}
                </h3>
                <hr />
                {correctCount + wrongCount >= 5 ? (
                    <div className="text-center">
                        <h2 className="text-center m-3">
                            おつかれさまでした。
                        </h2>
                        <Button
                            onClick={retryGame}
                            className="text-center m-3"
                            variant="primary"
                        >
                            もう一度遊ぶ
                        </Button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-center m-3">
                            問題：{data[quizNo].name}の首都は？
                        </h3>
                        <hr />
                        {getRandFourList(quizNo).map(
                            (value: number, index: number) => {
                                return (
                                    <div className="row my-4">
                                        <Button
                                            key={index}
                                            onClick={judgeResult(value)}
                                            className="col-md mx-auto"
                                            variant="outline-primary"
                                        >
                                            {data[value].capital}
                                        </Button>
                                    </div>
                                );
                            }
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default App;
