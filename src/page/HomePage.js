import React from 'react';
import NavBar from '../components/Navbar/nav'
import Root from '../components/Navbar/root'
import Header from '../components/Header/header';
import "../style/homepage.css"
import LawMenu from '../components/LawMenu/lawmenu';
import { firestore} from '../database/firebase-service'
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    state = {laws:[]};
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <LawMenu/>
                <Root />
            </div>
        )

    }
}


export default HomePage;