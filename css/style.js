import { StyleSheet, Dimensions } from 'react-native';
let sw = Dimensions.get('window').width;
let sh = Dimensions.get('window').height;
const s = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#88d3ce',
    },
    start: {
        margin: 20,
        backgroundColor: 'white',
        marginBottom: 50,
        flex:1,
    },
    startButton: {
        
        borderRadius: 10,
        marginBottom: 50,
        color:'black',
        // flex:1,
    },
    judt: {
        marginLeft: 125
    },
    viewlist: {
        top: -40,
    },
    imgBeglistWorkout: {
        height: sh/8.41,
        // 90
        width: sw/4,
        // 90
        borderRadius: 10,
    },
    listWorkout: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#444',
    },
    imgBegWorkout: {
        width: 380,
        height: 180,
        left: -15
    },
    sumDetail: {
        flexDirection: 'row',
        height: 40,
        padding: 1,
        paddingLeft: 20,
        // backgroundColor:'red',
        top: -50,
        marginBottom: 20,

    },
    imagebackgroudd: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    TextInputt: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    TextInputtRow: {
        height: 50,
        width: 240,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    TextInputtRow1: {
        height: 50,
        width: 150,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxRadius: {
        borderRadius: 20,
        paddingBottom: 35,

    },
    modalINNER: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    begText: {
        marginLeft: 10,
        top: -100,
    },
    shadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    imageMargin: {
        marginBottom: -40,
    },
    imageMargin1: {
        margin: 20,
        marginBottom: -40,
    },
    begginerText: {
        margin: 20,

    },
    imgBeg: {
        width: 330,
        height: 150,
        borderRadius: 5,
    },

    imgBeg1: {
        width: 130,
        height: 150,
        borderRadius: 5,
    },
    black: {
        color: '#444'
    },
    summaryStyle: {
        flex: 1,
        // margin:50,
        // marginLeft:10,
        marginBottom: 50,
        marginTop: 30,
    },
    card: {
        // backgroundColor:'#ffffff',
        // marginTop:20,
        borderRadius: 20,
    },
    sumMargin: {
        margin: 10,
        alignItems: 'center',
    },
    white: {
        color: 'white',
    },
    homeScroll: {
        // marginTop:-20
    },
    flexx: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    rowCamera: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    rowCameraa: {
        fontSize: 45,
        color: '#88d3ce'

    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerHeader: {
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        // borderRadius: 5,
        borderTopEndRadius: 0,
        borderBottomEndRadius: 10,
        backgroundColor: '#6e45e2',

    },
    containerBody: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        // borderRadius: 5,
        borderTopEndRadius: 0,
        borderBottomEndRadius: 10,

    },
    imageBody: {
        height: 180,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerImage: {
        height: 190,
        width: 280,
    },
    drawerImageText: {
        fontSize: 40,
        color: 'aqua',
        marginTop: -60,
        fontWeight: '100',
    },
    text1: {
        fontSize: 35,
        fontWeight: '800',
    },
    text2: {
        fontSize: 20,
    },
    text4: {
        fontSize: 16,
    },
    text3: {
        fontSize: 25,
        fontWeight: '600',
    }
});
export default s;