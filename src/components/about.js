import '../styles/about.styl'
import React from 'react';
import img1 from '../images/about.png';
import img2 from '../images/about2.png';
import img3 from '../images/about3.png';
import Title from './title'

class Schedule extends React.Component {
  render() {
    return (
      <div className="about">
        <Title title="About"/>
        <div className="container group">
          <div className="titleTxt">
            <h2>MOP ŠPANCIRFEST
                MULTIMEDIA FESTIVAL
            </h2>
            <p>The festival is free and includes lectures, weekly workshops, exhibitions, video screenings, interactive installations, performances, films and audio-visual installations integrated into it's music part. Starting this year, partner of MOP Association and co-organizer of multimedia festival is Varaždin Tourist Board.</p>
          </div>
          <img src={img1}/>
          <div className="section">
            <div className="item">
              <h3>History</h3>
            </div>
            <div className="item">
              <p>The festival has so far held four times as annual regional festival which promotes the multimedia and digital culture, with an emphasis on exchange of knowledge and creative use of new technologies in art, science and design.</p>
              <div className="small">
                <h4>Past editions</h4>
                <a className="year" href="http://dizajnsvakidan.com/zavrsni-dan-mop-a/">12</a>
                <a className="year" href="http://2013.mop-fest.com/">13</a>
                <a className="year" href="http://2014.mop-fest.com/">14</a>
                <a className="year" href="http://2015.mop-fest.com/">15</a>
              </div>
            </div>
          </div>
          <img src={img2}/>
          <div className="section">
            <div className="item">
              <h3>Location</h3>
            </div>
            <div className="item">
              <p>The festival will be held throughout the Varaždin's historic center, festival programs will be carried out in an active exhibition, shopping and catering areas, to be creative zone of MOP ŠPANCIRFEST.</p>
              <div className="small grid">
                <div className="half">
                  <h4>Venues</h4>
                  <a href="https://www.google.hr/maps/place/HRVATSKO+NARODNO+KAZALI%C5%A0TE+U+VARA%C5%BDDINU/@46.3057008,16.3351257,17z/data=!3m1!4b1!4m2!3m1!1s0x4768aad0b4d1687f:0x45ba01edd71338f6?shorturl=1">Croatian National Theatre in Varaždin</a>
                  <h4>Venues</h4>
                  <a href="https://goo.gl/maps/qByKtYiow162">Palace Herzer</a>
                  <h4>Food</h4>
                  <a href="https://goo.gl/maps/rzuxxCTZYZ12">Angelus restaurant</a>
                  <h4>Sleep</h4>
                  <a href="http://www.tourism-varazdin.hr/en/accommodation/">City Hostels</a>
                </div>
                <div className="half">
                  <h4>Party</h4>
                  <a href="https://www.facebook.com/scenarogoz/">Underground bar Zvonimir Rogoz</a>
                  <h4>Food</h4>
                  <a href="https://goo.gl/maps/zy52JmjjJZG2">Santa Maria</a>
                  <h4>Caffe</h4>
                  <a href="http://www.tourism-varazdin.hr/en/cafes-and-pastry-shops/">Caffe and chill</a>
                  <h4>Museum</h4>
                  <a href="http://www.tourism-varazdin.hr/en/museums-and-collections/">Museums and collections</a>
                </div>
              </div>
            </div>
          </div>
          <img src={img3}/>
          <div className="section">
            <div className="item">
              <h3>Core Team</h3>
            </div>
            <div className="item">
              <div className="small grid team">
                <div className="half">
                  <h4>Organizators</h4>
                  <p>Udruga MOP</p>
                  <p>Varaždin city Toursit Board</p>
                  <h4>Head organizational team</h4>
                  <p>Fran Mubrin, Festival director</p>
                  <p>Mihael Miklošić, project cordinator</p>
                  <p>Oliver Potočnik, project cordinator</p>
                  <h4>Festival program associates</h4>
                  <p>Marijo Janković</p>
                  <p>Dino Trojak</p>
                  <h4>Visual identity</h4>
                  <p>Marko Hrastovec</p>
                  <p>Fran Mubrin(web)</p>
                </div>
                <div className="half">
                  <h4>Web development</h4>
                  <p>Dino Trojak</p>
                  <h4>Contact</h4>
                  <p>mopfest@gmail.com</p>
                  <p>franmubrin@gmail.com</p>
                  <p>+385 95 398 6599</p>
                  <h4>Contact TZGV</h4>
                  <p>info@spancirfest.com</p>
                  <p>042 210 987</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
