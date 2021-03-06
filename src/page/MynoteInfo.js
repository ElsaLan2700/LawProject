
import React, { useEffect, useState } from 'react';
import '../style/MyNote.css';
import { firestore } from '../database/firebase-service';
import PropTypes from "prop-types";


const MynoteInfo = ((props) => {
    const [active1, setActive1] = useState('');
    const [active2, setActive2] = useState('');
    const [active3, setActive3] = useState('');
    const [activedef, setActivedef] = useState('active');
    const [clipbroad, setClipbroad] = useState(1);


    const handleSelect = (e) => {
        setClipbroad(e);
        if (e == 2) {
            setActive1(''); setActive2('active'); setActive3(''); setActivedef('');
        } else if (e == 3) {
            setActive1(''); setActive2(''); setActive3('active'); setActivedef('');
        } else {
            setActive1('active'); setActive2(''); setActive3('');
        }
    }

    const Note = () => {
        return (
            <>
                <h2>筆記內容:</h2>
                <hr />
                <p>{props.item.noteContent}</p>
            </>
        )
    }



    const LawData = () => {
        const [laws, setlaws] = useState({});
        let lawsId = props.item.laws;

        useEffect(() => {
            const fetchLawData = (docid) => {
                firestore
                    .collection('lawData').doc(docid)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            let data = doc.data();
                            setlaws({ ...data });
                        } else {
                            return
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    })
            }
            fetchLawData(lawsId);

        }, []);

        return (
            <>
                <h2>法條名稱:</h2>
                <p>{laws.LawName}</p>
                <hr />
                <h2>類別:</h2>
                <p>{laws.LawCategory}</p>
                <hr />
                <h2>法條歷史:</h2>
                <p>{laws.LawHistories}</p>
                <hr />
                <h2>法條章節:</h2>
                <p>{props.item.law.ArticleNo}</p>
                <hr />
                <h2>法條內容:</h2>
                <p>{props.item.law.ArticleContent}</p>
                <hr />
                <h2>相關連結:</h2>
                <a href={laws.LawURL}>{laws.LawURL}</a>
            </>
        )
    }

    const User = () => {
        return (
            <>
                <h2>建立時間:</h2>
                <p>{props.item.order}</p>
                <hr />
                <h2>便簽顏色:</h2>
                <p>{
                    props.item.noteColor[14] == '1' ? '藍色' :
                        props.item.noteColor[14] == '2' ? '黃色' :
                            props.item.noteColor[14] == '3' ? '澄色' : '紅色'}
                </p>

            </>
        )
    }



    return (
        <>
            <div className="ui secondary pointing menu">
                <a className={`${activedef} ${active1} item label`}
                    onClick={() => handleSelect(1)}>
                    筆記
                </a>
                <a className={`${active2} item label`}
                    onClick={() => handleSelect(2)}>
                    母法資訊
                </a>
                <a className={`${active3} item label`}
                    onClick={() => handleSelect(3)}>
                    我的紀錄
                </a>
            </div>
            <div className="ui segment">
                <p>
                    {clipbroad != 1 ? '' : <Note />}
                    {clipbroad == 2 ? <LawData /> : ''}
                    {clipbroad == 3 ? <User /> : ''}
                </p>
            </div>
        </>

    )
})

MynoteInfo.propTypes = {
    item: PropTypes.object.isRequired,
};


export default MynoteInfo;