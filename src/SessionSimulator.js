import React, { Component, PureComponent } from 'react';

//styles

const styles = {
    container: {
        width: 320,
        height: 480,
        background: '#666',
        margin: '0 auto',
        border: '16px ridge #AAAAAA',
        overflow: 'hidden',
        position: 'relative'
    },
    screen: {
        width: 320,
        height: 480
    },
    event: {
        position: 'absolute',
        background: 'transparent',
        zIndex: 10
    },
    ripple: {
        borderRadius: '50%',
        background: "#F1F1F1",
        border: `1px solid #F1F1F1`,
    }
};

const data = [
    {
        "item_type": "AppEventItem",
        "name": "Splash_Screen_Launched",
        "time": 0.30000000447034836,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462900164"
        }
    },
    {
        "item_type": "NavigationItem",
        "name": "com.musicmuni.riyaz.activities.user.SplashScreenActivity",
        "time": 0.4000000059604645,
        "duration": 2.3000000342726707,
        "additional_info": {}
    },
    {
        "item_type": "AppEventItem",
        "name": "apx_app_opened",
        "time": 0.4000000059604645,
        "duration": 0,
        "additional_info": {
            "type": "normal"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Moved_Ahead_Splash_Screen",
        "time": 0.9000000134110451,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462900721",
            "time_spent": "1"
        }
    },
    {
        "item_type": "NavigationItem",
        "name": "com.musicmuni.riyaz.activities.HomeScreenActivity",
        "time": 3.1000001430511475,
        "duration": 5.500000081956387,
        "additional_info": {}
    },
    {
        "item_type": "AppEventItem",
        "name": "Dashboard_Vitals_Loaded",
        "time": 3.800000056624413,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462903575"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 5.000000074505806,
        "duration": 0,
        "additional_info": {
            "error": "thumbnail error",
            "origin": "UNKNOWN",
            "time_stamp": "1536462904771"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 5.000000074505806,
        "duration": 0,
        "additional_info": {
            "error": "thumbnail error",
            "origin": "UNKNOWN",
            "time_stamp": "1536462904773"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 5.100000075995922,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462904947",
            "error": "thumbnail error",
            "origin": "INTERNAL_ERROR"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 5.100000075995922,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462904948",
            "error": "thumbnail error",
            "origin": "INTERNAL_ERROR"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 5.100000075995922,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462904949",
            "error": "thumbnail error",
            "origin": "INTERNAL_ERROR"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 5.100000075995922,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462904951",
            "error": "thumbnail error",
            "origin": "INTERNAL_ERROR"
        }
    },
    {
        "item_type": "NavigationItem",
        "name": "com.musicmuni.riyaz.activities.HomeScreenActivity",
        "time": 13.199999809265137,
        "duration": 3.200000047683716,
        "additional_info": {}
    },
    {
        "item_type": "AppEventItem",
        "name": "Dashboard_Vitals_Loaded",
        "time": 13.300000198185444,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462913236"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Click_Menu",
        "time": 15.300000227987766,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462915225"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 15.800000235438349,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462915761",
            "error": "thumbnail error",
            "origin": "UNKNOWN"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Launch_Vocal_Monitor",
        "time": 16.400000244379044,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462916327"
        }
    },
    {
        "item_type": "NavigationItem",
        "name": "com.musicmuni.riyaz.activities.lessons.FreePractiseActivity",
        "time": 16.5,
        "duration": 0.10000000149011612,
        "additional_info": {}
    },
    {
        "item_type": "NavigationItem",
        "name": "com.musicmuni.riyaz.activities.lessons.FreePractiseActivity",
        "time": 16.700000762939453,
        "duration": 161.60000240802765,
        "additional_info": {}
    },
    {
        "item_type": "AppEventItem",
        "name": "Start_Breath_Control",
        "time": 19.80000029504299,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462919750"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 28.90000043064356,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462928783"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 28.90000043064356,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462928787",
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 28.90000043064356,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462928791",
            "time_spent": "3"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 39.60000059008598,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462939485"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 39.60000059008598,
        "duration": 0,
        "additional_info": {
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson",
            "time_stamp": "1536462939490"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 39.60000059008598,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462939493",
            "time_spent": "8"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 44.90000066906214,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462944775"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 44.90000066906214,
        "duration": 0,
        "additional_info": {
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson",
            "time_stamp": "1536462944781"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 44.90000066906214,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462944787",
            "time_spent": "3"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 50.00000074505806,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462949918"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 50.00000074505806,
        "duration": 0,
        "additional_info": {
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson",
            "time_stamp": "1536462949922"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 50.00000074505806,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462949926",
            "time_spent": "3"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 60.30000089854002,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462960240"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 60.30000089854002,
        "duration": 0,
        "additional_info": {
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson",
            "time_stamp": "1536462960247"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 60.30000089854002,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462960253",
            "time_spent": "2"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 62.80000093579292,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462962660"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 62.80000093579292,
        "duration": 0,
        "additional_info": {
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson",
            "time_stamp": "1536462962672"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 62.80000093579292,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462962679",
            "time_spent": "0"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 72.90000108629465,
        "duration": 0,
        "additional_info": {
            "error": "no such table: psd_upload_queue (code 1): , while compiling: INSERT INTO psd_upload_queue(_id,type,user_id) VALUES (?,?,?)",
            "origin": "savePSD:addPSDToUploadQueue",
            "time_stamp": "1536462972761"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Exception",
        "time": 72.90000108629465,
        "duration": 0,
        "additional_info": {
            "error": "Could not fetch data",
            "origin": "updateProgressInfos:lesson",
            "time_stamp": "1536462972765"
        }
    },
    {
        "item_type": "AppEventItem",
        "name": "Finish_Breath_Control",
        "time": 72.90000108629465,
        "duration": 0,
        "additional_info": {
            "time_stamp": "1536462972769",
            "time_spent": "2"
        }
    }
];

export default class SessionSimulator extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentScreen: null,
            currentEvent: null
        };
        this.times = [];
    }

    renderNextScreen = (index) => {
        this.setState(({
            currentScreen: index
        }));
    };

    renderNextEvent = (index) => {
        this.setState(({
            currentEvent: index
        }));
    };



    simulate = () => {
        data.forEach((d, i) => {
            this.times[i] = setTimeout(() => {
                console.log(data[i]);
                if(d.item_type === "AppEventItem"){
                    this.renderNextEvent(i);
                }else{
                    this.renderNextScreen(i);
                }
            }, d.time * 1000);
        });
    };

    componentDidMount(){
        this.simulate();
    }

    render(){
        const { currentScreen, currentEvent} = this.state;
        return (
            <div style={styles.container}>
                { currentEvent && <Event {...data[currentEvent]}/> }
                { currentScreen && <Screen {...data[currentScreen]} /> }
            </div>
        )
    }

}

class Screen extends PureComponent {

    render(){
        const { name, events, time } = this.props;
        console.info(name);
        return(
            <div style={styles.screen}>
                <h2 style={{marginTop: '50%'}}>{name}</h2>
            </div>
        )
    }Finish_Breath_Control
}

class Event extends PureComponent {

    render(){
        const { name, time } = this.props;
        console.info(name);
        return(
            <div style={{...styles.event, top: Math.random() * 300 % 480, left: Math.random() * 250 % 320}}>
                <span style={styles.ripple} className='ripple'/>
                <p>{name}</p>
            </div>
        )
    }
}