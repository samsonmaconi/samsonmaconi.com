import React from 'react';
import Section from '../Section';
import ProfileGrid from '../ProfileGrid';

export default class ProfileSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.profile = [...props.profile];

        let birthdateIndex = this.profile.findIndex((element) => {
            return element[0] === "Birthdate";
        });
        this.profile[birthdateIndex] = ["Age", this.getAge(this.profile[birthdateIndex][1])];

    }

    getAge(dateOfBirth) {
        var today = new Date();
        var birthDate = new Date(dateOfBirth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString() + ' years';
    }

    render() {

        return (
            <Section id="profileSection" className="profile" header="Profile" fluid={true} link="/about" linkToolTip="The devil's in the details...">
                <div className="row justify-content-left py-md-5">
                    <div className="photo col-12 col-sm-6 col-lg text-center">
                        <img className="rounded-circle img-fluid" src="./img/gallery/img_pf_00.jpg" alt="Samson Maconi"/>
                    </div>
                    <div className="col m-5 text-center m-sm-0 text-sm-left  align-self-center">
                        {
                            this.profile.map((value, key) => {
                                return <p key={key}><span><span className="font-weight-bold">{value[0]}</span>: {value[1]}</span><br /></p>
                            })
                        }
                    </div>
                    <div className="col align-self-center d-none d-lg-block">
                        <ProfileGrid />
                    </div>
                </div>
            </Section>
        );
    }
}