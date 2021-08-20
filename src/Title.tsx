import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import App from './App';

const Title = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };
    return isClicked ? (
        <App />
    ) : (
        <div className="container text-center">
            <h3 className="m-md-4">世界首都首都クイズ</h3>
            <div className="m-md-4">
                <Button variant="primary" onClick={handleClick}>
                    start
                </Button>
            </div>
            <p className="m-md-4">
                このコンテンツは「（キッズ外務省）世界の国々」（外務省）（https://www.mofa.go.jp/mofaj/kids/ichiran/index.html）から取得したデータを加工して作成しています。
            </p>
        </div>
    );
};

export default Title;
