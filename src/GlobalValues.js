const SMALL_DATA_ADDRESS = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const BIG_DATA_ADDRESS = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

const ADDRESS = {
	BIG_DATA_ADDRESS: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
	SMALL_DATA_ADDRESS: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
}
const HEADERS = ['id', 'firstName', 'lastName', 'email', 'phone'];
const NUMBER_VISIBLE_ROWS = 50;


export {SMALL_DATA_ADDRESS};
export {BIG_DATA_ADDRESS};
export {HEADERS};
export {NUMBER_VISIBLE_ROWS};
export {ADDRESS};