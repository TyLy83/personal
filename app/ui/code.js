import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs, vs2015, arta } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Code = ({ code, language = "javascript", style = vs2015 }) => {

    return <SyntaxHighlighter language={language}
        style={style}
        showLineNumbers={true}>
        {
            code
        }
    </SyntaxHighlighter>

}

export default Code;