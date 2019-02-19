import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from "./GoogleAuth";
import LanguageContext from '../context/LanguageContext';

class Header extends React.Component {
    state = { language: 'english' };
    static contextType = LanguageContext;

    onLanguageChange = language => {
        console.log(this.context)
        this.setState({language})
    };

    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">All Streams</Link>
                <div className="right menu">
                    <div className="item">
                        <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                        <i className="flag es" onClick={() => this.onLanguageChange('spanish')}/>
                        {this.state.language}
                    </div>
                    <GoogleAuth/>
                </div>
            </div>
        );
    }
};

export default Header;
