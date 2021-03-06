'use strict';
/*eslint no-console:0*/
import React from 'react';
let {Component}  = React;
class Index extends Component{
    constructor(props){
        super(props);
    }
    //点击增加按钮事件
    _addHandle(num){
        let {increaseAction} = this.props.reduxActions;
        increaseAction(num);
    }
    //主题切换按钮事件
    _ThemeHandle(){
        let { themeAction } = this.props.reduxActions;
        themeAction();
    }
    render(){
        console.log(this.props);
        let { reduxState } = this.props;
        return (
            <div style={styles.circle}>
                <div style={{color:reduxState.Theme.color}}>{reduxState.Increase.count}</div>
                <div style={styles.btnTheme} onClick={this._ThemeHandle.bind(this)}>切换主题</div>
                <div style={styles.btnAddOne} onClick={()=>{this._addHandle(1);}}>+1</div>
                <div style={styles.btnAddTwo} onClick={()=>{this._addHandle(2);}}>+2</div>
            </div>
        );
    }
}
//样式定义
const styles = {
    circle:{
        width:'400px',
        height:'400px',
        position:'absolute',
        left:'50%',
        top:'50%',
        margin:'-200px 0 0 -200px',
        borderRadius:'50px',
        fontSize:'60px',
        color:'#545454',
        backgroundColor:'#ececec',
        lineHeight:'100px',
        textAlign:'center',
    },
    btnAddOne:{
        width:'100px',
        height:'50px',
        lineHeight:'50px',
        backgroundColor:'#fcfcfc',
        fontSize:'20px',
        position:'absolute',
        left:'40px',
        bottom:'10px',
        cursor:'pointer',
    },
    btnAddTwo:{
        width:'100px',
        height:'50px',
        lineHeight:'50px',
        backgroundColor:'#fcfcfc',
        fontSize:'20px',
        position:'absolute',
        right:'40px',
        bottom:'10px',
        cursor:'pointer',
    },
    btnTheme:{
        width:'80%',
        height:'50px',
        lineHeight:'50px',
        backgroundColor:'#fcfcfc',
        fontSize:'20px',
        position:'absolute',
        right:'10%',
        bottom:'100px',
        cursor:'pointer',
    }
};
export default Index;
