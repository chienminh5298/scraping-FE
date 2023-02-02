import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'src/scss/App.scss';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import Home from 'src/pages/home';
import Files from 'src/pages/files';
import Shopee from 'src/pages/shopee';
import Download from 'src/pages/downloading';
import Loading from 'src/components/loading';
import { SocketContext } from 'src/context';
import { Manager } from 'socket.io-client';
import * as action from 'src/actions';
import { server_socket } from 'src/helper/setting';

const App = () => {
	var dispatch = useDispatch();
	var [socket, setSocket] = useState(null);

	/**Connect to socket server and listen response */
	useEffect(() => {
		const manager = new Manager(server_socket);
		const ws = manager.socket('/');
		setSocket(ws);
		ws.on('connect', () => {});
		ws.on('update-file', (data) => {
			dispatch(action.update_task(data));
		});
	}, []);

	return (
		<SocketContext.Provider value={socket}>
			<div id='app-container'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/your-files' element={<Files />} />
					<Route path='/shopee' element={<Shopee />} />
					<Route path='/download' element={<Download />} />
					<Route path='/:somestring' exact element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</SocketContext.Provider>
		// <Loading />
	);
};

export default App;
