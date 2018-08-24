
import React from 'react';
import './LinkedInProfileBadge.css';
import cache from '../../../helpers/ScriptCache';

/*Enable Profile Public Visibility on Linkedin*/

export default class LinkedInProfileBadge extends React.Component {
    constructor(props) {
        super(props);
        this.linkedIn = {
            attr: {
                "data-size": "medium", //medium || large
                "data-type": "vertical", //vertical || horizontal
                "data-theme": "dark", //light || dark
                "data-vanity": "samsonmaconi" // username
            },
            name: "Samson Maconi" //Name (alt text)
        };

    }

    // componentDidMount() {
    //     this.scriptCacheMyMaps = cache({
    //         linkedin: 'https://platform.linkedin.com/badges/js/profile.js'
    //     });
    // }


    render() {
        return (
            <div className="LinkedInProfileBadge LI-profile-badge" data-version="v1" data-locale="en_US" {...this.linkedIn.attr} >
                <a className="LI-simple-link" href={`https://ng.linkedin.com/in/${this.linkedIn.attr["data-vanity"]}samsonmaconi?trk=profile-badge`}>{this.linkedIn.name}</a>
            </div>
        )
    }

}


//www.samsonmaconi.com

//Add this to html header
{/* <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script> */}