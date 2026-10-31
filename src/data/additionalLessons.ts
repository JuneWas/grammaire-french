import type { Lesson } from './lessons';
export const additionalLessons: Lesson[] = [
  {
    "id": "agreement",
    "title": "名詞・形容詞の性と数",
    "french": "Le genre et l’accord",
    "level": "初級",
    "category": "名詞と冠詞",
    "minutes": 18,
    "core": "形容詞の一致は、どの名詞について述べているかを形で示す仕組みです。",
    "detail": "名詞には文法上の性があり、形容詞は原則として修飾する名詞の性・数に一致します。性は物の自然な性別と同じではありません。une idée は抽象的な概念でも女性名詞です。名詞を冠詞と一緒に覚えると、一致の判断に使えます。",
    "explanations": [
      {
        "title": "一致を決める中心を探す",
        "body": "une idée intéressante では idée が中心で、intéressante は女性単数です。des idées intéressantes では女性複数になります。形容詞が名詞のすぐ隣になくても、Les idées sont intéressantes. のように être を介した属詞なら主語に一致します。まず「何がその性質を持つのか」を問いましょう。"
      },
      {
        "title": "規則形と不規則形",
        "body": "多くの形容詞は女性形に -e、複数形に -s を付けます。ただし grand / grande と同じようには変わらない形もあり、heureux / heureuse、beau / belle のように語形ごと学ぶ必要があります。すでに -e で終わる difficile は通常、男女で同じ形です。書かれた語尾が常に発音されるとは限りません。"
      },
      {
        "title": "位置は意味にも関わる",
        "body": "多くの形容詞は名詞の後ろに置かれますが、petit・grand など頻度の高い形容詞には前置がよく見られます。un grand homme は偉大な人物、un homme grand は背の高い人物というように位置で解釈が変わる例もあります。位置を機械的に統一せず、名詞との組合せで理解しましょう。"
      }
    ],
    "comparison": "冠詞も形容詞も名詞に一致しますが、冠詞は対象の特定性などを、形容詞は性質を示します。副詞は通常不変化で、des idées très intéressantes の très は複数になりません。",
    "examples": [
      {
        "fr": "Cette idée est importante.",
        "ja": "この考えは重要です。",
        "pattern": "S + V + C",
        "analysis": "Cette idée = S、est = V、importante = C（主語の属詞）。",
        "note": "idée が女性単数なので importante も女性単数です。"
      },
      {
        "fr": "Je lis des textes difficiles.",
        "ja": "私は難しい文章を読んでいます。",
        "pattern": "S + V + O",
        "analysis": "Je = S、lis = V、des textes difficiles = O。",
        "note": "difficiles は O の内部で textes を修飾する男性複数の形容詞です。"
      }
    ],
    "mistake": "形容詞を常に男性単数の辞書形のまま使わないようにしましょう。属詞の一致も必要です。ただし副詞まで名詞に一致させてはいけません。",
    "questions": [
      {
        "prompt": "une idée ___",
        "options": [
          "important",
          "importante",
          "importants"
        ],
        "answer": 1,
        "explanation": "idée は女性単数なので importante です。",
        "hint": "冠詞 une が性を示しています。"
      },
      {
        "prompt": "Les textes sont ___.",
        "options": [
          "difficile",
          "difficiles",
          "difficilement"
        ],
        "answer": 1,
        "explanation": "主語 textes が複数なので属詞も difficiles になります。",
        "hint": "être の後でも主語と一致します。"
      },
      {
        "prompt": "通常、性・数で変化しない語は？",
        "options": [
          "形容詞 grand",
          "副詞 très",
          "冠詞 le"
        ],
        "answer": 1,
        "explanation": "très は副詞で、不変化です。",
        "hint": "性質の程度を強める語です。"
      }
    ]
  },
  {
    "id": "present",
    "title": "主語代名詞と現在形",
    "french": "Le présent de l’indicatif",
    "level": "初級",
    "category": "動詞と法",
    "minutes": 18,
    "core": "動詞の活用は、誰について述べるかを主語と結びつけます。",
    "detail": "フランス語では原則として活用した動詞に主語が必要です。je・tu・il/elle/on・nous・vous・ils/elles に応じて形が変わります。日本語訳で主語を省略できても、フランス語の平叙文でそのまま主語を落とせるとは限りません。",
    "explanations": [
      {
        "title": "規則動詞の形を組み立てる",
        "body": "parler のような規則的な -er 動詞は、語幹 parl- に -e, -es, -e, -ons, -ez, -ent を付けます。je parle, nous parlons, vous parlez のように主語と対にして確認します。ils parlent の -ent は通常発音されないため、聞こえる音と綴りを区別して覚えます。"
      },
      {
        "title": "主語の意味と文法的人称",
        "body": "on は「人は」「私たちは」などを表せますが、動詞は3人称単数です。On parle français. となり、on parlons にはなりません。vous は複数の相手にも、丁寧に呼びかける一人にも使いますが、動詞は vous に対応する形になります。"
      },
      {
        "title": "現在形の守備範囲",
        "body": "現在形は今この瞬間だけでなく、習慣や一般的な事実にも使います。Je lis tous les jours. は毎日の習慣です。英語の進行形に相当する意味も現在形で表せるため、日本語の「読んでいる」を見て必ず特別な進行形を作る必要はありません。"
      }
    ],
    "comparison": "être（存在・状態）や avoir（所有）は不規則です。je suis / nous sommes、j’ai / nous avons を規則的な -er 動詞から推測しないでください。動詞の意味と構文も一緒に確認します。",
    "examples": [
      {
        "fr": "Nous parlons français.",
        "ja": "私たちはフランス語を話します。",
        "pattern": "S + V + O",
        "analysis": "Nous = S、parlons = V、français = O（言語を表す直接目的語）。",
        "note": "nous に対応する語尾 -ons を確認します。"
      },
      {
        "fr": "Elle travaille.",
        "ja": "彼女は働いています。",
        "pattern": "S + V",
        "analysis": "Elle = S、travaille = V。",
        "note": "目的語を取らずに成立する文です。文型は必ず SVO になるわけではありません。"
      }
    ],
    "mistake": "主語が複数でも、名詞に付ける -s をそのまま動詞に付けるわけではありません。活用表の人称・数で形を選びます。",
    "questions": [
      {
        "prompt": "Nous ___ français.",
        "options": [
          "parle",
          "parlons",
          "parlez"
        ],
        "answer": 1,
        "explanation": "nous の規則的な語尾は -ons です。",
        "hint": "主語は1人称複数です。"
      },
      {
        "prompt": "On ___ ici.",
        "options": [
          "travaille",
          "travaillons",
          "travaillent"
        ],
        "answer": 0,
        "explanation": "on は意味が複数でも文法上は3人称単数です。",
        "hint": "意味と活用上の人称を分けます。"
      },
      {
        "prompt": "現在形で表せるものは？",
        "options": [
          "今この瞬間だけ",
          "習慣や一般的事実も",
          "過去の完了だけ"
        ],
        "answer": 1,
        "explanation": "現在形には習慣・一般的事実などの用法があります。",
        "hint": "tous les jours と共に使えます。"
      }
    ]
  },
  {
    "id": "negation",
    "title": "否定文の構造",
    "french": "La négation",
    "level": "初級",
    "category": "文の構造",
    "minutes": 18,
    "core": "基本の否定は ne と pas で活用した動詞を囲み、肯定の内容を否定します。",
    "detail": "Je comprends. に対して Je ne comprends pas. とします。母音の前では ne は n’ になります。読解では否定の標識を探すだけでなく、何が否定され、何が肯定されたままなのかを確かめることが重要です。",
    "explanations": [
      {
        "title": "活用した動詞を見つける",
        "body": "現在形なら ne と pas はその動詞を囲みます。複合過去なら Je n’ai pas compris. のように活用した助動詞 ai を囲み、過去分詞 compris は後に置かれます。動詞が複数あるときも、否定の位置を単語数で決めないでください。"
      },
      {
        "title": "pas 以外の否定表現",
        "body": "ne…jamais は「決して〜ない」、ne…plus は「もはや〜ない」です。Je ne lis plus ce journal. は以前は読んでいたが今は読まないという変化を示します。通常、こうした否定では pas をさらに足しません。"
      },
      {
        "title": "書き言葉と限定表現",
        "body": "会話では ne が落ちることがありますが、標準的な書き言葉では保持します。ne…que は「〜しか」「〜だけ」という限定で、単純な否定とは違います。Je ne lis que ce livre. はこの本を読むこと自体は肯定しています。"
      }
    ],
    "comparison": "否定では直接目的語の不定冠詞・部分冠詞が通常 de になりますが、定冠詞は残ります。Je n’ai pas de livre. と Je n’aime pas ce livre. では、否定する内容と名詞句の特定性が異なります。",
    "examples": [
      {
        "fr": "Je ne comprends pas cette phrase.",
        "ja": "私はこの文が理解できません。",
        "pattern": "S + V + O（否定）",
        "analysis": "Je = S、comprends = V、cette phrase = O。ne…pas は V を囲む否定標識。",
        "note": "否定標識は主語や目的語には数えません。"
      },
      {
        "fr": "Elle ne lit plus ce journal.",
        "ja": "彼女はもうこの新聞を読んでいません。",
        "pattern": "S + V + O（否定）",
        "analysis": "Elle = S、lit = V、ce journal = O。ne…plus が否定を作ります。",
        "note": "plus は「もはや〜ない」という時間的変化を加えます。"
      }
    ],
    "mistake": "ne…plus を pas と重ねて ne…pas plus にすると、通常は別の意味になります。否定表現をひとまとまりとして扱いましょう。",
    "questions": [
      {
        "prompt": "Je ___ comprends pas.",
        "options": [
          "ne",
          "non",
          "ni"
        ],
        "answer": 0,
        "explanation": "基本形は ne + 活用動詞 + pas です。",
        "hint": "動詞を囲む前半の標識です。"
      },
      {
        "prompt": "「もう読まない」に適切なのは？",
        "options": [
          "ne…jamais",
          "ne…plus",
          "ne…que"
        ],
        "answer": 1,
        "explanation": "ne…plus は以前との変化を含む否定です。",
        "hint": "「もはや」の意味を探します。"
      },
      {
        "prompt": "Je ne lis que ce livre. の意味は？",
        "options": [
          "この本を読まない",
          "本を一切読まない",
          "この本だけ読む"
        ],
        "answer": 2,
        "explanation": "ne…que は限定表現です。",
        "hint": "que の後ろに限定対象があります。"
      }
    ]
  },
  {
    "id": "past",
    "title": "複合過去と半過去",
    "french": "Passé composé et imparfait",
    "level": "中級",
    "category": "時制とアスペクト",
    "minutes": 18,
    "core": "二つの過去形は、出来事を区切って示すか、背景として内側から描くかを分担します。",
    "detail": "複合過去は過去の出来事をまとまりとして捉える用法が中心です。半過去は進行中の状況・習慣・背景を描きます。「短い出来事は複合過去、長い出来事は半過去」ではありません。期間が長くても、終わりまで区切って捉えれば複合過去になり得ます。",
    "explanations": [
      {
        "title": "複合過去の形",
        "body": "avoir または être の現在形と過去分詞を組み合わせます。J’ai lu. は ai + lu です。多くの動詞は avoir を使い、aller など一定の動詞や代名動詞は être を使います。助動詞の選択と過去分詞の形を、動詞ごとに確かめましょう。"
      },
      {
        "title": "半過去の形",
        "body": "原則として現在形 nous の形から -ons を外し、-ais, -ais, -ait, -ions, -iez, -aient を付けます。nous lisons から je lisais です。être は例外的な語幹 ét- を使い、j’étais となります。"
      },
      {
        "title": "背景と出来事を重ねる",
        "body": "Je lisais quand elle est arrivée. では読書が進行中の背景で、到着がその中に起こった出来事です。半過去は読書の終わりをここでは示しません。出来事の客観的な長さよりも、語り手がどこに焦点を置くかが重要です。"
      }
    ],
    "comparison": "文学や思想史の叙述では単純過去が出来事を進めることもあります。複合過去との文体的な違いと、半過去が担う背景の役割を分けて整理します。",
    "examples": [
      {
        "fr": "Je lisais quand elle est arrivée.",
        "ja": "彼女が到着したとき、私は読書中でした。",
        "pattern": "主節：S + V ／ 時の節：S + V",
        "analysis": "Je = S、lisais = V。quand 節では elle = S、est arrivée = V（複合過去）。",
        "note": "lisais は目的語なしで「読書する」の意味。arrivée は être とともに女性単数の主語に一致します。"
      },
      {
        "fr": "Hier, j’ai lu ce chapitre.",
        "ja": "昨日、私はこの章を読みました。",
        "pattern": "S + V + O ＋ 時の修飾語",
        "analysis": "j’ = S、ai lu = V、ce chapitre = O、Hier = 時の修飾語。",
        "note": "助動詞と過去分詞をまとめて一つの述語として捉えます。"
      }
    ],
    "mistake": "過去を表すからといって、すべて同じ時制にはなりません。背景・習慣なのか、区切られた出来事なのかを文脈から判断します。",
    "questions": [
      {
        "prompt": "「読書中だった」という背景：Je ___.",
        "options": [
          "lisais",
          "ai lu",
          "lirai"
        ],
        "answer": 0,
        "explanation": "進行中の背景には半過去が適切です。",
        "hint": "出来事の終わりは述べていません。"
      },
      {
        "prompt": "lire の複合過去は？",
        "options": [
          "je lis",
          "j’ai lu",
          "je lisais"
        ],
        "answer": 1,
        "explanation": "avoir の現在形 ai と過去分詞 lu を使います。",
        "hint": "助動詞と過去分詞を探しましょう。"
      },
      {
        "prompt": "時制の使い分けで重要なのは？",
        "options": [
          "出来事の長さだけ",
          "主語の性だけ",
          "出来事をどう捉えるか"
        ],
        "answer": 2,
        "explanation": "背景として描くか、区切って捉えるかが重要です。",
        "hint": "同じ出来事も視点で描写が変わります。"
      }
    ]
  },
  {
    "id": "object-pronouns",
    "title": "直接・間接目的語代名詞",
    "french": "Les pronoms compléments",
    "level": "中級",
    "category": "代名詞",
    "minutes": 18,
    "core": "目的語代名詞は、すでに分かっている対象を受け、動詞の前に置かれることが多い語です。",
    "detail": "Je lis ce livre. の ce livre を受けると Je le lis. になります。le・la・les は直接目的語、lui・leur は典型的には人を指す à の間接目的語を受けます。まず動詞がどんな補語を取るかを調べてから、代名詞を選びます。",
    "explanations": [
      {
        "title": "前置詞を含む元の構造を戻す",
        "body": "voir Marie は直接目的語なので Je la vois.、parler à Marie は間接目的語なので Je lui parle. です。人か物かだけでは区別できません。Marie を指していても、動詞の構造によって la と lui を使い分けます。"
      },
      {
        "title": "代名詞の位置",
        "body": "通常の平叙文では Je le lis. のように活用動詞の前に置きます。不定詞の目的語なら Je veux le lire. と不定詞の前に置きます。肯定命令では Lis-le. のように後置されるため、「必ず文の動詞の直前」とだけ覚えないでください。"
      },
      {
        "title": "lui と leur の区別",
        "body": "lui は間接目的語の単数で、男性・女性のどちらにも使います。leur は複数です。Je leur parle. の leur は代名詞なので -s を付けません。leurs livres の leurs は所有限定詞であり、同じように見えても別の働きです。"
      }
    ],
    "comparison": "le は冠詞にも代名詞にもなります。le livre なら名詞句を作る冠詞、je le lis なら動詞の目的語を担う代名詞です。直後に来る語と文全体の構造を見て判別します。",
    "examples": [
      {
        "fr": "Je le lis.",
        "ja": "私はそれを読んでいます。",
        "pattern": "語順：S + O + V（基礎構造 SVO）",
        "analysis": "Je = S、le = O（男性単数の直接目的語代名詞）、lis = V。",
        "note": "le の指す本などは文脈から復元します。"
      },
      {
        "fr": "Elle leur parle.",
        "ja": "彼女は彼ら／彼女たちに話しています。",
        "pattern": "S + 間接目的語 + V",
        "analysis": "Elle = S、leur = 間接目的語、parle = V。",
        "note": "元の構造は parler à ces personnes です。"
      }
    ],
    "mistake": "à の後ろの人をすべて lui に置き換えられるわけではありません。penser à elle のように強勢形を保つ動詞もあるため、動詞ごとの構文を確認します。",
    "questions": [
      {
        "prompt": "Je vois Marie. → Je ___ vois.",
        "options": [
          "lui",
          "la",
          "leur"
        ],
        "answer": 1,
        "explanation": "voir はここで直接目的語を取るため la です。",
        "hint": "元の文には à がありません。"
      },
      {
        "prompt": "Je parle à mes amis. → Je ___ parle.",
        "options": [
          "les",
          "le",
          "leur"
        ],
        "answer": 2,
        "explanation": "à を伴う複数の人を leur で受けます。",
        "hint": "単数なら lui です。"
      },
      {
        "prompt": "「私はそれを読みたい」",
        "options": [
          "Je le veux lire.",
          "Je veux le lire.",
          "Je veux lire le."
        ],
        "answer": 1,
        "explanation": "le は lire の目的語なので、不定詞 lire の前に置きます。",
        "hint": "どの動詞の目的語かを考えましょう。"
      }
    ]
  },
  {
    "id": "conditional",
    "title": "条件法と仮定の si",
    "french": "Le conditionnel et l’hypothèse",
    "level": "上級",
    "category": "動詞と法",
    "minutes": 18,
    "core": "条件法は、ある条件のもとで成立する結果や、現実から距離を置いた表現に使われます。",
    "detail": "Si j’avais le temps, je lirais ce livre. は、時間があれば読むという仮定です。si 節の半過去はここで過去の出来事を語るのではなく、現在の現実から距離を置く働きを持ちます。主節の条件法と組み合わせて解釈します。",
    "explanations": [
      {
        "title": "条件法現在の形",
        "body": "単純未来と共通の語幹に、半過去と同じ語尾 -ais, -ais, -ait, -ions, -iez, -aient を付けます。lire は je lirais、être は je serais、avoir は j’aurais です。未来の je lirai と条件法の je lirais は綴りが近いので、文脈と主語も確認します。"
      },
      {
        "title": "si 節との対応",
        "body": "現在・未来の開かれた条件は Si j’ai le temps, je lirai ce livre. のように si + 現在、主節 + 未来で表せます。現実から距離を置く仮定は si + 半過去、主節 + 条件法現在です。ここで扱う条件の si 節には、通常、条件法を入れません。"
      },
      {
        "title": "丁寧さと過去の仮定",
        "body": "Je voudrais… は意志を直接押し出さず、控えめな希望として述べる用法です。また、実現しなかった過去の仮定は Si j’avais su, je serais venu. のように大過去と条件法過去を組み合わせます。現在の仮定と過去の反実仮想を混同しないでください。"
      }
    ],
    "comparison": "接続法は主節の表現や接続詞に要求されることが多いのに対し、条件法はここでは仮定に対する結果を表します。「不確かだからどちらでもよい」とはなりません。",
    "examples": [
      {
        "fr": "Si j’avais le temps, je lirais ce livre.",
        "ja": "時間があれば、私はこの本を読むのですが。",
        "pattern": "条件節：S + V + O ／ 主節：S + V + O",
        "analysis": "条件節：j’ = S、avais = V、le temps = O。主節：je = S、lirais = V、ce livre = O。",
        "note": "avais は半過去、lirais は条件法現在です。"
      },
      {
        "fr": "Je voudrais un café.",
        "ja": "コーヒーを一杯いただきたいのですが。",
        "pattern": "S + V + O",
        "analysis": "Je = S、voudrais = V、un café = O。",
        "note": "条件法によって希望を控えめに提示します。"
      }
    ],
    "mistake": "条件を表す si 節で Si j’aurais… とするのは標準的な仮定構文ではありません。Si j’avais… と主節の条件法を対応させます。",
    "questions": [
      {
        "prompt": "Si j’avais le temps, je ___ ce livre.",
        "options": [
          "lirai",
          "lirais",
          "lis"
        ],
        "answer": 1,
        "explanation": "si + 半過去に対応する仮定の結果は条件法現在です。",
        "hint": "lirai は単純未来です。"
      },
      {
        "prompt": "条件節の標準的な形は？",
        "options": [
          "Si j’aurais le temps",
          "Si j’avais le temps",
          "Si j’aurai le temps"
        ],
        "answer": 1,
        "explanation": "この仮定では si 節に半過去を使います。",
        "hint": "条件法は主節に置きます。"
      },
      {
        "prompt": "Je voudrais… の働きは？",
        "options": [
          "必ず過去を述べる",
          "必ず否定する",
          "希望を控えめに述べる"
        ],
        "answer": 2,
        "explanation": "条件法には丁寧な依頼・希望の用法があります。",
        "hint": "直接的な je veux と比べましょう。"
      }
    ]
  }
];
