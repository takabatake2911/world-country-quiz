const data = [
    {
        name: 'インド',
        capital: 'ニューデリー',
        lang: 'ヒンディー語',
        money: 'ルピー',
    },
    {
        name: 'インドネシア共和国',
        capital: 'ジャカルタ',
        lang: 'インドネシア語',
        money: 'ルピア',
    },
    {
        name: 'カンボジア王国',
        capital: 'プノンペン',
        lang: 'カンボジア語',
        money: 'リエル',
    },
    { name: 'タイ王国', capital: 'バンコク', lang: 'タイ語', money: 'バーツ' },
    { name: '大韓民国', capital: 'ソウル', lang: '韓国語', money: 'ウォン' },
    {
        name: '中華人民共和国',
        capital: '北京（ペキン）',
        lang: '漢語（中国語）',
        money: '人民元',
    },
    {
        name: 'ネパール連邦民主共和国',
        capital: 'カトマンズ',
        lang: 'ネパール語',
        money: 'ネパール・ルピー',
    },
    {
        name: 'バングラデシュ人民共和国',
        capital: 'ダッカ',
        lang: 'ベンガル語',
        money: 'タカ',
    },
    {
        name: 'フィリピン共和国',
        capital: 'マニラ',
        lang: 'フィリピノ語、英語',
        money: 'ペソ',
    },
    {
        name: 'ブータン王国',
        capital: 'ティンプー',
        lang: 'ゾンカ語',
        money: 'ニュルタム',
    },
    {
        name: 'ベトナム社会主義共和国',
        capital: 'ハノイ',
        lang: 'ベトナム語',
        money: 'ドン',
    },
    {
        name: 'マレーシア',
        capital: 'クアラルンプール',
        lang: 'マレー語、中国語、タミル語、英語',
        money: 'リンギット',
    },
    {
        name: 'ミャンマー連邦共和国',
        capital: 'ネーピードー',
        lang: 'ミャンマー語',
        money: 'チャット',
    },
    {
        name: 'モルディブ共和国',
        capital: 'マレ',
        lang: 'ディベヒ語',
        money: 'ルフィア',
    },
    {
        name: 'モンゴル国',
        capital: 'ウランバートル',
        lang: 'モンゴル語、カザフ語',
        money: 'トグログ',
    },
    {
        name: 'ラオス人民民主共和国',
        capital: 'ビエンチャン',
        lang: 'ラオス語',
        money: 'キープ',
    },
    {
        name: 'アメリカ合衆国（米国）',
        capital: 'ワシントンD. C.',
        lang: '英語',
        money: '米ドル',
    },

    {
        name: 'カナダ',
        capital: 'オタワ',
        lang: '英語、フランス語',
        money: 'カナダ・ドル',
    },

    {
        name: 'アルゼンチン共和国',
        capital: 'ブエノスアイレス',
        lang: 'スペイン語',
        money: 'ペソ',
    },

    {
        name: 'アンティグア・バーブーダ',
        capital: 'セントジョンズ',
        lang: '英語、アンティグア・クレオール語',
        money: '東カリブ・ドル',
    },

    {
        name: 'ウルグアイ東方共和国',
        capital: 'モンテビデオ',
        lang: 'スペイン語',
        money: 'ペソ',
    },

    {
        name: 'エクアドル共和国',
        capital: 'キト',
        lang: 'スペイン語、ケチュア語、シュアール語',
        money: '米ドル',
    },

    {
        name: 'エルサルバドル共和国',
        capital: 'サンサルバドル',
        lang: 'スペイン語',
        money: '米ドル',
    },

    {
        name: 'ガイアナ共和国',
        capital: 'ジョージタウン',
        lang: '英語、ガイアナ・クレオール語等',
        money: 'ガイアナ・ドル',
    },

    {
        name: 'キューバ共和国',
        capital: 'ハバナ',
        lang: 'スペイン語',
        money: 'キューバ・ペソ、兌換ペソ',
    },

    {
        name: 'グアテマラ共和国',
        capital: 'グアテマラシティー',
        lang: 'スペイン語',
        money: 'ケツァル',
    },

    {
        name: 'グレナダ',
        capital: 'セントジョージズ',
        lang: '英語、グレナダ・クレオール語',
        money: '東カリブ・ドル',
    },

    {
        name: 'コスタリカ共和国',
        capital: 'サンホセ',
        lang: 'スペイン語',
        money: 'コロン',
    },

    {
        name: 'コロンビア共和国',
        capital: 'ボゴタ',
        lang: 'スペイン語',
        money: 'ペソ',
    },

    {
        name: 'ジャマイカ',
        capital: 'キングストン',
        lang: '英語、ジャマイカ・クレオール語',
        money: 'ジャマイカドル',
    },

    {
        name: 'スリナム共和国',
        capital: 'パラマリボ',
        lang: 'オランダ語、英語、スリナム語等',
        money: 'スリナム・ドル',
    },

    {
        name: 'セントクリストファー・ネーヴィス',
        capital: 'バセテール',
        lang: '英語',
        money: '東カリブ・ドル',
    },

    {
        name: 'セントビンセント及びグレナディーン諸島',
        capital: 'キングスタウン',
        lang: '英語、セントビンセント・クレオール語',
        money: '東カリブ・ドル',
    },

    {
        name: 'セントルシア',
        capital: 'カストリーズ',
        lang: '英語、セントルシア・クレオール語',
        money: '東カリブ・ドル',
    },

    {
        name: 'チリ共和国',
        capital: 'サンティアゴ',
        lang: 'スペイン語',
        money: 'ペソ',
    },

    {
        name: 'ドミニカ国',
        capital: 'ロゾー',
        lang: '英語、フランス語系パトワ語',
        money: '東カリブ・ドル',
    },

    {
        name: 'ドミニカ共和国',
        capital: 'サントドミンゴ',
        lang: 'スペイン語',
        money: 'ドミニカ・ペソ',
    },

    {
        name: 'トリニダード・トバゴ共和国',
        capital: 'ポート・オブ・スペイン',
        lang: '英語、ヒンディー語、フランス語、スペイン語、トリニダード・クレオール語等',
        money: 'トリニダード・トバゴ・ドル',
    },

    {
        name: 'ニカラグア共和国',
        capital: 'マナグア',
        lang: 'スペイン語',
        money: 'コルドバ',
    },

    {
        name: 'ハイチ共和国',
        capital: 'ポルトープランス',
        lang: 'フランス語、ハイチ・クレオール語',
        money: 'グルド',
    },

    {
        name: 'パナマ共和国',
        capital: 'パナマシティー',
        lang: 'スペイン語',
        money: 'バルボア',
    },

    {
        name: 'バハマ国',
        capital: 'ナッソー',
        lang: '英語',
        money: 'バハマ・ドル',
    },

    {
        name: 'パラグアイ共和国',
        capital: 'アスンシオン',
        lang: 'スペイン語、グアラニー語',
        money: 'グアラニー',
    },

    {
        name: 'バルバドス',
        capital: 'ブリッジタウン',
        lang: '英語',
        money: 'バルバドス・ドル',
    },

    {
        name: 'ブラジル連邦共和国',
        capital: 'ブラジリア',
        lang: 'ポルトガル語',
        money: 'レアル',
    },

    {
        name: 'ベネズエラ・ボリバル共和国',
        capital: 'カラカス',
        lang: 'スペイン語',
        money: 'ボリバル',
    },

    {
        name: 'ベリーズ',
        capital: 'ベルモパン',
        lang: '英語、スペイン語、ベリーズ・クレオール語、モパン語等',
        money: 'ベリーズ・ドル',
    },

    {
        name: 'ペルー共和国',
        capital: 'リマ',
        lang: 'スペイン語、ケチュア語、アイマラ語',
        money: 'ソル',
    },

    {
        name: 'ボリビア多民族国',
        capital: 'ラパス',
        lang: 'スペイン語、ケチュア語、アイマラ語',
        money: 'ボリビアーノス',
    },

    {
        name: 'ホンジュラス共和国',
        capital: 'テグシガルパ',
        lang: 'スペイン語',
        money: 'レンピラ',
    },

    {
        name: 'メキシコ合衆国',
        capital: 'メキシコシティ',
        lang: 'スペイン語',
        money: 'ペソ',
    },

    {
        name: 'アイスランド共和国',
        capital: 'レイキャビク',
        lang: 'アイスランド語',
        money: 'アイスランドクローナ',
    },

    {
        name: 'アイルランド',
        capital: 'ダブリン',
        lang: 'アイルランド語、英語',
        money: 'ユーロ',
    },

    {
        name: 'アゼルバイジャン共和国',
        capital: 'バクー',
        lang: 'アゼルバイジャン語',
        money: 'マナト',
    },

    {
        name: 'アルバニア共和国',
        capital: 'ティラナ',
        lang: 'アルバニア語',
        money: 'レク',
    },

    {
        name: 'アルメニア共和国',
        capital: 'エレバン',
        lang: 'アルメニア語',
        money: 'ドラム',
    },

    {
        name: 'アンドラ公国',
        capital: 'アンドラ・ラ・ベリャ',
        lang: 'カタルニア語、スペイン語、ポルトガル語、フランス語',
        money: 'ユーロ',
    },

    {
        name: 'イタリア共和国',
        capital: 'ローマ',
        lang: 'イタリア語',
        money: 'ユーロ',
    },

    {
        name: 'ウクライナ',
        capital: 'キエフ',
        lang: 'ウクライナ語、ロシア語',
        money: 'フリヴニャ',
    },

    {
        name: 'ウズベキスタン共和国',
        capital: 'タシケント',
        lang: 'ウズベク語、ロシア語',
        money: 'スム',
    },

    {
        name: 'グレートブリテン及び北アイルランド連合王国（英国）',
        capital: 'ロンドン',
        lang: '英語',
        money: 'スターリング・ポンド',
    },

    {
        name: 'エストニア共和国',
        capital: 'タリン',
        lang: 'エストニア語',
        money: 'ユーロ',
    },

    {
        name: 'オーストリア共和国',
        capital: 'ウィーン',
        lang: 'ドイツ語',
        money: 'ユーロ',
    },

    {
        name: 'オランダ王国',
        capital: 'アムステルダム',
        lang: 'オランダ語',
        money: 'ユーロ',
    },

    {
        name: 'カザフスタン共和国',
        capital: 'ヌルスルタン',
        lang: 'カザフ語、ロシア語',
        money: 'テンゲ',
    },

    {
        name: '北マケドニア共和国',
        capital: 'スコピエ',
        lang: 'マケドニア語、アルバニア語',
        money: 'マケドニア・デナル',
    },

    {
        name: 'キプロス共和国',
        capital: 'ニコシア',
        lang: 'ギリシャ語、トルコ語',
        money: 'ユーロ',
    },

    {
        name: 'ギリシャ共和国',
        capital: 'アテネ',
        lang: '現代ギリシャ語',
        money: 'ユーロ',
    },

    {
        name: 'キルギス共和国',
        capital: 'ビシュケク',
        lang: 'キルギス語、ロシア語',
        money: 'ソム',
    },

    {
        name: 'クロアチア共和国',
        capital: 'ザグレブ',
        lang: 'クロアチア語',
        money: 'クーナ',
    },

    {
        name: 'コソボ共和国',
        capital: 'プリシュティナ',
        lang: 'アルバニア語、セルビア語',
        money: 'ユーロ',
    },

    {
        name: 'サンマリノ共和国',
        capital: 'サンマリノ',
        lang: 'イタリア語',
        money: 'ユーロ',
    },

    {
        name: 'ジョージア',
        capital: 'トビリシ',
        lang: 'ジョージア語',
        money: 'ラリ',
    },

    {
        name: 'スイス連邦',
        capital: 'ベルン',
        lang: 'ドイツ語、フランス語、イタリア語、ロマンシュ語',
        money: 'スイスフラン',
    },

    {
        name: 'スウェーデン王国',
        capital: 'ストックホルム',
        lang: 'スウェーデン語',
        money: 'スウェーデン・クローナ',
    },

    {
        name: 'スペイン',
        capital: 'マドリード',
        lang: 'スペイン語',
        money: 'ユーロ',
    },

    {
        name: 'スロバキア共和国',
        capital: 'ブラチスラバ',
        lang: 'スロバキア語',
        money: 'ユーロ',
    },

    {
        name: 'スロベニア共和国',
        capital: 'リュブリャナ',
        lang: 'スロベニア語',
        money: 'ユーロ',
    },

    {
        name: 'セルビア共和国',
        capital: 'ベオグラード',
        lang: 'セルビア語、ハンリー語',
        money: 'ディナール',
    },

    {
        name: 'タジキスタン共和国',
        capital: 'ドゥシャンベ',
        lang: 'タジク語、ロシア語',
        money: 'ソモニ',
    },

    {
        name: 'チェコ共和国',
        capital: 'プラハ',
        lang: 'チェコ語',
        money: 'チェコ・コルナ',
    },

    {
        name: 'デンマーク王国',
        capital: 'コペンハーゲン',
        lang: 'デンマーク語',
        money: 'デンマーク・クローネ',
    },

    {
        name: 'ドイツ連邦共和国',
        capital: 'ベルリン',
        lang: 'ドイツ語',
        money: 'ユーロ',
    },

    {
        name: 'トルクメニスタン',
        capital: 'アシガバット',
        lang: 'トルクメン語、ロシア語',
        money: 'マナト',
    },

    {
        name: 'ノルウェー王国',
        capital: 'オスロ',
        lang: 'ノルウェー語',
        money: 'ノルウェー・クローネ',
    },

    {
        name: 'バチカン',
        capital: 'なし',
        lang: 'ラテン語、フランス語、イタリア語',
        money: 'ユーロ',
    },

    {
        name: 'ハンガリー',
        capital: 'ブダペスト',
        lang: 'ハンガリー語',
        money: 'フォリント',
    },

    {
        name: 'フィンランド共和国',
        capital: 'ヘルシンキ',
        lang: 'フィンランド語、スウェーデン語',
        money: 'ユーロ',
    },

    {
        name: 'フランス共和国',
        capital: 'パリ',
        lang: 'フランス語',
        money: 'ユーロ',
    },

    {
        name: 'ブルガリア共和国',
        capital: 'ソフィア',
        lang: 'ブルガリア語',
        money: 'レフ',
    },

    {
        name: 'ベラルーシ共和国',
        capital: 'ミンスク',
        lang: 'ベラルーシ語、ロシア語',
        money: 'ベラルーシ・ルーブル',
    },

    {
        name: 'ベルギー王国',
        capital: 'ブリュッセル',
        lang: 'オランダ語、フランス語、ドイツ語',
        money: 'ユーロ',
    },

    {
        name: 'ボスニア・ヘルツェゴビナ',
        capital: 'サラエボ',
        lang: 'ボスニア語、セルビア語、クロアチア語',
        money: '兌換マルク',
    },

    {
        name: 'ポーランド共和国',
        capital: 'ワルシャワ',
        lang: 'ポーランド語',
        money: 'ズロチ',
    },

    {
        name: 'ポルトガル共和国',
        capital: 'リスボン',
        lang: 'ポルトガル語',
        money: 'ユーロ',
    },

    {
        name: 'マルタ共和国',
        capital: 'バレッタ',
        lang: 'マルタ語、英語',
        money: 'ユーロ',
    },

    {
        name: 'モナコ公国',
        capital: 'モナコ',
        lang: 'フランス語',
        money: 'ユーロ',
    },

    {
        name: 'モルドバ共和国',
        capital: 'キシニョフ',
        lang: 'モルドバ（ルーマニア）語、ロシア語',
        money: 'モルドバ・レイ',
    },

    {
        name: 'モンテネグロ',
        capital: 'ポドゴリツァ',
        lang: 'モンテネグロ語、セルビア語',
        money: 'ユーロ',
    },

    {
        name: 'ラトビア共和国',
        capital: 'リガ',
        lang: 'ラトビア語',
        money: 'ユーロ',
    },

    {
        name: 'リトアニア共和国',
        capital: 'ビリニュス',
        lang: 'リトアニア語',
        money: 'ユーロ',
    },

    {
        name: 'リヒテンシュタイン公国',
        capital: 'ファドーツ',
        lang: 'ドイツ語',
        money: 'スイス・フラン',
    },

    {
        name: 'ルクセンブルク大公国',
        capital: 'ルクセンブルク',
        lang: 'ルクセンブルク語、フランス語、ドイツ語',
        money: 'ユーロ',
    },

    {
        name: 'ルーマニア',
        capital: 'ブカレスト',
        lang: 'ルーマニア語、ハンガリー語',
        money: 'レイ',
    },

    {
        name: 'ロシア連邦',
        capital: 'モスクワ',
        lang: 'ロシア語',
        money: 'ルーブル',
    },

    {
        name: 'オーストラリア連邦',
        capital: 'キャンベラ',
        lang: '英語',
        money: 'オーストラリア・ドル',
    },

    {
        name: 'キリバス共和国',
        capital: 'タラワ',
        lang: 'キリバス語、英語',
        money: 'オーストラリア・ドル',
    },

    {
        name: 'クック諸島',
        capital: 'アバルア（ラロトンガ島）',
        lang: 'クック諸島マオリ語、英語',
        money: 'ニュージーランド・ドル',
    },

    {
        name: 'サモア独立国',
        capital: 'アピア',
        lang: 'サモア語、英語',
        money: 'サモア・タラ',
    },

    {
        name: 'ソロモン諸島',
        capital: 'ホニアラ',
        lang: '英語、ピジン英語',
        money: 'ソロモン・ドル',
    },

    {
        name: 'ツバル',
        capital: 'フナフティ',
        lang: '英語、ツバル語',
        money: 'オーストラリア・ドル',
    },

    {
        name: 'トンガ王国',
        capital: 'ヌクアロファ',
        lang: 'トンガ語、英語',
        money: 'パアンガ',
    },

    {
        name: 'ナウル共和国',
        capital: 'ヤレン',
        lang: '英語、ナウル語',
        money: 'オーストラリア・ドル',
    },

    {
        name: 'ニウエ',
        capital: 'アロフィ',
        lang: 'ニウエ語（ポリネシア語系）、英語',
        money: 'ニュージーランド・ドル',
    },

    {
        name: 'ニュージーランド',
        capital: 'ウェリントン',
        lang: '英語、マオリ語',
        money: 'ニュージーランド・ドル',
    },

    {
        name: 'バヌアツ共和国',
        capital: 'ポートビラ',
        lang: 'ビスラマ語（ピジン英語）、英語、フランス語',
        money: 'バツ',
    },

    {
        name: 'パプアニューギニア独立国',
        capital: 'ポートモレスビー',
        lang: '英語、ピジン英語、モツ語',
        money: 'キナ及びトヤ',
    },

    {
        name: 'パラオ共和国',
        capital: 'マルキョク',
        lang: 'パラオ語、英語',
        money: '米ドル',
    },

    {
        name: 'フィジー共和国',
        capital: 'スバ',
        lang: '英語、フィジー語、ヒンディー語',
        money: 'フィジードル',
    },

    {
        name: 'マーシャル諸島共和国',
        capital: 'マジュロ',
        lang: 'マーシャル語、英語',
        money: '米ドル',
    },

    {
        name: 'ミクロネシア連邦',
        capital: 'パリキール',
        lang: '英語、他現地の8言語',
        money: '米ドル',
    },

    {
        name: 'アフガニスタン・イスラム共和国',
        capital: 'カブール',
        lang: 'ダリー語、パシュトー語',
        money: 'アフガニー',
    },

    {
        name: 'アラブ首長国連邦',
        capital: 'アブダビ',
        lang: 'アラビア語',
        money: 'ディルハム',
    },

    {
        name: 'イエメン共和国',
        capital: 'サヌア',
        lang: 'アラビア語',
        money: 'イエメン・リアル',
    },

    {
        name: 'イスラエル国',
        capital: 'エルサレム',
        lang: 'ヘブライ語、アラビア語',
        money: '新シェケル',
    },

    {
        name: 'イラク共和国',
        capital: 'バグダッド',
        lang: 'アラビア語、クルド語',
        money: 'イラク・ディナール',
    },

    {
        name: 'イラン・イスラム共和国',
        capital: 'テヘラン',
        lang: 'ペルシャ語、トルコ語、クルド語',
        money: 'リアル',
    },

    {
        name: 'オマーン国',
        capital: 'マスカット',
        lang: 'アラビア語、英語',
        money: 'オマーン・リアル',
    },

    {
        name: 'カタール国',
        capital: 'ドーハ',
        lang: 'アラビア語',
        money: 'カタール・リヤル',
    },

    {
        name: 'クウェート国',
        capital: 'クウェート',
        lang: 'アラビア語',
        money: 'クウェート・ディナール',
    },

    {
        name: 'サウジアラビア王国',
        capital: 'リヤド',
        lang: 'アラビア語',
        money: 'サウジアラビア・リヤル',
    },

    {
        name: 'シリア・アラブ共和国',
        capital: 'ダマスカス',
        lang: 'アラビア語',
        money: 'シリア・ポンド',
    },

    {
        name: 'トルコ共和国',
        capital: 'アンカラ',
        lang: 'トルコ語',
        money: 'トルコ・リラ',
    },

    {
        name: 'バーレーン王国',
        capital: 'マナーマ',
        lang: 'アラビア語',
        money: 'バーレーン・ディナール',
    },

    {
        name: 'ヨルダン',
        capital: 'アンマン',
        lang: 'アラビア語、英語',
        money: 'ヨルダン・ディナール',
    },

    {
        name: 'レバノン共和国',
        capital: 'ベイルート',
        lang: 'アラビア語、フランス語、英語',
        money: 'レバノン・ポンド',
    },

    {
        name: 'アルジェリア民主人民共和国',
        capital: 'アルジェ',
        lang: 'アラビア語、ベルベル語、フランス語',
        money: 'アルジェリアン・ディナール',
    },

    {
        name: 'アンゴラ共和国',
        capital: 'ルアンダ',
        lang: 'ポルトガル語、ウンブンドゥ語',
        money: 'クワンザ',
    },

    {
        name: 'ウガンダ共和国',
        capital: 'カンパラ',
        lang: '英語、スワヒリ語、ルガンダ語',
        money: 'ウガンダ・シリング',
    },

    {
        name: 'エジプト・アラブ共和国',
        capital: 'カイロ',
        lang: 'アラビア語',
        money: 'エジプト・ポンド',
    },

    {
        name: 'エスワティニ王国',
        capital: 'ムババーネ',
        lang: '英語、スワティ語',
        money: 'リランゲーニ',
    },

    {
        name: 'エチオピア連邦民主共和国',
        capital: 'アディスアベバ',
        lang: 'アムハラ語、オロモ語、英語',
        money: 'ブル',
    },

    {
        name: 'エリトリア国',
        capital: 'アスマラ',
        lang: 'ティグリニャ語、アラビア語',
        money: 'ナクファ',
    },

    {
        name: 'ガーナ共和国',
        capital: 'アクラ',
        lang: '英語',
        money: 'ガーナセディ',
    },

    {
        name: 'カーボベルデ共和国',
        capital: 'プライア',
        lang: 'ポルトガル語、クレオール語',
        money: 'カーボベルデ・エスクード',
    },

    {
        name: 'ガボン共和国',
        capital: 'リーブルビル',
        lang: 'フランス語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'カメルーン共和国',
        capital: 'ヤウンデ',
        lang: 'フランス語、英語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ガンビア共和国',
        capital: 'バンジュール',
        lang: '英語、マンディンゴ語、ウォロフ語、フラ語',
        money: 'ダラシ',
    },

    {
        name: 'ギニア共和国',
        capital: 'コナクリ',
        lang: 'フランス語',
        money: 'ギニア・フラン',
    },

    {
        name: 'ギニアビサウ共和国',
        capital: 'ビサウ',
        lang: 'ポルトガル語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ケニア共和国',
        capital: 'ナイロビ',
        lang: 'スワヒリ語、英語',
        money: 'ケニア・シリング',
    },

    {
        name: 'コートジボワール共和国',
        capital: 'ヤムスクロ',
        lang: 'フランス語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'コモロ連合',
        capital: 'モロニ',
        lang: 'フランス語、アラビア語、コモロ語',
        money: 'コモロ・フラン',
    },

    {
        name: 'コンゴ共和国',
        capital: 'ブラザビル',
        lang: 'フランス語、リンガラ語、キトゥバ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'コンゴ民主共和国',
        capital: 'キンシャサ',
        lang: 'フランス語、スワヒリ語、リンガラ語、チルバ語、キコンゴ語',
        money: 'コンゴ・フラン',
    },

    {
        name: 'サントメ・プリンシペ民主共和国',
        capital: 'サントメ',
        lang: 'ポルトガル語',
        money: 'ドブラ',
    },

    {
        name: 'ザンビア共和国',
        capital: 'ルサカ',
        lang: '英語、ベンバ語、ニャンジァ語、トンガ語',
        money: 'ザンビア・クワチャ',
    },

    {
        name: 'シエラレオネ共和国',
        capital: 'フリータウン',
        lang: '英語、クリオ語、メンデ語、テムネ語',
        money: 'レオン',
    },

    {
        name: 'ジブチ共和国',
        capital: 'ジブチ',
        lang: 'アラビア語、フランス語',
        money: 'ジブチ・フラン',
    },

    {
        name: 'ジンバブエ共和国',
        capital: 'ハラレ',
        lang: '英語、ショナ語、ンデベレ語',
        money: 'ジンバブエ・ドル（注2）',
    },

    {
        name: 'スーダン共和国',
        capital: 'ハルツーム',
        lang: 'アラビア語、英語',
        money: 'スーダン・ポンド',
    },

    {
        name: '赤道ギニア共和国',
        capital: 'マラボ',
        lang: 'スペイン語、フランス語、ポルトガル語、ファン語、ブビ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'セーシェル共和国',
        capital: 'ビクトリア',
        lang: '英語、フランス語、クレオール語',
        money: 'セーシェル・ルピー',
    },

    {
        name: 'セネガル共和国',
        capital: 'ダカール',
        lang: 'フランス語、ウォロフ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ソマリア連邦共和国',
        capital: 'モガディシュ',
        lang: 'ソマリ語、アラビア語',
        money: 'ソマリア・シリング',
    },

    {
        name: 'タンザニア連合共和国',
        capital: 'ドドマ',
        lang: 'スワヒリ語、英語',
        money: 'タンザニア・シリング',
    },

    {
        name: 'チャド共和国',
        capital: 'ンジャメナ',
        lang: 'フランス語、アラビア語',
        money: 'CFAフラン（注1）',
    },

    {
        name: '中央アフリカ共和国',
        capital: 'バンギ',
        lang: 'フランス語、サンゴ語、',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'チュニジア共和国',
        capital: 'チュニス',
        lang: 'アラビア語、フランス語',
        money: 'チェニジア・ディナール',
    },

    {
        name: 'トーゴ共和国',
        capital: 'ロメ',
        lang: 'フランス語、エヴェ語、カビエ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ナイジェリア連邦共和国',
        capital: 'アブジャ',
        lang: '英語',
        money: 'ナイラ',
    },

    {
        name: 'ナミビア共和国',
        capital: 'ウィントフック',
        lang: '英語、アフリカーンス語、ドイツ語',
        money: 'ナミビア・ドル',
    },

    {
        name: 'ニジェール共和国',
        capital: 'ニアメ',
        lang: 'フランス語、ハウサ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ブルキナファソ',
        capital: 'ワガドゥグ',
        lang: 'フランス語、モシ語、ディウラ語、グルマンチェ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ブルンジ共和国',
        capital: 'ブジュンブラ',
        lang: 'フランス語、キルンジ語',
        money: 'ブルンジ・フラン',
    },

    {
        name: 'ベナン共和国',
        capital: 'ポルトノボ',
        lang: 'フランス語',
        money: 'CFAフラン（注1）',
    },

    {
        name: 'ボツワナ共和国',
        capital: 'ハボロネ',
        lang: '英語、ツワナ語',
        money: 'プラ',
    },

    {
        name: 'マダガスカル共和国',
        capital: 'アンタナナリボ',
        lang: 'マダガスカル語、フランス語',
        money: 'アリアリ',
    },

    {
        name: 'マラウイ共和国',
        capital: 'リロングウェ',
        lang: 'チェワ語、英語',
        money: 'マラウイ・クワチャ',
    },

    {
        name: 'マリ共和国',
        capital: 'バマコ',
        lang: 'フランス語、バンバラ語、フルフルデ語、マリンケ語',
        money: 'CFAフラン（注1）',
    },

    {
        name: '南アフリカ共和国',
        capital: 'プレトリア',
        lang: '英語、アフリカーンス語、バンツー諸語の計11が公用語',
        money: 'ランド',
    },

    {
        name: '南スーダン共和国',
        capital: 'ジュバ',
        lang: '英語、アラビア語',
        money: '南スーダン・ポンド',
    },

    {
        name: 'モザンビーク共和国',
        capital: 'マプト',
        lang: 'ポルトガル語',
        money: 'メティカル',
    },

    {
        name: 'モーリシャス共和国',
        capital: 'ポートルイス',
        lang: '英語、フランス語、クレオール語',
        money: 'モーリシャス・ルピー',
    },

    {
        name: 'モーリタニア・イスラム共和国',
        capital: 'ヌアクショット',
        lang: 'アラビア語、ブラール語、ソニンケ語、ウォロフ語、フランス語',
        money: 'ウギア',
    },

    {
        name: 'モロッコ王国',
        capital: 'ラバト',
        lang: 'アラビア語、ベルベル語、フランス語',
        money: 'モロッコ・ディルハム',
    },

    {
        name: 'リビア',
        capital: 'トリポリ',
        lang: 'アラビア語',
        money: 'リビア・ディナール',
    },

    {
        name: 'リベリア共和国',
        capital: 'モンロビア',
        lang: '英語',
        money: 'リベリア・ドル',
    },

    {
        name: 'ルワンダ共和国',
        capital: 'キガリ',
        lang: 'ルワンダ語、英語、フランス語、スワヒリ語',
        money: 'ルワンダ・フラン',
    },

    {
        name: 'レソト王国',
        capital: 'マセル',
        lang: '英語、ソト語',
        money: 'ロチ',
    },
];

export default data;
