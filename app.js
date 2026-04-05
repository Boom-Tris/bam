// Global State
let studentName = "";
let score = 0;
let currentLessonQ = 0; // tracks which in-lesson question we are on

// Lessons Data - each lesson has 2 in-lesson questions (คำถามท้ายบท)
const lessonsData = [
    {
        topic: "1. วิทยาศาสตร์ ป.4 เรื่อง แสง (Light)",
        iframeStr: `<iframe width="560" height="315" src="https://www.youtube.com/embed/b4EFsR_7vT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        questions: [
            {
                text: "ลำแสงที่พุ่งออกจากไฟฉายมีลักษณะตรงกับข้อใด?",
                options: [
                    { text: "ก. ลำแสงขนาน", isCorrect: true },
                    { text: "ข. ลำแสงวงกลม", isCorrect: false },
                    { text: "ค. ลำแสงสามเหลี่ยม", isCorrect: false }
                ],
                successMsg: "ถูกต้อง! แสงที่พุ่งออกจากไฟฉายเดินทางเป็นเส้นตรงแบบลำแสงขนาน",
                errorMsg: "ลองนึกถึงแสงไฟฉายที่ส่องออกมาดูนะ มันพุ่งออกมาในลักษณะใด?"
            },
            {
                text: "เหตุใดเราจึงเห็นแสงจากดวงอาทิตย์แม้ดวงอาทิตย์จะอยู่ไกลมาก?",
                options: [
                    { text: "ก. เพราะแสงเดินทางได้เร็วมากและเป็นเส้นตรง", isCorrect: true },
                    { text: "ข. เพราะดวงอาทิตย์หมุนรอบตัวเอง", isCorrect: false },
                    { text: "ค. เพราะอากาศช่วยดึงแสงมาหาเรา", isCorrect: false }
                ],
                successMsg: "เยี่ยม! แสงเดินทางเป็นเส้นตรงด้วยความเร็วสูงมาก จึงข้ามระยะทางไกลๆ ได้",
                errorMsg: "แสงมีสมบัติพิเศษในการเดินทาง ลองคิดดูว่าอะไรทำให้มันไปถึงตาเราได้จากที่ไกลขนาดนั้น"
            }
        ]
    },
    {
        topic: "2. ตัวกลางของแสง (Lipda Pola)",
        iframeStr: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TJUz2utLmSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        questions: [
            {
                text: "ข้อใดจัดเป็นกลุ่มวัสดุประเภทเดียวกันทั้งหมด? (ตัวกลางโปร่งใส)",
                options: [
                    { text: "ก. อากาศ, กระจกใส, น้ำใส", isCorrect: true },
                    { text: "ข. สมุด, แผ่นพลาสติกใส, ผ้าขาวบาง", isCorrect: false },
                    { text: "ค. กระจกฝ้า, กระเบื้อง, กระดาษแก้วสี", isCorrect: false }
                ],
                successMsg: "ถูกต้อง! อากาศ กระจกใส น้ำใส ล้วนเป็นตัวกลางโปร่งใสที่แสงผ่านทะลุได้ทั้งหมด",
                errorMsg: "ตัวกลางโปร่งใสจะต้องยอมให้แสงผ่านได้ทะลุทั้งหมด และมองเห็นสิ่งของหลังได้ชัดเจน"
            },
            {
                text: "เมื่อแสงตกกระทบ 'วัตถุทึบแสง' จะเกิดอะไรขึ้นที่ด้านหลังของวัตถุนั้น?",
                options: [
                    { text: "ก. เกิดความสว่างมากขึ้น", isCorrect: false },
                    { text: "ข. เกิดเงา", isCorrect: true },
                    { text: "ค. แสงจะทะลุผ่านไปได้", isCorrect: false }
                ],
                successMsg: "ถูกเผง! วัตถุทึบแสงไม่ยอมให้แสงผ่าน จึงเกิดเงาที่ด้านหลัง",
                errorMsg: "วัตถุทึบแสงมีสมบัติอย่างไร? แสงไม่สามารถผ่านมันได้เลย แล้วด้านหลังจะเป็นอย่างไร?"
            }
        ]
    },
    {
        topic: "3. แสงและการมองเห็น",
        iframeStr: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SVzlTpjcLP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        questions: [
            {
                text: "รูปร่างของเงาขึ้นอยู่กับปัจจัยใด?",
                options: [
                    { text: "ก. สีของวัตถุ", isCorrect: false },
                    { text: "ข. รูปร่างของวัตถุที่มากั้นแสง", isCorrect: true },
                    { text: "ค. ความร้อนของแสง", isCorrect: false }
                ],
                successMsg: "ถูกต้อง! รูปร่างของเงาจะขึ้นอยู่กับรูปทรงของวัตถุที่มากั้นแสง",
                errorMsg: "ลองนึกถึงการเล่นเงามือดูนะ เงาของมือเราจะเป็นรูปร่างอะไร?"
            },
            {
                text: "หากใช้กระจกใสมากั้นแสง จะเกิดเงาหรือไม่?",
                options: [
                    { text: "ก. เกิดเงามืดชัดเจน", isCorrect: false },
                    { text: "ข. ไม่เกิดเงาหรือเกิดเงาจางๆ มาก", isCorrect: true },
                    { text: "ค. เกิดเงาขนาดใหญ่กว่าวัตถุ", isCorrect: false }
                ],
                successMsg: "เก่งมาก! กระจกใสเป็นตัวกลางโปร่งใส แสงผ่านได้ จึงไม่เกิดเงา หรือเกิดเพียงเงาจางๆ",
                errorMsg: "กระจกใสจัดเป็นตัวกลางประเภทใด? แล้วแสงผ่านมันได้ไหม?"
            }
        ]
    },
    {
        topic: "4. ตัวกลางของแสง ป.4 (by NTK)",
        iframeStr: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3h9csfc5EU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        questions: [
            {
                text: "ข้อใดแสดงลำดับการมองเห็นที่ถูกต้อง?",
                options: [
                    { text: "ก. ตา → แหล่งกำเนิดแสง → วัตถุ", isCorrect: false },
                    { text: "ข. แหล่งกำเนิดแสง → วัตถุ → ตา", isCorrect: true },
                    { text: "ค. วัตถุ → แหล่งกำเนิดแสง → ตา", isCorrect: false }
                ],
                successMsg: "ถูกต้อง! แสงออกจากแหล่งกำเนิด → ตกกระทบวัตถุ → สะท้อนเข้าตาเรา เราจึงเห็น",
                errorMsg: "ลองนึกถึงขั้นตอนว่าแสงเดินทางอย่างไรก่อนถึงตาเรา"
            },
            {
                text: "กระจกเงาใช้สมบัติใดของแสงในการทำให้เราเห็นภาพตัวเอง?",
                options: [
                    { text: "ก. การสะท้อนของแสง", isCorrect: true },
                    { text: "ข. การหักเหของแสง", isCorrect: false },
                    { text: "ค. การดูดกลืนแสง", isCorrect: false }
                ],
                successMsg: "ถูกเผง! กระจกเงาสะท้อนแสงได้ดี จึงทำให้เราเห็นภาพตัวเองใน กระจก",
                errorMsg: "ลองนึกดูว่ากระจกเงาแบนทำให้เราเห็นภาพตัวเองได้ มันเกิดจากสมบัติใดของแสง?"
            }
        ]
    },
    {
        topic: "5. แสงและตัวกลางของแสง (Wonder Science)",
        iframeStr: `<iframe width="560" height="315" src="https://www.youtube.com/embed/07TYTwLiN3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        questions: [
            {
                text: "การดูสุริยุปราคาด้วยตาเปล่าปลอดภัยหรือไม่?",
                options: [
                    { text: "ก. ปลอดภัย เพราะแสงดวงอาทิตย์ลดลง", isCorrect: false },
                    { text: "ข. ไม่ปลอดภัย เพราะรังสีจากดวงอาทิตย์อาจทำลายเรตินา", isCorrect: true },
                    { text: "ค. ปลอดภัยถ้าดูเพียงไม่กี่วินาที", isCorrect: false }
                ],
                successMsg: "ถูกต้อง! ห้ามดูสุริยุปราคาด้วยตาเปล่าโดยเด็ดขาด รังสีจากดวงอาทิตย์ทำลายตาได้",
                errorMsg: "แม้แสงจะดูเหมือนลดลง แต่รังสีอื่นๆ จากดวงอาทิตย์ยังอยู่ครบ ลองคิดใหม่นะ"
            },
            {
                text: "สีใดของห้องที่ช่วยให้รู้สึกสบายตาเมื่อใช้สายตานานๆ?",
                options: [
                    { text: "ก. สีเขียวอ่อน (สีจากธรรมชาติ)", isCorrect: true },
                    { text: "ข. สีแดงสด", isCorrect: false },
                    { text: "ค. สีสะท้อนแสง", isCorrect: false }
                ],
                successMsg: "เก่งมาก! สีเขียวอ่อนเป็นสีที่สบายตาที่สุด ใกล้เคียงธรรมชาติ ลดความล้าของดวงตา",
                errorMsg: "สีที่สบายตาควรจะไม่จ้าและเป็นสีธรรมชาติ ลองนึกถึงสีของธรรมชาติรอบๆ ตัวดูนะ"
            }
        ]
    }
];

// Pre-test Questions - แยกตามหัวข้อ (5 ข้อต่อหัวข้อ)
const practiceTopics = [
    {
        title: "หัวข้อที่ 1: ธรรมชาติการเดินทางของแสง",
        questions: [
            { question: "แสงเดินทางออกจากแหล่งกำเนิดในลักษณะใด?", options: ["ก. เดินทางเป็นเส้นโค้ง", "ข. เดินทางเป็นเส้นตรงทุกทิศทาง", "ค. เดินทางเป็นเส้นซิกแซก"], correctIndex: 1 },
            { question: "เราจะสังเกตเห็นแนวการเดินทางของแสงได้ชัดเจนที่สุดเมื่อใด?", options: ["ก. เมื่อฉายไฟฉายผ่านกลุ่มควันหรือฝุ่นละออง", "ข. เมื่อเปิดไฟในห้องที่สว่างมาก", "ค. เมื่อมองดูหลอดไฟที่ดับอยู่"], correctIndex: 0 },
            { question: "ข้อใดคือสมบัติพื้นฐานของการเดินทางของแสง?", options: ["ก. แสงต้องใช้ตัวนำที่เป็นเหล็กในการเดินทาง", "ข. แสงเดินทางช้ากว่าเสียง", "ค. แสงเดินทางเป็นเส้นตรงในตัวกลางเดียวกัน"], correctIndex: 2 },
            { question: "หากเรานำท่อพลาสติกที่ 'โค้งงอ' มาส่องดูแสงเทียน ผลจะเป็นอย่างไร?", options: ["ก. มองเห็นแสงเทียนชัดเจน", "ข. มองเห็นแสงเทียนเป็นสีอื่น", "ค. มองไม่เห็นแสงเทียน"], correctIndex: 2 },
            { question: "แหล่งกำเนิดแสงตามธรรมชาติที่ใหญ่ที่สุดของโลกคืออะไร?", options: ["ก. หลอดไฟฟ้า", "ข. ดวงอาทิตย์", "ค. หิ่งห้อย"], correctIndex: 1 }
        ]
    },
    {
        title: "หัวข้อที่ 2: ตัวกลางของแสง",
        questions: [
            { question: "วัตถุที่ยอมให้แสงผ่านได้ทั้งหมดและมองเห็นวัตถุหลังสิ่งนั้นชัดเจน เรียกว่าอะไร?", options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"], correctIndex: 0 },
            { question: "กระจกฝ้าหรือกระดาษไข จัดเป็นตัวกลางชนิดใด?", options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"], correctIndex: 1 },
            { question: "ข้อใดคือสมบัติของ 'วัตถุทึบแสง'?", options: ["ก. ยอมให้แสงผ่านได้บางส่วน", "ข. ยอมให้แสงผ่านได้ดีมาก", "ค. ไม่ยอมให้แสงผ่านได้เลย"], correctIndex: 2 },
            { question: "ถ้าต้องการทำหน้าต่างที่ป้องกันคนภายนอกมองเห็นข้างในชัดเจน แต่ยังอยากให้ห้องสว่าง ควรเลือกใช้วัสดุใด?", options: ["ก. กระจกใส", "ข. กระจกฝ้า", "ค. แผ่นไม้"], correctIndex: 1 },
            { question: "น้ำใสในสระว่ายน้ำ จัดเป็นตัวกลางชนิดใด?", options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"], correctIndex: 0 }
        ]
    },
    {
        title: "หัวข้อที่ 3: วัตถุกั้นแสง (การเกิดเงา)",
        questions: [
            { question: "เงาจะเกิดขึ้นที่บริเวณใดของวัตถุเสมอ?", options: ["ก. ด้านหน้าวัตถุ (ด้านที่รับแสง)", "ข. ด้านหลังวัตถุ (ด้านตรงข้ามกับแสง)", "ค. ด้านข้างวัตถุ"], correctIndex: 1 },
            { question: "ถ้าเราขยับวัตถุเข้าใกล้แหล่งกำเนิดแสงมากขึ้น เงาจะมีลักษณะอย่างไร?", options: ["ก. เงาจะมีขนาดใหญ่ขึ้น", "ข. เงาจะมีขนาดเล็กลง", "ค. เงาจะมีขนาดเท่าเดิม"], correctIndex: 0 },
            { question: "วัตถุชนิดใดที่ทำให้เกิด 'เงามืด' ได้ชัดเจนที่สุด?", options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"], correctIndex: 2 },
            { question: "เงามืดและเงามัว แตกต่างกันอย่างไร?", options: ["ก. เงามืดคือบริเวณที่ไม่มีแสงผ่านไปเลย เงามัวคือมีแสงผ่านได้บางส่วน", "ข. เงามืดมีขนาดใหญ่กว่าเงามัวเสมอ", "ค. เงามัวคือเงาที่เกิดจากดวงอาทิตย์เท่านั้น"], correctIndex: 0 },
            { question: "การเล่นหนังตะลุง ใช้หลักการใดของแสง?", options: ["ก. การหักเหของแสง", "ข. การกั้นแสงทำให้เกิดเงา", "ค. การกระจายแสง"], correctIndex: 1 }
        ]
    },
    {
        title: "หัวข้อที่ 4: หลักการมองเห็นและการสะท้อน",
        questions: [
            { question: "เราสามารถมองเห็นวัตถุที่ 'ไม่ใช่แหล่งกำเนิดแสง' ได้เพราะเหตุใด?", options: ["ก. แสงจากแหล่งกำเนิดไปกระทบวัตถุแล้วสะท้อนเข้าตาเรา", "ข. วัตถุนั้นสร้างแสงขึ้นมาเอง", "ค. ตาของเราปล่อยแสงออกไปกระทบวัตถุ"], correctIndex: 0 },
            { question: "ส่วนประกอบใดของนัยน์ตาที่ทำหน้าที่รับแสงและส่งสัญญาณไปที่สมอง?", options: ["ก. ม่านตา", "ข. เรตินา (จอตา)", "ค. แก้วตา"], correctIndex: 1 },
            { question: "การสะท้อนของแสงจะเกิดขึ้นได้ดีที่สุดกับวัตถุที่มีลักษณะอย่างไร?", options: ["ก. ผิวขรุขระและมืด", "ข. ผิวเรียบ ขัดมัน และวาว", "ค. ผิวนุ่มและโปร่งแสง"], correctIndex: 1 },
            { question: "ถ้าเราอยู่ในห้องที่มืดสนิท (ไม่มีแสงเลย) เราจะมองเห็นวัตถุในห้องหรือไม่?", options: ["ก. มองเห็น เพราะตาเราชินกับความมืด", "ข. มองไม่เห็น เพราะไม่มีแสงไปกระทบวัตถุแล้วสะท้อนเข้าตา", "ค. มองเห็นเป็นภาพขาวดำ"], correctIndex: 1 },
            { question: "มุมตกกระทบและมุมสะท้อน มีความสัมพันธ์กันอย่างไร?", options: ["ก. มุมตกกระทบโตกว่ามุมสะท้อนเสมอ", "ข. มุมตกกระทบเล็กกว่ามุมสะท้อนเสมอ", "ค. มุมตกกระทบมีขนาดเท่ากับมุมสะท้อนเสมอ"], correctIndex: 2 }
        ]
    },
    {
        title: "หัวข้อที่ 5: การป้องกันอันตรายจากการมองเห็น",
        questions: [
            { question: "การอ่านหนังสือในที่ที่มีแสงสว่างน้อยเกินไปจะส่งผลอย่างไร?", options: ["ก. ทำให้สายตาดีขึ้น เพราะตาได้ทำงานหนัก", "ข. ทำให้เกิดอาการเมื่อยล้าของดวงตาและสายตาเสีย", "ค. ไม่ส่งผลเสียใดๆ"], correctIndex: 1 },
            { question: "อุปกรณ์ใดที่ช่วยป้องกันดวงตาเมื่อต้องทำงานในที่ที่มีแสงจ้ามากๆ เช่น การเชื่อมเหล็ก?", options: ["ก. แว่นสายตาธรรมดา", "ข. หน้ากากหรือแว่นตากันแสงเชื่อม", "ค. แว่นดำน้ำ"], correctIndex: 1 },
            { question: "หากต้องการถนอมสายตาขณะใช้งานคอมพิวเตอร์ ควรทำอย่างไร?", options: ["ก. จ้องหน้าจอใกล้ๆ เพื่อให้เห็นชัด", "ข. พักสายตาโดยการมองไปที่ไกลๆ ทุก 20-30 นาที", "ค. ปิดไฟในห้องให้มืดสนิทขณะเล่นคอมพิวเตอร์"], correctIndex: 1 },
            { question: "แสงชนิดใดที่อาจเป็นอันตรายต่อดวงตาหากจ้องมองโดยตรง?", options: ["ก. แสงจากดวงอาทิตย์", "ข. แสงจากตะเกียงเจ้าพายุ", "ค. ถูกทั้งข้อ ก และ ข"], correctIndex: 2 },
            { question: "ตำแหน่งที่เหมาะสมในการวางโคมไฟขณะเขียนหนังสือคือข้อใด?", options: ["ก. วางในตำแหน่งที่แสงไม่เกิดเงาบังมือขณะเขียน", "ข. วางให้แสงส่องเข้าตาโดยตรง", "ค. วางไว้ใต้โต๊ะ"], correctIndex: 0 }
        ]
    }
];

// Keep a flat reference for the current practice topic
let practiceQuestions = [];
let currentPracticeTopicIdx = -1;


// Post-test Questions (20 ข้อ - 4 ข้อต่อหัวข้อ)
const testQuestions = [
    // === หัวข้อที่ 1 ===
    {
        question: "เราจะสังเกตเห็นแนวการเดินทางของแสงได้ชัดเจนที่สุดเมื่อใด?",
        options: ["ก. เมื่อฉายไฟฉายผ่านกลุ่มควันหรือฝุ่นละออง", "ข. เมื่อเปิดไฟในห้องที่สว่างมาก", "ค. เมื่อมองดูหลอดไฟที่ดับอยู่"],
        correctIndex: 0
    },
    {
        question: "ข้อใดคือสมบัติพื้นฐานของการเดินทางของแสง?",
        options: ["ก. แสงต้องใช้ตัวนำที่เป็นเหล็กในการเดินทาง", "ข. แสงเดินทางช้ากว่าเสียง", "ค. แสงเดินทางเป็นเส้นตรงในตัวกลางเดียวกัน"],
        correctIndex: 2
    },
    {
        question: "หากเรานำท่อพลาสติกที่ 'โค้งงอ' มาส่องดูแสงเทียน ผลจะเป็นอย่างไร?",
        options: ["ก. มองเห็นแสงเทียนชัดเจน", "ข. มองเห็นแสงเทียนเป็นสีอื่น", "ค. มองไม่เห็นแสงเทียน"],
        correctIndex: 2
    },
    {
        question: "แหล่งกำเนิดแสงตามธรรมชาติที่ใหญ่ที่สุดของโลกคืออะไร?",
        options: ["ก. หลอดไฟฟ้า", "ข. ดวงอาทิตย์", "ค. หิ่งห้อย"],
        correctIndex: 1
    },
    // === หัวข้อที่ 2 ===
    {
        question: "กระจกฝ้าหรือกระดาษไข จัดเป็นตัวกลางชนิดใด?",
        options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"],
        correctIndex: 1
    },
    {
        question: "ข้อใดคือสมบัติของ 'วัตถุทึบแสง'?",
        options: ["ก. ยอมให้แสงผ่านได้บางส่วน", "ข. ยอมให้แสงผ่านได้ดีมาก", "ค. ไม่ยอมให้แสงผ่านได้เลย"],
        correctIndex: 2
    },
    {
        question: "ถ้าต้องการทำหน้าต่างที่ป้องกันคนภายนอกมองเห็นข้างในชัดเจน แต่ยังอยากให้ห้องสว่าง ควรเลือกใช้วัสดุใด?",
        options: ["ก. กระจกใส", "ข. กระจกฝ้า", "ค. แผ่นไม้"],
        correctIndex: 1
    },
    {
        question: "น้ำใสในสระว่ายน้ำ จัดเป็นตัวกลางชนิดใด?",
        options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"],
        correctIndex: 0
    },
    // === หัวข้อที่ 3 ===
    {
        question: "ถ้าเราขยับวัตถุเข้าใกล้แหล่งกำเนิดแสงมากขึ้น เงาจะมีลักษณะอย่างไร?",
        options: ["ก. เงาจะมีขนาดใหญ่ขึ้น", "ข. เงาจะมีขนาดเล็กลง", "ค. เงาจะมีขนาดเท่าเดิม"],
        correctIndex: 0
    },
    {
        question: "วัตถุชนิดใดที่ทำให้เกิด 'เงามืด' ได้ชัดเจนที่สุด?",
        options: ["ก. ตัวกลางโปร่งใส", "ข. ตัวกลางโปร่งแสง", "ค. วัตถุทึบแสง"],
        correctIndex: 2
    },
    {
        question: "เงามืดและเงามัว แตกต่างกันอย่างไร?",
        options: ["ก. เงามืดคือบริเวณที่ไม่มีแสงผ่านไปเลย เงามัวคือมีแสงผ่านได้บางส่วน", "ข. เงามืดมีขนาดใหญ่กว่าเงามัวเสมอ", "ค. เงามัวคือเงาที่เกิดจากดวงอาทิตย์เท่านั้น"],
        correctIndex: 0
    },
    {
        question: "การเล่นหนังตะลุง ใช้หลักการใดของแสง?",
        options: ["ก. การหักเหของแสง", "ข. การกั้นแสงทำให้เกิดเงา", "ค. การกระจายแสง"],
        correctIndex: 1
    },
    // === หัวข้อที่ 4 ===
    {
        question: "ส่วนประกอบใดของนัยน์ตาที่ทำหน้าที่รับแสงและส่งสัญญาณไปที่สมอง?",
        options: ["ก. ม่านตา", "ข. เรตินา (จอตา)", "ค. แก้วตา"],
        correctIndex: 1
    },
    {
        question: "การสะท้อนของแสงจะเกิดขึ้นได้ดีที่สุดกับวัตถุที่มีลักษณะอย่างไร?",
        options: ["ก. ผิวขรุขระและมืด", "ข. ผิวเรียบ ขัดมัน และวาว", "ค. ผิวนุ่มและโปร่งแสง"],
        correctIndex: 1
    },
    {
        question: "ถ้าเราอยู่ในห้องที่มืดสนิท (ไม่มีแสงเลย) เราจะมองเห็นวัตถุในห้องหรือไม่?",
        options: ["ก. มองเห็น เพราะตาเราชินกับความมืด", "ข. มองไม่เห็น เพราะไม่มีแสงไปกระทบวัตถุแล้วสะท้อนเข้าตา", "ค. มองเห็นเป็นภาพขาวดำ"],
        correctIndex: 1
    },
    {
        question: "มุมตกกระทบและมุมสะท้อน มีความสัมพันธ์กันอย่างไร?",
        options: ["ก. มุมตกกระทบโตกว่ามุมสะท้อนเสมอ", "ข. มุมตกกระทบเล็กกว่ามุมสะท้อนเสมอ", "ค. มุมตกกระทบมีขนาดเท่ากับมุมสะท้อนเสมอ"],
        correctIndex: 2
    },
    // === หัวข้อที่ 5 ===
    {
        question: "อุปกรณ์ใดที่ช่วยป้องกันดวงตาเมื่อต้องทำงานในที่ที่มีแสงจ้ามากๆ เช่น การเชื่อมเหล็ก?",
        options: ["ก. แว่นสายตาธรรมดา", "ข. หน้ากากหรือแว่นตากันแสงเชื่อม", "ค. แว่นดำน้ำ"],
        correctIndex: 1
    },
    {
        question: "หากต้องการถนอมสายตาขณะใช้งานคอมพิวเตอร์ ควรทำอย่างไร?",
        options: ["ก. จ้องหน้าจอใกล้ๆ เพื่อให้เห็นชัด", "ข. พักสายตาโดยการมองไปที่ไกลๆ ทุก 20-30 นาที", "ค. ปิดไฟในห้องให้มืดสนิทขณะเล่นคอมพิวเตอร์"],
        correctIndex: 1
    },
    {
        question: "แสงชนิดใดที่อาจเป็นอันตรายต่อดวงตาหากจ้องมองโดยตรง?",
        options: ["ก. แสงจากดวงอาทิตย์", "ข. แสงจากตะเกียงเจ้าพายุ", "ค. ถูกทั้งข้อ ก และ ข"],
        correctIndex: 2
    },
    {
        question: "ตำแหน่งที่เหมาะสมในการวางโคมไฟขณะเขียนหนังสือคือข้อใด?",
        options: ["ก. วางในตำแหน่งที่แสงไม่เกิดเงาบังมือขณะเขียน", "ข. วางให้แสงส่องเข้าตาโดยตรง", "ค. วางไว้ใต้โต๊ะ"],
        correctIndex: 0
    }
];

let currentPracticeIdx = 0;
let currentTestIdx = 0;
let isPracticeAnswered = false;
let isTestAnswered = false;
let isLessonQuestionAnswered = false;

// Navigation logic
function registerUser() {
    const input = document.getElementById('student-name');
    const errorMsg = document.getElementById('register-error');
    if(input.value.trim() === "") {
        errorMsg.classList.remove('hidden');
    } else {
        errorMsg.classList.add('hidden');
        studentName = input.value.trim();
        const summaryNameEl = document.getElementById('summary-name');
        if (summaryNameEl) summaryNameEl.innerText = studentName;
        const scoreNameEl = document.getElementById('score-name');
        if (scoreNameEl) scoreNameEl.innerText = studentName;
        document.getElementById('student-name').blur(); 
        navTo('screen-lesson-intro');
    }
}

function navTo(screenId) {
    const activeScreen = document.querySelector('.screen.active');
    
    if (activeScreen && activeScreen.id !== screenId) {
        activeScreen.classList.remove('active');
        setTimeout(() => {
            activeScreen.classList.add('hidden');
            const newScreen = document.getElementById(screenId);
            if (newScreen) {
                newScreen.classList.remove('hidden');
                void newScreen.offsetWidth;
                newScreen.classList.add('active');
            }
        }, 400); 
    } else if (!activeScreen) {
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
            newScreen.classList.remove('hidden');
            newScreen.classList.add('active');
        }
    }
}

// Lesson Video Logic
function openLesson(idx) {
    const lesson = lessonsData[idx];
    document.getElementById('lesson-topic-title').innerText = lesson.topic;
    
    // แค่ toggle display เท่านั้น ไม่แตะ src หรือ innerHTML
    for (let i = 0; i < 5; i++) {
        document.getElementById('video-' + i).style.display = (i === idx) ? 'block' : 'none';
    }
    
    currentLessonQ = 0;
    renderLessonQuestion(idx, 0);
    navTo('screen-content');
}

function renderLessonQuestion(lessonIdx, qIdx) {
    const lesson = lessonsData[lessonIdx];
    const q = lesson.questions[qIdx];
    
    // Show which question
    const totalQ = lesson.questions.length;
    document.getElementById('lesson-question-text').innerText = `คำถาม ${qIdx + 1}/${totalQ}: ${q.text}`;
    
    const optionsContainer = document.getElementById('lesson-options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt) => {
        const div = document.createElement('div');
        div.className = 'option-card';
        div.style.width = '280px'; 
        // store lesson index for nextLessonQuestion
        div.dataset.lessonIdx = document.getElementById('lesson-topic-title').innerText;
        div.onclick = () => selectLessonAnswer(div, opt.isCorrect, q, lessonIdx);
        div.innerHTML = `<span style="font-size: 1.2rem; text-align:center;">${opt.text}</span>`;
        optionsContainer.appendChild(div);
    });
    
    isLessonQuestionAnswered = false;
    document.getElementById('lesson-feedback').classList.add('hidden');
    document.getElementById('btn-next-lesson-q').classList.add('hidden');
    document.getElementById('btn-back-lesson-menu').classList.add('hidden');
}

function selectLessonAnswer(element, isCorrect, qData, lessonIdx) {
    if (isLessonQuestionAnswered) return;
    
    const feedback = document.getElementById('lesson-feedback');
    const nextQBtn = document.getElementById('btn-next-lesson-q');
    const backBtn = document.getElementById('btn-back-lesson-menu');
    const totalQ = lessonsData[lessonIdx].questions.length;

    if (isCorrect) {
        element.classList.add('selected-correct');
        feedback.innerHTML = `<i class="fas fa-check-circle"></i> ${qData.successMsg}`;
        feedback.className = 'feedback-msg feedback-success';
        isLessonQuestionAnswered = true;
        
        if (currentLessonQ < totalQ - 1) {
            nextQBtn.dataset.lessonIdx = lessonIdx;
            nextQBtn.classList.remove('hidden');
        } else {
            backBtn.classList.remove('hidden');
        }
    } else {
        element.classList.add('selected-wrong');
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> ${qData.errorMsg}`;
        feedback.className = 'feedback-msg feedback-error';
    }
    
    feedback.classList.remove('hidden');
}

function nextLessonQuestion() {
    const lessonIdx = parseInt(document.getElementById('btn-next-lesson-q').dataset.lessonIdx);
    currentLessonQ++;
    renderLessonQuestion(lessonIdx, currentLessonQ);
}

// Practice Section 
function startTopicPractice(topicIdx) {
    currentPracticeTopicIdx = topicIdx;
    practiceQuestions = practiceTopics[topicIdx].questions;
    currentPracticeIdx = 0;
    
    // Update topic title display safely
    const titleEl = document.getElementById('practice-topic-title');
    if (titleEl) titleEl.innerText = practiceTopics[topicIdx].title;
    
    renderPractice();
    navTo('screen-practice');
}

function startPractice() {
    navTo('screen-practice-menu');
}

function renderPractice() {
    isPracticeAnswered = false;
    const q = practiceQuestions[currentPracticeIdx];
    
    document.getElementById('practice-current-idx').innerText = currentPracticeIdx + 1;
    document.getElementById('practice-total-idx').innerText = practiceQuestions.length;
    document.getElementById('practice-question-text').innerText = q.question;
    
    const optionsContainer = document.getElementById('practice-options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.onclick = () => selectPractice(btn, idx === q.correctIndex);
        btn.innerText = opt;
        optionsContainer.appendChild(btn);
    });

    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('btn-next-practice').classList.add('hidden');
    document.getElementById('btn-next-summary').classList.add('hidden');
}

function selectPractice(element, isCorrect) {
    if (isPracticeAnswered) return;
    
    const feedback = document.getElementById('practice-feedback');
    const nextPracBtn = document.getElementById('btn-next-practice');
    const nextSumBtn = document.getElementById('btn-next-summary');

    if (isCorrect) {
        element.classList.add('correct');
        feedback.innerHTML = `<i class="fas fa-check-circle"></i> ถูกต้องเก่งมาก!`;
        feedback.className = 'feedback-msg feedback-success';
        isPracticeAnswered = true;
        
        if (currentPracticeIdx < practiceQuestions.length - 1) {
            nextPracBtn.classList.remove('hidden');
        } else {
            nextSumBtn.classList.remove('hidden');
        }
    } else {
        element.classList.add('wrong');
        // Highlight correct answer
        const buttons = document.querySelectorAll('#practice-options .btn-option');
        buttons[practiceQuestions[currentPracticeIdx].correctIndex].classList.add('correct');
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> ยังไม่ถูกต้อง ลองดูเฉลยสีเขียวนะ`;
        feedback.className = 'feedback-msg feedback-error';
        isPracticeAnswered = true;
        
        if (currentPracticeIdx < practiceQuestions.length - 1) {
            nextPracBtn.classList.remove('hidden');
        } else {
            nextSumBtn.classList.remove('hidden');
        }
    }
    
    feedback.classList.remove('hidden');
}

function nextPractice() {
    if (currentPracticeIdx < practiceQuestions.length - 1) {
        currentPracticeIdx++;
        renderPractice();
    }
}

// Test Section 
function startTest() {
    currentTestIdx = 0;
    score = 0;
    document.getElementById('score-total').innerText = testQuestions.length;
    renderTest();
    navTo('screen-test');
}

function renderTest() {
    isTestAnswered = false;
    const q = testQuestions[currentTestIdx];
    
    document.getElementById('test-current-idx').innerText = currentTestIdx + 1;
    document.getElementById('test-total-idx').innerText = testQuestions.length;
    document.getElementById('test-question-text').innerText = q.question;
    
    const optionsContainer = document.getElementById('test-options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.onclick = () => selectTest(btn, idx === q.correctIndex);
        btn.innerText = opt;
        optionsContainer.appendChild(btn);
    });

    document.getElementById('test-feedback').classList.add('hidden');
    document.getElementById('btn-next-test').classList.add('hidden');
    document.getElementById('btn-finish-test').classList.add('hidden');
}

function selectTest(element, isCorrect) {
    if (isTestAnswered) return;

    if (isCorrect) {
        element.classList.add('correct');
        showTestFeedback(true, 'ถูกต้องเก่งมากค่ะ!');
        score++;
    } else {
        element.classList.add('wrong');
        const buttons = document.querySelectorAll('.btn-option');
        buttons[testQuestions[currentTestIdx].correctIndex].classList.add('correct');
        showTestFeedback(false, 'ยังไม่ถูกต้องนะคะ ลองใหม่ในข้อถัดไป');
    }
    
    isTestAnswered = true;
    
    if (currentTestIdx < testQuestions.length - 1) {
        document.getElementById('btn-next-test').classList.remove('hidden');
    } else {
        document.getElementById('btn-finish-test').classList.remove('hidden');
    }
}

function showTestFeedback(isCorrect, message) {
    const feedback = document.getElementById('test-feedback');
    feedback.innerHTML = isCorrect 
        ? `<i class="fas fa-check-circle"></i> ${message}`
        : `<i class="fas fa-times-circle"></i> ${message}`;
    feedback.className = `feedback-msg ${isCorrect ? 'feedback-success' : 'feedback-error'}`;
    feedback.classList.remove('hidden');
}

function nextTest() {
    if (currentTestIdx < testQuestions.length - 1) {
        currentTestIdx++;
        renderTest();
    }
}

function finishTest() {
    document.getElementById('score-result').innerText = score;
    navTo('screen-score');
}
