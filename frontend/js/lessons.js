// 100-Lesson Curriculum (Extended to 40-50 words each)
const typingLessons = [
    {
        "category": "1. Basic Key Isolations",
        "lessons": [
            {
                "id": 1,
                "title": "Home Row Basics (F & J)",
                "text": "jjjj f j ff jj ffff f j fj jf f jf ff jj j fj fj jf f jf ffff ff jj ff fj f j jj jjjj j f j jjjj jj jf f f ff fj f j jf j j fj ffff ff jj"
            },
            {
                "id": 2,
                "title": "Home Row Extension (D & K)",
                "text": "dk kd dd kkkk kk kk d k k dk d d dddd dd kd k kk kd d dk dk d kd k dd k kk d k kkkk dd dddd d kk dk dd k kd dk d dd"
            },
            {
                "id": 3,
                "title": "Home Row Extension (S & L)",
                "text": "s ls l l ll sl ll ss ssss s llll ls l sl s ss l sl s l l ls s llll ssss ll ss sl ls s ll ss s ls sl ss ll ll l ls ssss ss s sl s l llll"
            },
            {
                "id": 4,
                "title": "Home Row Edges (A & ;)",
                "text": ";; ;a ;; aaaa aa a; ;;;; aa ; ; ;a a a a a; ; a a; aa aaaa ; ;; ;;;; ; ;a aa ; ;a a a; ;; a aa a a; aaaa a; ;a a ; ;;;; ;a"
            },
            {
                "id": 5,
                "title": "Home Row Review",
                "text": "asdf as jkl; asdf jk jkl; asdf jkl; l; jkl; asdf df jkl; asdf jk l; jkl; asdf df jkl; as jkl; asdf asdf jkl; asdf df asdf jk jkl; jkl; asdf jkl; asdf l; as jk asdf as l; jkl; asdf jkl;"
            },
            {
                "id": 6,
                "title": "Top Row Reach (R & U)",
                "text": "u ru uuuu r uu uu rr rrrr rr r u ur ru u r ur r uu u rr r ru rrrr u uu rr ru uuuu r ur ur u ru ur rr ur r u uu r u u rrrr"
            },
            {
                "id": 7,
                "title": "Top Row Reach (E & I)",
                "text": "e e i ei ie ii ie e iiii ee ei ii eeee i ee i i iiii i ie ei ee ie e ii eeee ii e e ei ee i e ei ei ie ee e iiii ii e ie ii i i i ee"
            },
            {
                "id": 8,
                "title": "Top Row Reach (W & O)",
                "text": "wwww w ow ww w oo oooo o oo ww wo ow wo o o w w wwww ow o oo w ww ow wo o wo ww w o oo oooo o wo ow wo o oo oo ww w ww wwww oooo"
            },
            {
                "id": 9,
                "title": "Top Row Reach (Q & P)",
                "text": "pq p q pppp q pp qqqq pq pp qq qp p qq p qp q qp p pp pp qp pppp qq p q q p qq qqqq pq q pq q p pq p qq p pq pp q qp qq q pp qp pppp qqqq"
            },
            {
                "id": 10,
                "title": "Top Row Reach (T & Y)",
                "text": "yt t tt ty y t ty yy yyyy y tt tttt yy yt t y tttt tt tt t ty yyyy yy ty y t yt y yt y t yy y yyyy ty yt yt tt y t t yy t"
            },
            {
                "id": 11,
                "title": "Bottom Row Drop (V & M)",
                "text": "v mmmm vvvv v vm m m mm mv v vv vm mm m mv vv m vm m vv m mm mmmm vvvv mm v mv vm mv vv v v m v vvvv v vv vm m mv mm mmmm m mv mm vm v vv"
            },
            {
                "id": 12,
                "title": "Bottom Row Drop (C & ,)",
                "text": ",c , c, c , c c, cccc cc cc c ,c ,,,, ,, , ,, ,, , ,c ,c c c, c, ,,,, cc , c cccc cc ,, c , ,, ,,,, c , , c, c c, cc ,c ,, ,c cc c ,"
            },
            {
                "id": 13,
                "title": "Bottom Row Drop (X & .)",
                "text": "x . x . xx .. x. .x x . xx .. x. .x xxxx .... x . x . xx .. x. .x x . xx .. x. .x xxxx .... x . x . xx .. x. .x x . xx .. x. .x xxxx ...."
            },
            {
                "id": 14,
                "title": "Bottom Row Drop (Z & /)",
                "text": "z /z zz zz /z zzzz // z/ // //// / z/ / z / z zz z z/ zz / //// /z z // z/ / // /z zzzz z / zz z /z / / /z //// z/ zz // / // z zzzz"
            },
            {
                "id": 15,
                "title": "Bottom Row Drop (B & N)",
                "text": "bn n nb nn bb n bb nb nn b b b nnnn bn n bbbb b bbbb b n bb n nn bn nn n b bn nb bb nnnn nb n b bbbb nn nb bn b n nb"
            },
            {
                "id": 16,
                "title": "Shift Key Left",
                "text": "Z X A D F V Q E R C W S R V Q S D E C A F Z W X V Z D F X C W R E S Q A A Z E R"
            },
            {
                "id": 17,
                "title": "Shift Key Right",
                "text": "L P O Y U I N J K M U P Y K I O M N J L I N J M O K Y L P U M Y U O J I N P K L U"
            },
            {
                "id": 18,
                "title": "Shift Key Alternating",
                "text": "f A k K s J l S j a L d F D J d S s l L k F K D j a A f a S J L F d f j K D k s A l d a"
            },
            {
                "id": 19,
                "title": "Pinky Master",
                "text": "a q p / / ; z q z p ; a ; q a p a z / ; p z / q q / q p ; a / z ; a p z ; a z q / ; q z p / p a"
            },
            {
                "id": 20,
                "title": "Index Master",
                "text": "g y h m t j n v b f r u b t r h y g n f m v j u h f b j g u t n m r v y r u h y n g f m"
            }
        ]
    },
    {
        "category": "2. Word Building",
        "lessons": [
            {
                "id": 21,
                "title": "Home Row Words",
                "text": "glass glad ask salad flash fall dash flask sad flash fall flask sad ask dash glad glass salad salad flash sad dash glad flask ask glass fall glass flask salad fall glad flash sad dash ask sad glad dash salad flash glass flask ask fall flash glad sad salad"
            },
            {
                "id": 22,
                "title": "Top Row Words",
                "text": "pot your tree type pour equip power quiet root pot quiet type your equip pour tree root power your power pour root quiet type equip pot tree tree quiet pour your pot equip power root type quiet type power pour equip tree root pot your your pour"
            },
            {
                "id": 23,
                "title": "Bottom Row Words",
                "text": "max extra man mix ban vibe zombie cave cab zip zip max cab mix extra man vibe zombie ban cave zip ban max extra vibe man cab cave zombie mix extra cave cab mix max zombie vibe man zip ban ban"
            },
            {
                "id": 24,
                "title": "Left Hand Only",
                "text": "star sacred faster deaf water secret create fade star create faster sacred fade secret deaf water star faster create sacred water deaf secret fade fade water deaf faster star create secret sacred create deaf sacred water secret fade faster star fade create secret star faster water"
            },
            {
                "id": 25,
                "title": "Right Hand Only",
                "text": "pool imply hoop minimum you loop onion in on million you minimum in pool loop million hoop imply onion on imply million loop onion minimum you hoop on pool in in loop on onion minimum imply you hoop million pool on imply you pool"
            },
            {
                "id": 26,
                "title": "Short Words 1",
                "text": "for to the I it a be in of that not have and in have and I it not to of be for a the that of it not for have and that to be a I the in in"
            },
            {
                "id": 27,
                "title": "Short Words 2",
                "text": "on as do at this with by he but you his from on as from do by at his but you this he with at but his with do on this as you by from he he but on his by with from do as at you"
            },
            {
                "id": 28,
                "title": "Short Words 3",
                "text": "or we her one will would she an my say all they they her one would say will she an or all my we an they say my we would one all or she her will one would she they an we or will my her all"
            },
            {
                "id": 29,
                "title": "Common Words 1",
                "text": "who about so up if which what out there their get so about there out their up which if get who what about so out up who if which get there what their what about who get which out their there up so if their what about up out there"
            },
            {
                "id": 30,
                "title": "Common Words 2",
                "text": "know go when just me him make can like no time him time go me no just can when like make know like time him make know no just when can me go him just when time go make like can me"
            },
            {
                "id": 31,
                "title": "Common Words 3",
                "text": "into your good them some year see take could people year could some them your see take good people into take see could year into your people them good some your year take could them into people some good see people good could some your take see into year them"
            },
            {
                "id": 32,
                "title": "Longer Words 1",
                "text": "everything family around through completely important through important completely family everything around completely through everything family important around through family important completely around everything important everything completely family around through through family everything around important completely family around through everything important completely completely everything through important around family"
            },
            {
                "id": 33,
                "title": "Longer Words 2",
                "text": "possible remember development information business possible business remember information development business possible information remember development business development possible information remember business remember possible information development development information remember possible business possible business remember development information remember possible information business development"
            },
            {
                "id": 34,
                "title": "Tricky Words 1",
                "text": "rhythm embarrass pronunciation accommodation necessary rhythm accommodation necessary embarrass pronunciation necessary pronunciation accommodation embarrass rhythm pronunciation rhythm embarrass accommodation necessary embarrass pronunciation rhythm necessary accommodation pronunciation accommodation rhythm embarrass necessary accommodation necessary rhythm pronunciation embarrass pronunciation embarrass accommodation rhythm necessary accommodation pronunciation embarrass rhythm necessary necessary"
            },
            {
                "id": 35,
                "title": "Tricky Words 2",
                "text": "mayonnaise conscientious occasionally definitely fluorescent mayonnaise conscientious occasionally definitely fluorescent occasionally conscientious fluorescent mayonnaise definitely fluorescent mayonnaise occasionally definitely conscientious occasionally definitely fluorescent mayonnaise conscientious mayonnaise conscientious fluorescent occasionally definitely conscientious occasionally mayonnaise fluorescent definitely definitely mayonnaise occasionally conscientious fluorescent conscientious occasionally fluorescent definitely mayonnaise occasionally conscientious mayonnaise fluorescent"
            },
            {
                "id": 36,
                "title": "Double Letters 1",
                "text": "little feel off spell book letter missing soon sweet feel letter book off little spell sweet missing soon book feel soon letter missing sweet off little spell little soon off feel book letter sweet missing spell missing sweet little soon off letter book feel spell feel off"
            },
            {
                "id": 37,
                "title": "Double Letters 2",
                "text": "sudden account allow apparent opposite address success apparent sudden success allow account address opposite apparent account address opposite allow success sudden allow apparent success address sudden account opposite sudden allow address apparent opposite success account success apparent sudden opposite account address allow opposite"
            },
            {
                "id": 38,
                "title": "Vowel Focus",
                "text": "piece dialogue aerial audio beautiful sequoia queue aerial piece audio sequoia beautiful dialogue queue beautiful audio aerial queue piece dialogue sequoia beautiful audio queue aerial piece dialogue sequoia aerial queue beautiful piece sequoia dialogue audio queue piece dialogue aerial sequoia beautiful audio audio dialogue sequoia aerial queue beautiful piece dialogue"
            },
            {
                "id": 39,
                "title": "Consonant Focus",
                "text": "rhythm sixths strength strictly lengths prompts lengths sixths prompts strength rhythm strictly prompts sixths strictly strength rhythm lengths prompts strictly strength lengths sixths rhythm lengths strictly rhythm prompts strength sixths prompts lengths strength rhythm sixths strictly strictly sixths lengths strength prompts rhythm strength lengths strictly rhythm prompts"
            },
            {
                "id": 40,
                "title": "Action Words",
                "text": "playing jumping building typing reading creating running reading typing playing jumping building creating running playing running jumping creating reading building typing typing playing running jumping creating building reading creating running building reading typing jumping playing reading running creating playing jumping building typing building playing running typing reading creating jumping typing"
            },
            {
                "id": 41,
                "title": "Nature Words",
                "text": "galaxy ocean island mountain forest planet river desert galaxy mountain desert ocean river forest island planet island ocean mountain desert galaxy planet river forest ocean forest desert river planet galaxy island mountain galaxy mountain ocean planet desert river island forest river mountain island forest desert ocean planet galaxy galaxy planet"
            },
            {
                "id": 42,
                "title": "Tech Words",
                "text": "processor network keyboard screen mouse storage cloud memory screen storage mouse keyboard processor memory network cloud cloud screen keyboard network processor memory storage mouse processor screen storage memory mouse cloud keyboard network memory keyboard processor mouse network cloud storage screen network mouse memory processor storage cloud"
            },
            {
                "id": 43,
                "title": "Food Words",
                "text": "cheese orange salad apple milk bread banana pizza pasta pizza cheese apple bread pasta salad orange banana milk pasta cheese orange salad milk apple banana pizza bread milk pasta orange pizza banana cheese salad bread apple apple orange salad pizza banana pasta milk bread cheese"
            },
            {
                "id": 44,
                "title": "Animal Words",
                "text": "elephant giraffe eagle tiger whale lion dolphin penguin penguin lion dolphin tiger giraffe elephant eagle whale giraffe eagle dolphin whale tiger lion penguin elephant whale dolphin giraffe tiger elephant lion penguin eagle giraffe elephant lion tiger dolphin whale penguin eagle dolphin elephant penguin"
            },
            {
                "id": 45,
                "title": "Color Words",
                "text": "white yellow brown orange black purple blue red green blue red white green yellow black purple brown orange brown purple blue black white yellow green red orange black red purple yellow blue orange brown white green orange purple black green red blue white brown yellow purple red brown black"
            }
        ]
    },
    {
        "category": "3. Sentences & Punctuation",
        "lessons": [
            {
                "id": 46,
                "title": "Basic Sentences 1",
                "text": "The cat sat on the mat. I have a dog. We play ball. The cat sat on the mat. I have a dog. We play ball. The cat sat on the mat. I have a dog. We play ball. The cat sat on the mat. I have a dog. We play ball."
            },
            {
                "id": 47,
                "title": "Basic Sentences 2",
                "text": "We went to the park. She likes to read books. We went to the park. She likes to read books. We went to the park. She likes to read books. We went to the park. She likes to read books. We went to the park. She likes to read books."
            },
            {
                "id": 48,
                "title": "Basic Sentences 3",
                "text": "They play games outside. The sun is very bright today. They play games outside. The sun is very bright today. They play games outside. The sun is very bright today. They play games outside. The sun is very bright today. They play games outside. The sun is very bright today."
            },
            {
                "id": 49,
                "title": "Capitalization 1",
                "text": "John and Mary went to Paris, France. They had fun. John and Mary went to Paris, France. They had fun. John and Mary went to Paris, France. They had fun. John and Mary went to Paris, France. They had fun. John and Mary went to Paris, France. They had fun."
            },
            {
                "id": 50,
                "title": "Capitalization 2",
                "text": "They visited the Eiffel Tower on Tuesday. It was huge. They visited the Eiffel Tower on Tuesday. It was huge. They visited the Eiffel Tower on Tuesday. It was huge. They visited the Eiffel Tower on Tuesday. It was huge. They visited the Eiffel Tower on Tuesday. It was huge."
            },
            {
                "id": 51,
                "title": "Capitalization 3",
                "text": "Next year, they plan to visit Tokyo, Japan. Very exciting. Next year, they plan to visit Tokyo, Japan. Very exciting. Next year, they plan to visit Tokyo, Japan. Very exciting. Next year, they plan to visit Tokyo, Japan. Very exciting. Next year, they plan to visit Tokyo, Japan. Very exciting."
            },
            {
                "id": 52,
                "title": "Question Marks",
                "text": "How are you today? What time is it? Are we there yet? How are you today? What time is it? Are we there yet? How are you today? What time is it? Are we there yet? How are you today? What time is it? Are we there yet?"
            },
            {
                "id": 53,
                "title": "Exclamation Marks",
                "text": "Watch out! That is amazing! I won the big game! Watch out! That is amazing! I won the big game! Watch out! That is amazing! I won the big game! Watch out! That is amazing! I won the big game!"
            },
            {
                "id": 54,
                "title": "Quotes",
                "text": "She said, \"Hello there.\" He replied, \"How are you?\" She said, \"Hello there.\" He replied, \"How are you?\" She said, \"Hello there.\" He replied, \"How are you?\" She said, \"Hello there.\" He replied, \"How are you?\" She said, \"Hello there.\" He replied, \"How are you?\""
            },
            {
                "id": 55,
                "title": "Mixed Punctuation",
                "text": "Wow! Is it really true? Yes, it is 100% true. Wow! Is it really true? Yes, it is 100% true. Wow! Is it really true? Yes, it is 100% true. Wow! Is it really true? Yes, it is 100% true. Wow! Is it really true? Yes, it is 100% true."
            },
            {
                "id": 56,
                "title": "Commas in Lists",
                "text": "I bought apples, bananas, and oranges. They are sweet. I bought apples, bananas, and oranges. They are sweet. I bought apples, bananas, and oranges. They are sweet. I bought apples, bananas, and oranges. They are sweet. I bought apples, bananas, and oranges. They are sweet."
            },
            {
                "id": 57,
                "title": "Semicolons",
                "text": "It was late; we went home. She is tired; she needs sleep. It was late; we went home. She is tired; she needs sleep. It was late; we went home. She is tired; she needs sleep. It was late; we went home. She is tired; she needs sleep."
            },
            {
                "id": 58,
                "title": "Colons",
                "text": "Here is the list: bread, milk, eggs. Do not forget them. Here is the list: bread, milk, eggs. Do not forget them. Here is the list: bread, milk, eggs. Do not forget them. Here is the list: bread, milk, eggs. Do not forget them. Here is the list: bread, milk, eggs. Do not forget them."
            },
            {
                "id": 59,
                "title": "Apostrophes",
                "text": "It's my dog's toy. They're going to the party today. It's my dog's toy. They're going to the party today. It's my dog's toy. They're going to the party today. It's my dog's toy. They're going to the party today. It's my dog's toy. They're going to the party today."
            },
            {
                "id": 60,
                "title": "Hyphens",
                "text": "It is a well-known fact. We have a fifty-five percent chance. It is a well-known fact. We have a fifty-five percent chance. It is a well-known fact. We have a fifty-five percent chance. It is a well-known fact. We have a fifty-five percent chance."
            },
            {
                "id": 61,
                "title": "Dashes",
                "text": "He started to run - but it was too late. I was - thinking. He started to run - but it was too late. I was - thinking. He started to run - but it was too late. I was - thinking. He started to run - but it was too late. I was - thinking."
            },
            {
                "id": 62,
                "title": "Complex Sentences 1",
                "text": "Although it was raining, we decided to go for a long walk in the park. Although it was raining, we decided to go for a long walk in the park. Although it was raining, we decided to go for a long walk in the park. Although it was raining, we decided to go for a long walk in the park."
            },
            {
                "id": 63,
                "title": "Complex Sentences 2",
                "text": "She studied hard for the exam; therefore, she got a very high grade. She studied hard for the exam; therefore, she got a very high grade. She studied hard for the exam; therefore, she got a very high grade. She studied hard for the exam; therefore, she got a very high grade."
            },
            {
                "id": 64,
                "title": "Dialogue Practice",
                "text": "\"Wait!\" she yelled. \"Don't go in there!\" \"Why not?\" he asked. \"Wait!\" she yelled. \"Don't go in there!\" \"Why not?\" he asked. \"Wait!\" she yelled. \"Don't go in there!\" \"Why not?\" he asked. \"Wait!\" she yelled. \"Don't go in there!\" \"Why not?\" he asked. \"Wait!\" she yelled. \"Don't go in there!\" \"Why not?\" he asked."
            },
            {
                "id": 65,
                "title": "Paragraph Flow",
                "text": "The quick brown fox jumps over the lazy dog. Then the dog wakes up and barks loudly. The quick brown fox jumps over the lazy dog. Then the dog wakes up and barks loudly. The quick brown fox jumps over the lazy dog. Then the dog wakes up and barks loudly."
            }
        ]
    },
    {
        "category": "4. Numbers and Symbols",
        "lessons": [
            {
                "id": 66,
                "title": "Number Row (1, 2, 3)",
                "text": "1 321 3 2 33 22 33 3 22 1 11 2 123 11 1 33 33 2 3 1 3 321 11 22 11 123 22 2 1 321 2 3 2 3 11 22 33 33 11 22 1 123 3 1 123 11"
            },
            {
                "id": 67,
                "title": "Number Row (4, 5, 6)",
                "text": "654 456 66 6 5 4 6 66 44 55 4 55 44 5 66 456 5 4 44 66 55 5 55 6 44 4 654 6 5 6 6 55 66 44 44 4 5 654 55 66 456 4 6"
            },
            {
                "id": 68,
                "title": "Number Row (7, 8, 9, 0)",
                "text": "00 77 9 78 0987 7 8 7890 0 88 99 90 9 99 8 77 00 88 0987 0 78 7 90 7890 0987 8 78 88 90 9 00 7 77 0 7890 99 0 78 8 90 00 9 0987 88 7890"
            },
            {
                "id": 69,
                "title": "Math Symbols (+, -, =, *)",
                "text": "1 + 1 = 2; 5 - 3 = 2; 10 * 10 = 100; 1 + 1 = 2; 5 - 3 = 2; 10 * 10 = 100; 1 + 1 = 2; 5 - 3 = 2; 10 * 10 = 100;"
            },
            {
                "id": 70,
                "title": "Money Symbols ($, \u00a2, \u00a3)",
                "text": "The total is $45.99 or \u00a335.50. I have 50\u00a2 left. The total is $45.99 or \u00a335.50. I have 50\u00a2 left. The total is $45.99 or \u00a335.50. I have 50\u00a2 left. The total is $45.99 or \u00a335.50. I have 50\u00a2 left. The total is $45.99 or \u00a335.50. I have 50\u00a2 left."
            },
            {
                "id": 71,
                "title": "Email and Web (@, #)",
                "text": "user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com user@example.com; #coding #typing @twitter website.com"
            },
            {
                "id": 72,
                "title": "Parentheses & Brackets",
                "text": "(This is in parentheses) [And brackets] {Braces} are nice. (This is in parentheses) [And brackets] {Braces} are nice. (This is in parentheses) [And brackets] {Braces} are nice. (This is in parentheses) [And brackets] {Braces} are nice. (This is in parentheses) [And brackets] {Braces} are nice."
            },
            {
                "id": 73,
                "title": "Percentages & Ampersands",
                "text": "Sales are up 15% & profits are up 20% today. Sales are up 15% & profits are up 20% today. Sales are up 15% & profits are up 20% today. Sales are up 15% & profits are up 20% today. Sales are up 15% & profits are up 20% today."
            },
            {
                "id": 74,
                "title": "Slashes and Pipes",
                "text": "Yes/No, True/False | This is a pipe symbol in code. Yes/No, True/False | This is a pipe symbol in code. Yes/No, True/False | This is a pipe symbol in code. Yes/No, True/False | This is a pipe symbol in code. Yes/No, True/False | This is a pipe symbol in code."
            },
            {
                "id": 75,
                "title": "All Symbols Review",
                "text": "!@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard. !@#$%^&*() _+-=[]{}|;':\",./<>? `~ are hard."
            },
            {
                "id": 76,
                "title": "Dates",
                "text": "Born on 01/01/2000. Meeting at 15-05-2026. Independence: 1776. Born on 01/01/2000. Meeting at 15-05-2026. Independence: 1776. Born on 01/01/2000. Meeting at 15-05-2026. Independence: 1776. Born on 01/01/2000. Meeting at 15-05-2026. Independence: 1776. Born on 01/01/2000. Meeting at 15-05-2026. Independence: 1776. Born on 01/01/2000. Meeting at 15-05-2026. Independence: 1776."
            },
            {
                "id": 77,
                "title": "Times",
                "text": "Wake up at 06:30 AM. Lunch at 12:45 PM. Dinner at 19:00. Wake up at 06:30 AM. Lunch at 12:45 PM. Dinner at 19:00. Wake up at 06:30 AM. Lunch at 12:45 PM. Dinner at 19:00. Wake up at 06:30 AM. Lunch at 12:45 PM. Dinner at 19:00."
            },
            {
                "id": 78,
                "title": "Phone Numbers",
                "text": "Call me at (555) 123-4567 or +1-800-999-0000. Call me at (555) 123-4567 or +1-800-999-0000. Call me at (555) 123-4567 or +1-800-999-0000. Call me at (555) 123-4567 or +1-800-999-0000. Call me at (555) 123-4567 or +1-800-999-0000. Call me at (555) 123-4567 or +1-800-999-0000. Call me at (555) 123-4567 or +1-800-999-0000."
            },
            {
                "id": 79,
                "title": "IP Addresses",
                "text": "Localhost is 127.0.0.1. Router is at 192.168.0.1. Localhost is 127.0.0.1. Router is at 192.168.0.1. Localhost is 127.0.0.1. Router is at 192.168.0.1. Localhost is 127.0.0.1. Router is at 192.168.0.1. Localhost is 127.0.0.1. Router is at 192.168.0.1. Localhost is 127.0.0.1. Router is at 192.168.0.1. Localhost is 127.0.0.1. Router is at 192.168.0.1."
            },
            {
                "id": 80,
                "title": "Hex Codes",
                "text": "Color white is #FFFFFF. Black is #000000. Gray is #CCCCCC. Color white is #FFFFFF. Black is #000000. Gray is #CCCCCC. Color white is #FFFFFF. Black is #000000. Gray is #CCCCCC. Color white is #FFFFFF. Black is #000000. Gray is #CCCCCC. Color white is #FFFFFF. Black is #000000. Gray is #CCCCCC."
            }
        ]
    },
    {
        "category": "5. Advanced Challenges",
        "lessons": [
            {
                "id": 81,
                "title": "Speed Burst 1",
                "text": "The quick brown fox jumps over the lazy dog. Pack my box. The quick brown fox jumps over the lazy dog. Pack my box. The quick brown fox jumps over the lazy dog. Pack my box. The quick brown fox jumps over the lazy dog. Pack my box."
            },
            {
                "id": 82,
                "title": "Speed Burst 2",
                "text": "Pack my box with five dozen liquor jugs. Very fast typing. Pack my box with five dozen liquor jugs. Very fast typing. Pack my box with five dozen liquor jugs. Very fast typing. Pack my box with five dozen liquor jugs. Very fast typing. Pack my box with five dozen liquor jugs. Very fast typing."
            },
            {
                "id": 83,
                "title": "Code: Variables",
                "text": "let x = 10; const y = 20; var z = \"string\"; let x = 10; const y = 20; var z = \"string\"; let x = 10; const y = 20; var z = \"string\"; let x = 10; const y = 20; var z = \"string\";"
            },
            {
                "id": 84,
                "title": "Code: Functions",
                "text": "function add(a, b) { return a + b; } function add(a, b) { return a + b; } function add(a, b) { return a + b; } function add(a, b) { return a + b; } function add(a, b) { return a + b; }"
            },
            {
                "id": 85,
                "title": "Code: Loops",
                "text": "for(let i = 0; i < 10; i++) { console.log(i); } for(let i = 0; i < 10; i++) { console.log(i); } for(let i = 0; i < 10; i++) { console.log(i); } for(let i = 0; i < 10; i++) { console.log(i); }"
            },
            {
                "id": 86,
                "title": "Code: HTML",
                "text": "<div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div> <div class=\"container\"><h1>Hello</h1><p>Text</p></div>"
            },
            {
                "id": 87,
                "title": "Code: CSS",
                "text": ".box { color: red; margin-top: 20px; display: flex; } .box { color: red; margin-top: 20px; display: flex; } .box { color: red; margin-top: 20px; display: flex; } .box { color: red; margin-top: 20px; display: flex; } .box { color: red; margin-top: 20px; display: flex; }"
            },
            {
                "id": 88,
                "title": "Code: JSON",
                "text": "{\"name\": \"John\", \"age\": 30, \"city\": \"New York\"} {\"name\": \"John\", \"age\": 30, \"city\": \"New York\"} {\"name\": \"John\", \"age\": 30, \"city\": \"New York\"} {\"name\": \"John\", \"age\": 30, \"city\": \"New York\"} {\"name\": \"John\", \"age\": 30, \"city\": \"New York\"} {\"name\": \"John\", \"age\": 30, \"city\": \"New York\"} {\"name\": \"John\", \"age\": 30, \"city\": \"New York\"}"
            },
            {
                "id": 89,
                "title": "Code: SQL",
                "text": "users FROM ORDER BY name ASC; WHERE SELECT 18 > age * BY age ASC; > WHERE ORDER * 18 FROM users name SELECT BY age > ORDER FROM ASC; SELECT * name 18 WHERE users FROM ASC; ORDER WHERE age BY"
            },
            {
                "id": 90,
                "title": "Code: Python",
                "text": "def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\") def greet(name): print(f\"Hello, {name}!\")"
            },
            {
                "id": 91,
                "title": "Long Paragraph 1",
                "text": "Typing fast requires both precision and muscle memory. Practice daily to improve. Keep your hands on the home row. Typing fast requires both precision and muscle memory. Practice daily to improve. Keep your hands on the home row. Typing fast requires both precision and muscle memory. Practice daily to improve. Keep your hands on the home row."
            },
            {
                "id": 92,
                "title": "Long Paragraph 2",
                "text": "The history of the keyboard dates back to the typewriter. The QWERTY layout was designed to prevent jamming. The history of the keyboard dates back to the typewriter. The QWERTY layout was designed to prevent jamming. The history of the keyboard dates back to the typewriter. The QWERTY layout was designed to prevent jamming."
            },
            {
                "id": 93,
                "title": "Complex Mixed Text 1",
                "text": "Email bob@test.com by 5:00 PM! Is the total $42.50? (Yes). Send it now. Email bob@test.com by 5:00 PM! Is the total $42.50? (Yes). Send it now. Email bob@test.com by 5:00 PM! Is the total $42.50? (Yes). Send it now. Email bob@test.com by 5:00 PM! Is the total $42.50? (Yes). Send it now."
            },
            {
                "id": 94,
                "title": "Complex Mixed Text 2",
                "text": "Temperature is 98.6F (37C). Stock is up 5.2% to $150.25. Temperature is 98.6F (37C). Stock is up 5.2% to $150.25. Temperature is 98.6F (37C). Stock is up 5.2% to $150.25. Temperature is 98.6F (37C). Stock is up 5.2% to $150.25. Temperature is 98.6F (37C). Stock is up 5.2% to $150.25."
            },
            {
                "id": 95,
                "title": "Nonsense Text",
                "text": "UuI mN hJ fG pL ZzXyQw oP cX mKj sD lK bV zA kL mN zA mKj sD oP hJ bV ZzXyQw UuI cX pL kL lK fG sD bV cX hJ kL fG ZzXyQw mN lK mKj UuI zA oP pL"
            },
            {
                "id": 96,
                "title": "Tongue Twister 1",
                "text": "She sells seashells by the seashore. The shells she sells are surely seashells. She sells seashells by the seashore. The shells she sells are surely seashells. She sells seashells by the seashore. The shells she sells are surely seashells. She sells seashells by the seashore. The shells she sells are surely seashells."
            },
            {
                "id": 97,
                "title": "Tongue Twister 2",
                "text": "How much wood would a woodchuck chuck if a woodchuck could chuck wood? How much wood would a woodchuck chuck if a woodchuck could chuck wood? How much wood would a woodchuck chuck if a woodchuck could chuck wood? How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
            },
            {
                "id": 98,
                "title": "Famous Quote 1",
                "text": "\"To be, or not to be, that is the question.\" - Shakespeare \"To be, or not to be, that is the question.\" - Shakespeare \"To be, or not to be, that is the question.\" - Shakespeare \"To be, or not to be, that is the question.\" - Shakespeare \"To be, or not to be, that is the question.\" - Shakespeare"
            },
            {
                "id": 99,
                "title": "Famous Quote 2",
                "text": "\"I think, therefore I am.\" - Ren\u00e9 Descartes \"I think, therefore I am.\" - Ren\u00e9 Descartes \"I think, therefore I am.\" - Ren\u00e9 Descartes \"I think, therefore I am.\" - Ren\u00e9 Descartes \"I think, therefore I am.\" - Ren\u00e9 Descartes \"I think, therefore I am.\" - Ren\u00e9 Descartes"
            },
            {
                "id": 100,
                "title": "The Ultimate Test",
                "text": "A B C 1 2 3 ! @ # function() { return true; } The End. A B C 1 2 3 ! @ # function() { return true; } The End. A B C 1 2 3 ! @ # function() { return true; } The End."
            }
        ]
    }
];

function getLessonById(id) {
    for (const cat of typingLessons) {
        const lesson = cat.lessons.find(l => l.id === id);
        if (lesson) return lesson;
    }
    return null;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { typingLessons, getLessonById };
}
