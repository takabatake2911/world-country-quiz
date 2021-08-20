import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { getRandFourList } from './utilities';
import data from './data';

// 出題数
const TOTAL_COUNT = 10;

const App = () => {
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [correctDataNo, setCorrectDataNo] = useState(
        Math.floor(Math.random() * data.length)
    );

    const judgeResult = (value: number) => {
        return () => {
            if (value === correctDataNo) {
                alert('正解！');
                setCorrectCount(correctCount + 1);
            } else {
                alert(
                    `ざんねん！正解は「${data[correctDataNo].capital}」でした`
                );
                setWrongCount(wrongCount + 1);
            }
            setCorrectDataNo(Math.floor(Math.random() * data.length));
        };
    };

    const retryGame = () => {
        setWrongCount(0);
        setCorrectCount(0);
    };

    // 現在何問目(0から始まる)かを取得;
    const getQuizNo = () => {
        return correctCount + wrongCount;
    };

    return (
        <>
            <div className="container">
                <h3 className="text-center m-3">
                    正解数：{correctCount} / {getQuizNo()}
                </h3>
                <hr />
                {getQuizNo() >= TOTAL_COUNT ? (
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
                            第{getQuizNo() + 1}問：{data[correctDataNo].name}
                            の首都は？
                        </h3>
                        <hr />
                        {getRandFourList(correctDataNo).map(
                            (value: number, index: number) => {
                                return (
                                    <div key={index} className="row my-4">
                                        <Button
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
