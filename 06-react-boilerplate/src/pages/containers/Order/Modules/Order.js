import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/order';
/*ant*/
import {
	Toast
} from 'antd-mobile';
/**/
import Express from '../../../components/Order/Express';
import Goods from '../../../components/Order/Goods';
import Memo from '../../../components/Order/Memo';
import Amount from '../../../components/Order/Amount';
import Pay from '../../../components/Order/Pay';
class Order extends Component {
	constructor(props, context) {
		super(props, context);
		this.handlePay = this.handlePay.bind(this);
	}
	componentWillMount() {
		if (this.props.main.isFetching === 0) {
			Toast.loading(null,0);
			let url = types.ORDER_MAIN_GET;
			let param = {};
			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: function(data) {
					Toast.hide();
				},
				onError: function(res) {
					Toast.hide();
					alert('error');
				}
			};
			this.props.actions.request(url, params, {});
		}
	}
	componentDidMount(){
	} 
	componentWillUnmount () {
		console.info('卸载组件');
		this.props.actions.navigator();
	}
	handlePay(event){//获取参数，子与子组件通过父组件信息共享
		const {
			addr,
			itemArr,
			itemObj,
			logis,
			amounts
		} = this.props.main;//main的数据
		return {
			//action:'getPaymentInfo',//可以不写
			aid:addr.id,
			lid:logis.id,
			memo:this.refs.Memo.state.v
		};
	}
	render() {
		const {main,actions} = this.props;
		const {
			addr,
			itemArr,
			itemObj,
			logis,
			amounts
		} = main;//main的数据
		return (
			<div className="w-reset">
				<Express 
					addr = {addr} 
					actions = {actions}		
				/>
				<Goods 	
					itemArr = {itemArr} 
					itemObj = {itemObj} 
					logis={logis}
					aid={addr.id}
					actions = {actions}		
				/>
				<Memo ref="Memo" />
				<Amount amounts = {amounts} />
				<Pay 
					amounts = {amounts} 
				 	getPayParams = {this.handlePay} 
				/>
      		</div>
		);
	}
}

Order.propTypes = {
	order: React.PropTypes.shape({
		main :React.PropTypes.object
	}),
	actions: React.PropTypes.object
};

export default Order;