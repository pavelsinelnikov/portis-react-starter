import React, { Component } from "react";

export default class SendTransferForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			senderAddress: "",
			receiverAddress: "",
			amount: 1,
			senderBalance: 0,
			receiverBalance: 0,
			message: "",
		};
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<div className="row">
					<div className="nine columns smallTop">
						{this.state.message && <b>{this.state.message}</b>}
					</div>
					<div className="three columns u-pull-right">
						<button
							type="button"
							className="u-full-width"
							onClick={this.onChange.bind(this)}
						>
							Portis Menu
						</button>
					</div>
				</div>

				<form>
					<div className="row smallTop">
						<div className="six columns">
							<label>Sender Address</label>
							<input
								name="senderAddress"
								value={this.state.senderAddress}
								type="text"
								className="u-full-width"
								placeholder="Loading..."
								disabled
							/>
						</div>
						<div className="six columns">
							<label>Receiver Address</label>
							<input
								name="receiverAddress"
								value={this.state.receiverAddress}
								type="text"
								className="u-full-width"
								placeholder="Enter the receiver address"
								required
								onChange={this.onChange.bind(this)}
							/>
						</div>
					</div>
					<div className="row">
						<div className="six columns">
							<label>Amount</label>
							<input
								name="amount"
								value={this.state.amount}
								type="text"
								className="u-full-width"
								placeholder="Amount to send"
								required
								onChange={this.onChange.bind(this)}
							/>
						</div>
						<div className="three columns">
							<label>Sender Balance</label>
							<p>{this.state.senderBalance} ETH</p>
						</div>
						<div className="three columns">
							<label>Receiver Balance</label>
							<p>{this.state.receiverBalance} ETH</p>
						</div>
					</div>
					<div className="row">
						<div className="six columns">
							<button
								type="button"
								className="button-primary u-full-width"
								disabled={!this.state.receiverAddress}
							>
								Transfer
							</button>
						</div>
						<div className="six columns">
							<button type="button" className="u-full-width">
								Check Balance
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
