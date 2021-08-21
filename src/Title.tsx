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
        <div className="container">
            <div className="text-center">
                <h2 className="m-md-4">世界首都クイズ</h2>
                <h5 className="m-md-4">
                    世界各国の首都を４択で答えるクイズアプリです。
                </h5>
                <div className="m-md-4">
                    <Button
                        autoFocus={true}
                        variant="primary"
                        onClick={handleClick}
                    >
                        start
                    </Button>
                </div>
            </div>
            <p className="m-md-4 text-left">
                ※このコンテンツは「（キッズ外務省）世界の国々」（外務省）（https://www.mofa.go.jp/mofaj/kids/ichiran/index.html）から取得したデータを加工して作成しています。
            </p>
        </div>
    );
};

export default Title;
