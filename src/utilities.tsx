import data from './data';

// 引数iを含む要素数4のランダムな数列を取得;
export const getRandFourList = (i: number) => {
    // 引数iを含まない数列（[0,1,2,...]）を生成
    const listWithoutCorrect = Array.from(Array(data.length).keys()).filter(
        (value) => value !== i
    );

    // ランダムに並べ替え
    const randListWithoutCorrect = listWithoutCorrect.sort(
        () => Math.random() - 0.5
    );

    // 0,1,2,3番目のどこかをランダムに引数iで上書き
    randListWithoutCorrect[Math.floor(Math.random() * 4)] = i;

    // 先頭4つを抜き出した配列を取得
    const randFourList = randListWithoutCorrect.slice(0, 4);
    return randFourList;
};
