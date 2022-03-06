import React, { FC } from 'react'
import './styles/main.scss'
import ClickCounter from './components/clickCounter/ClickCounter';

const App: FC = () => {

  return <>
		Webpack!
		<ClickCounter />
	</>
}

export default App
