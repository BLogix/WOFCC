import uuidv1 from "uuid";
import React from 'react';
import Dropbox from 'dropbox';
import { Link } from 'react-router-dom';

const bishopImg = 'Bishop-KAB-large.jpg';
export const pblcImg = 'PBLC-3.png';
const crossImg = 'b6c8eca1-0910-4fd9-b154-849aef0af522.png';
const bibleHistoryImg = 'Bible_History.jpg';
//const logoSmallImg = 'badge_small.png';
const logoLargeImg = 'logo_large.png';
export const facebookImg = 'Facebook_Home_logo_old.svg.png';
//const wdfImg = 'WDF_1461291.jpg';
//const freepik12Img = '12.jpg';
const freepik28Img = '28.jpg';
const freepik55Img = '55.jpg';
const freepik397Img = '397.jpg';
//export const freepik1024Img = '1024.jpg';
const freepik1773Img = '1773.jpg';
const freepik1869Img = '1869.jpg';
//const freepik2144Img = '2144.jpg';
const freepik2159Img = '2159.jpg';
const freepik3893Img = '3893.jpg';
const freepik11405Img = '11405.jpg';
//const freepik102434Img = '102434-OLS3V2-932.jpg';
const freepik272299Img = '272299-P5OLTS-748.jpg';
//const freepik768832Img = '768832.jpg';
//const freepikoccn5z0Img = 'OCCN5Z0.jpg';
//const freepikodrax20Img = 'ODRAX20.jpg';
//const freepikogdrvdoImg = 'OGDRVD0.jpg';
const freepikoq5kaw0Img = 'OQ5KAW0.jpg';

let date = new Date();

export const dropBox = new Dropbox.Dropbox({accessToken: process.env.REACT_APP_TOKEN_PROD});

export const FILE_REGEX = RegExp(process.env.REACT_APP_REGEX_FILE);
export const EXT_REGEX = RegExp(process.env.REACT_APP_REGEX_EXT);
export const ALT_REGEX = RegExp(process.env.REACT_APP_REGEX_ALT + date.getFullYear());

const githubUrl = process.env.REACT_APP_GITHUB_COPYRIGHT_URL;
const githubLabel = process.env.REACT_APP_GITHUB_COPYRIGHT_LABEL;
const githubText = process.env.REACT_APP_GITHUB_COPYRIGHT_TEXT;
export const copyright = <p> Copyright ©{(new Date().getFullYear())}<br/>
                             Branden Boyington<br/>
                             <a className="github-button" href={githubUrl} aria-label={githubLabel}>{githubText}</a>
                         </p>;

/**
 * Formats the dropbox url for viewing
 * @param {*} array 
 * @param {*} fileName 
 */
export const provideUrl = (array, fileName) => {
    let found = false;
    for (let i=0; i< array.length && !found; i++) {
        if (array[i].url.includes(fileName)) {
            found = true;
            return array[i].url.replace(process.env.REACT_APP_DROPBOX_BAD_URL, process.env.REACT_APP_DROPBOX_GOOD_URL);
        }
    }
};

export const FacebookUrl = process.env.REACT_APP_FACEBOOK_URL;
export const landingBackground = process.env.REACT_APP_LANDING_BACKGROUND_URL;
export const LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;
export const LogoLarge = process.env.REACT_APP_LOGO_LARGE_URL;

export const freePikCredits = (page) => {
    switch(page){
        case 'landing':
            return [];
        case 'about_us':
            return [{key: uuidv1(), img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik'}];
        case 'services':
            return [
                {key: uuidv1(), img_desc: 'New Members Classes', link_text: 'Designed by ijeab / Freepik'},
                {key: uuidv1(), img_desc: 'Childrens Ministry', link_text: 'Designed by brgfx / Freepik'},
                {key: uuidv1(), img_desc: 'Worship Service', link_text: 'Designed by onlyyouqj / Freepik'},
                {key: uuidv1(), img_desc: 'Corporate Confession', link_text: 'Designed by ijeab / Freepik'},
                {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Bedneyimages / Freepik'},
                {key: uuidv1(), img_desc: 'Pastoral Care', link_text: 'Designed by ijeab / Freepik'}
            ];
        case 'directions':
            return [{key: uuidv1(), img_desc: 'green_background', link_text: 'Designed by Freepik'}];
        case 'contact_us':
            return [{key: uuidv1(), img_desc: 'background', link_text: 'Designed by GarryKillian / Freepik'}];
        case 'ministries':
            return [{key: uuidv1(), img_desc: 'Children’s Ministry', link_text: 'Designed by brgfx / Freepik'},
                    {key: uuidv1(), img_desc: 'Media Ministry', link_text: 'Designed by jcomp / Freepik'},
                    {key: uuidv1(), img_desc: 'Hospitality', link_text: 'Designed by Mrsiraphol / Freepik'},
                    {key: uuidv1(), img_desc: 'Couples in covenant', link_text: 'Designed by Freepic.diller / Freepik'},
                    {key: uuidv1(), img_desc: 'Youth Ministry', link_text: 'Designed by Kjpargeter / Freepik'},
                    {key: uuidv1(), img_desc: 'Greeters', link_text: 'Designed by Freepik'},
                    {key: uuidv1(), img_desc: 'bridge connectors', link_text: 'Designed by Vectorarte / Freepik'},
                    {key: uuidv1(), img_desc: 'free worshipers', link_text: 'Designed by kjpargeter / Freepik'},
                    {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik'}
            ];
        default:
    }
};

export const designContext = (page) => {
    switch(page){
        case 'landing':
            return [];
        case 'about_us':
            return [{key: uuidv1(), title: 'Pastors', image: pblcImg,
                        context: <p>Pastor Joe Louis Butts graduated from the Word of Faith School of Ministry,
                            Southfield Michigan in 1991. He was President and Student Council President. After
                            graduating, Pastor Butts was sent by Bishop Keith Butler, founder of Word of Faith
                            International Christian Center, to Saginaw Michigan to assist Bishop Kevin Wright with
                            establishing Word of Faith first satellite church.</p>,
                        detail: <p><h1>Pastor Joe Louis Butts</h1> graduated from the Word of Faith School of Ministry,
                            Southfield Michigan in 1991. He was President and Student Council President. After
                            graduating, Pastor Butts was sent by Bishop Keith Butler, founder of Word of Faith
                            International Christian Center, to Saginaw Michigan to assist Bishop Kevin Wright with
                            establishing Word of Faith first satellite church. After a successful start up, Pastor
                            Butts returned back to the Headquarter church where he remained faithful serving in
                            various departments until he joined up again with Bishop Kevin Wright in Jackson
                            Mississippi. He served as Assistant Pastor with the responsibility of Pastoral Care,
                            Ministry of Helps, and Faith Bible Institute Instructor. Pastor Butts continues to
                            serve God and teaches the word of God with passion and humor in order to equip
                            God’s people to walk in their full potential. Pastor Butts is happily married to his
                            lovely wife Constance. They have  two children, Joey and Jennifer.<br/>
                            <h1>First Lady Constance Montague Butts</h1> is a native of Memphis, Tennessee.
                            Her background includes working in her local church in the Music Ministry, Youth
                            Ministry, Sunday school, and a volunteer for community organizations.  Constance received
                            a Bachelor of Science degree from the University of Tennessee, Knoxville and a Master’s
                            degree from William Carey University, Hattiesburg Mississippi, both are in Business
                            Administration. During her professional career, Constance relocated to Brandon,
                            Mississippi where she met Pastor Butts. They were married on September 30, 2005. As the
                            wife of Pastor Butts, First Lady Constance served beside her husband in the Pastoral
                            Care Ministry in Jackson Mississippi.  This gave her an opportunity to see life through
                            the eyes of her husband.  It has been a rewarding and restoring experience.  In addition
                            to the Pastoral Care Ministry, First Lady Constance enjoys working with the Prime Timers,
                            Golden and Silver Saints Ministry and on Jackson’s First Ladies of the South Planning
                            Team. First Lady Constance will be instrumental in the growth of the Southaven
                            ministry. Her compassionate and dedicated spirit has warmed and touched the hearts
                            of others to know the love of Jesus.</p>},
                    {key: uuidv1(), title: 'History', image: bibleHistoryImg,
                        context: <p>Bishop Keith A. Butler, founder of Word of Faith International Christian
                            Center, founded Word of Faith, Jackson, MS in 1995 under the pastorship of Bishop
                            Kevin E. Wright. WOF - Jackson held its opening day service on Sunday August 6th,
                            1995. The church was nearly filled to capacity with over 100 people from as far away
                            as Meridian, Hattiesburg and Vicksburg. In less than 2 years, Word of Faith had more
                            than 400 people in attendance.</p>,
                        detail: <p>Bishop Keith A. Butler, founder of Word of Faith International Christian
                            Center, founded Word of Faith, Jackson, MS in 1995 under the pastorship of Bishop
                            Kevin E. Wright. WOF - Jackson held its opening day service on Sunday August 6th,
                            1995. The church was nearly filled to capacity with over 100 people from as far away
                            as Meridian, Hattiesburg and Vicksburg. In less than 2 years, Word of Faith had more
                            than 400 people in attendance. Immediate properties surrounding the church were
                            purchased, WOF broke ground for a new 500 seat sanctary. By 1999 the church had
                            outgrown it's new sanctuary and was conducting three services to accomodate the
                            fast growing congregation. At that time the church acquired a 264 acre golf course
                            which supplied the land to accomplish the vision God gave Bishop Wright. In 2003 WOF
                            erected a new 1500 seat sanctuary. Growth, progress, and excitement are a part of the
                            Word of Faith legacy. Since it's opening day service in 1995, Word of Faith Christian
                            Center has seen the manifestation of God's supernatural power in operation. Throughout
                            the past thirteen years, WOFCC has expanded to include five thriving satellite
                            churches, in Durant, Hattiesburg, Meridian, Vicksburg, and Yazoo City, MS. Word of
                            Faith is also involved in extensive local, statewide and international outreaches.
                            We were excited to experience the Grand Opening of the Southaven, Mississippi location
                            September 3rd, 2009 under the leadership of Pastor Joe L. Butts. We extend an
                            invitation to all the families of Southaven, Horn Lake, Olive Branch and other
                            surrounding areas to become apart of the Word of Faith family!</p>},
                    {key: uuidv1(), title: 'Founders', image: bishopImg,
                    context: <p>In May 1978 Bishop Keith and Mrs. Deborah Butler graduate
                        from Rhema Bible Training Center in Tulsa, Oklahoma with a mandate from God and a burning desire
                        to obey that mandate - to fight the good fight of faith. Bishop Butler founded Word of Faith
                        Christian Center (WOFCC) in a teaching center located on West McNichols in Detroit, Michigan.</p>,
                    detail: <p><h1>Bishop Keith A. Butler, Founder WOFICC</h1><br/> In May 1978 Bishop Keith and
                        Mrs. Deborah Butler graduated from Rhema Bible Training Center in Tulsa, Oklahoma with a
                        mandate from God and a burning desire to obey that mandate - to fight the good fight of faith.
                        Bishop Butler founded Word of Faith Christian Center (WOFCC) in a teaching center located on
                        West McNichols in Detroit, Michigan. Sixty people attended the first Sunday service on January
                        14, 1979. The very next day, WMUZ, a local Christian radio station, broadcast Bishop’s first
                        daily radio program, The Word of Faith. <br/><h1>The Vision</h1><br/> The vision of Word of
                        faith began to unfold as God made it plain what He desired, revealing Word of Faith’s 13-point
                        Master Plan. Habakkuk 2:2-3 lays out the vision process: “And the Lord answered me, and said,
                        Write the vision, and make it plain upon the tables, that he may run that readeth it. For the
                        vision is yet for an appointed time, but at the end it shall speak and not lie: though it tarry,
                        wait for it; because it will surely come, it will not tarry.” Before moving into its first
                        official church building in 1979, WOFCC services were also held at the temporary locations
                        of Marygrove College, and the Northwest Activity Center, both located in Detroit. WOFCC’s
                        first church building was located at 15121 W. Eight Mile Rd., a small storefront in Detroit
                        that comfortably held 150 folding chairs. The air condition rarely worked, but people continued
                        to hear this young minister preach the Word of God with boldness, courage, and conviction. By
                        1980, Bishop Butler was teaching two services with Sunday School classes sandwiched in
                        between. Lines to two very small restrooms formed to the right of the hallway book table
                        where “Faith Food” books and tapes were sold. There were just enough space for a nursery,
                        ministry room, and a match-box size office for Bishop, which, at many times, doubled for
                        whatever space was needed to meet congregational needs. Hundreds began to come to hear the Word
                        of God at WOFCC. This tremendous growth, in such a short period of time, forced WOFCC to hold
                        its Sunday morning services at McCauley Auditorium on the campus of Mercy College in Detroit.
                        But soon, McCauley Auditorium was not large enough to see the growing numbers of people who
                        came to hear God’s Word - to learn how to walk in divine health and prosperity; and to learn
                        of the other manifold blessings of God. Bishop Butler knew it was time to move again. He
                        persisted in his efforts to buy a closed Southfield school to house worship services and the
                        soon-to-be education complex, Faith Christian Academy (FCA). But God had other plans for
                        Word of Faith. <br/><h1>WOFICC Marches On</h1><br/> Bishop Butler found another building that
                        would become the next home of WOFCC. Members marched around the property on 928 E. Ten Mile
                        Rd., in Ferndale, MI, singing We’ve Come This Far by Faith. And indeed we had. On July 5, 1981,
                        a victorious church marched into their newly purchased building where the sanctuary seated 500
                        people. The Faith Food Store bookstore, Laymen’s Bible School, Faith Christian Academy, and
                        WOFCC’s elementary and middle school opened at this location. In the same year, Word of Faith’s
                        TV broadcast was taped on location and shown weekly on WGPR, a local TV station in Detroit. During
                        its first year at 928 E. Ten Mile, a prophecy, given by Charles Capps, based upon Isaiah 54:2-3
                        says, “Enlarge the place of thy tent, and let them stretch forth the curtains of thine
                        habitation: spare not, lengthen thy cords, and strengthen they stakes; For thou shall break
                        forth on the right hand and on the left, and thy seek shall inherit the Gentiles, and make the
                        desolate cities to be inhabited.” It wasn’t long before Word of Faith was holding two Sunday
                        services in its new church home. By 1983, two Sunday morning services with video-tape viewing to
                        those seated in the Fellowship Hall could not adequately serve all the Lord had sent. As Bishop
                        Butler revealed the vision to reach out and win the city of Detroit for Jesus, a spirit of
                        anticipation, prayer, and preparation moved throughout WOFCC’s church family. By October 1983
                        WOFCC purchased the former Temple Israel church building located at 17000 Manderson in Detroit.
                        The 1200 seat sanctuary was totally renovated in time for the first Sunday service. As Word of
                        Faith grew in size and scope, the Manderson building served us well with numerous rooms and
                        offices, two fellowship halls, a commercial kitchen, a stage with dressing rooms, and
                        audio-visual rooms. Needless to say, three Sunday morning services were necessary by November,
                        1986. In 1987, offices for church staff had to move to a professional office building located in
                        Southfield, MI, due to WOFCC’s phenomenal growth. On July 15, 1988, Word of Faith moved to 7616
                        E. Nevada in Detroit. This location had a school building that was perfect for Faith Christian
                        Academy. All administrative and ministerial personnel could be housed in one building, with
                        seating for 2,300 Word of Faith had to hold two Sunday services upon moving in. Attendance
                        continued to grow, producing the need for Bishop to hold three Sunday services, two in the
                        morning, and one in the afternoon. After only five years at the E. Nevada location, WOFCC
                        “burned the note” - the mortgage on the property had been paid in full. It became apparent
                        that WOFCC needed more parking spaces for those coming in droves to hear the Word. So,
                        additional property in the surrounding neighborhood was purchased. While at the E. Nevada
                        location, 1994 would usher in a new phase of Bishop Butler’s outreach ministry - The Living
                        Word TV and radio broadcast. Through these media, Bishop Butler was able to touch the cities
                        with the Word of God, reaching out to various cities around the country such as Philadelphia,
                        PA, Atlanta, GA, Jackson, MS, Jacksonville, FL, St. Thomas, USVI, and Detroit, MI.</p>},
                    {key: uuidv1(), title: 'Statement of Faith', image: logoLargeImg,
                        context: <p>We Believe...The Bible, That the Bible is the divinely inspired Word of God.
                            The Holy Trinity, In the Trinity of God; the Father, the Son, and the Holy Ghost.
                            Salvation, All have sinned and come short of the glory of God and are in need of salvation.
                            Salvation has been provided for all men through Jesus Christ. The Holy Spirit, That the
                            infilling of the Holy Spirit is an experience subsequent to salvation, and is the Will of
                            God that all are filled.</p>,
                        detail: <p><h1>We Believe</h1><br/>The Bible, That the Bible is the divinely inspired Word of God<br/>
                            The Holy Trinity, In the Trinity of God; the Father, the Son, and the Holy Ghost<br/>
                            Salvation, All have sinned and come short of the glory of God and are in need of salvation. Salvation has been provided for all men through Jesus Christ.<br/>
                            The Holy Spirit, That the infilling of the Holy Spirit is an experience subsequent to salvation, and is the Will of God that all are filled.<br/>
                            The Healing Power of God, Healing is provided in the redemptive work of Christ and is available to every believer.<br/>
                            The Church, The church consists of all those who have received Jesus Christ as their personal Savior.<br/>
                            The Rapture, There shall be bodily resurrection of the just and unjust.<br/>
                            Christ's Return, In the personal, visible, imminent return of Jesus Christ.<br/>
                            Water Baptism, In water baptism, and the observance of the Lord's Supper.</p>},
                    {key: uuidv1(), title: 'Vision', image: crossImg,
                        context: <p>1. Secure a church building that meets all aspects of the ministry, including growth.<br/>
                            2. Establish a Bible School to provide learning classes for the Laymen.<br/>
                            3. Expand to include a Youth Ministry; Generation 6:20, with seperate service area.<br/>
                            4. Award Scholarships to provide financial aid to students first year of college.<br/>
                            5. 24 - hour hotline for homeless and runaways.<br/>
                            ...</p>,
                        detail: <p><b>1.</b> Secure a church building that meets all aspects of the ministry, including growth.<br/>
                            <b>2.</b> Establish a Bible School to provide learning classes for the Laymen.<br/>
                            <b>3.</b> Expand to include a Youth Ministry; Generation 6:20, with seperate service area.<br/>
                            <b>4.</b> Award Scholarships to provide financial aid to students first year of college.<br/>
                            <b>5.</b> 24 - hour hotline for homeless and runaways.<br/>
                            <b>6.</b> Establish a Blessing/Disaster Center; providing food and clothing for families with needs.<br/>
                            <b>7.</b> Support and contribute to Missions.<br/>
                            <b>8.</b> Establish a WOF - Ride transportation service.<br/>
                            <b>9.</b> Expand the ministry to Radio and Television/Cable<br/>
                            <b>10.</b> Establish Word - Based Teaching Centers in North Mississippi and Memphis, Tennessee.</p>}];
        case 'services':
            return [{key: uuidv1(), image: freepik28Img, title: 'New Members Classes', context: <p>4 Classes Total by appointment in the business suite.</p>},
                    {key: uuidv1(), image: freepik1869Img, title: 'Worship Service & Corporate Confession', context: <p>Sunday's @ 9.45am<br/>First Sundays: Holy Communion & Mission</p>},
                    {key: uuidv1(), image: freepik11405Img, title: 'Children\'s Ministry', context: <p>2nd & 3rd Sunday's<br/>9:45am in the Children's Zone<br/>Not held on 1st or 5th Sunday's<br/>ages 5 - 11</p>},
                    {key: uuidv1(), image: freepik397Img, title: 'Pastoral Care', context: <p>24/7 365!<br/>Visit the <Link to={'/contact-us'}>Contact Us</Link> page for contact information</p>}];
        case 'directions':
            return [];
        case 'contact_us':
            return [];
        case 'ministries':
            return [
                {key: uuidv1(), title: "Children's", image: freepik11405Img,
                    context: <p>"Showing children the love of God, the way Jesus teaches."</p>,
                    detail: <p></p>},
                {key: uuidv1(), title: 'Media', image: freepik1773Img,
                    context: <p>"Proving a free copy of the message, making sure all audio sounds and performs
                        great, and creating announcements and fliers are all things we love to do for the people
                        of God."</p>,
                    detail: <p></p>},
                /*{key: uuidv1(), title: 'Hospitality', image: freepikogdrvdoImg, //coffee image
                    context: <p>"Contributes to the needs of visitors and members by providing warm words of
                        welcome, information and refreshments."</p>,
                    detail: <p></p>},*/
                {key: uuidv1(), title: 'Couples in Covenant', image: freepik55Img,
                    context: <p>"Keeping the spark in God's married couples, Loving in marriage as Jesus loves the church."</p>,
                    detail: <p></p>},
                {key: uuidv1(), title: 'Youth', image: freepik2159Img,
                    context: <p>"Reaching out the youth as they are our future leaders. Setting the example in speech,
                        conduct, love, faith, and purity."</p>,
                    detail: <p></p>},
                {key: uuidv1(), title: 'Hospitality', image: freepik272299Img,
                    context: <p>"Contributes to the needs of visitors and members by providing warm words of
                        welcome, information and refreshments."</p>,
                    detail: <p></p>},
                {key: uuidv1(), title: 'Bridge Connectors', image: freepikoq5kaw0Img,
                    context: <p>"Bridging the gap between the generations, showing that God reaches all!"</p>,
                    detail: <p></p>},
                {
                    key: uuidv1(),
                    title: 'Praise Team',
                    image: freepik3893Img,
                    context: <p>"Leading the charge in setting the atmosphere for true praise!"</p>,
                    detail: <p></p>
                },
                {
                    key: uuidv1(),
                    title: 'Men of Valor',
                    image: 'ben-white-LJQEDQAmAnI-unsplash.jpg', // Credit badge -> <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@benwhitephotography?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Ben White"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Ben White</span></a>
                    context: <p>"Iron sharpens iron! Learning leadership and keeping the faith. The Mighty Men of Valor"</p>,
                    detail: <p></p>
                },
                {
                    key: uuidv1(),
                    title: 'Women of Virtue',
                    image: 'priscilla-du-preez-zXsZHJC5qYw-unsplash.jpg', //<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@priscilladupreez?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Priscilla Du Preez"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Priscilla Du Preez</span></a>
                    context: <p>"Wise women of virtue! Powerful, positive, and faithful. Seeking His way for her life."</p>,
                    detail: <p></p>
                }
                ];
        default:
    }
};
