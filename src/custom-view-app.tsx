import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { CustomView } from './custom-view'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
        <CustomView/>
	</StrictMode>,
)
