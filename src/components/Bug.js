import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';

import './Bug.css';

const longStringOfJavascriptCode = 'console.log(1);\n'.repeat(30);

function Bug() {
	const options = {
		mode: 'javascript',
		lineNumbers: true,
		theme: 'solarized light',
	};
	return (
		<div className="bug">
			<CodeMirror value={longStringOfJavascriptCode} options={options} />
		</div>
	);
}

export default Bug;
