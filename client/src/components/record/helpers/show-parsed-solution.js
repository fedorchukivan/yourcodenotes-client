export default function showParsedSolution (solutionString) {
  const characters  = Array.from(solutionString);
  let text = '';
  const opened = ['result'];
  const pickOpened = () => opened[opened.length - 1];
  const semantics = {
    result: [],
    code: [],
    italic: [],
    bold: [],
    underline: [],
    uList: [],
    uListItem: [],
    img: []
  }

  const createCodeBlock = (inner) => <code>{inner}</code>;
  const createItalicBlock = (inner) => <i>{inner}</i>;
  const createBoldBlock = (inner) => <b>{inner}</b>;
  const createUnderlineBlock = (inner) => <u>{inner}</u>;
  const createUnorderedList = (inner) => <ul>{inner}</ul>;
  const createListItem = (inner) => <li>{inner}</li>;
  const createImg = (source) => <div className="text-center">
    <img src={source[0].props.children} className="img-fluid" alt=""/>
  </div>

  const handleOpenCloseTag = (tagname, template) => {
    semantics[pickOpened()].push(<>{text}</>);
    text = '';
    if (pickOpened() === tagname) {
      opened.pop();
      semantics[pickOpened()].push(template(semantics[tagname]));
      semantics[tagname] = [];
    }
    else if (opened.includes(tagname)) {
      semantics[pickOpened()].push(<>{text}</>);
      while (pickOpened() !== tagname) {
        const toPush = opened.pop();
        semantics[pickOpened()].push(<>{semantics[toPush]}</>);
        semantics[toPush] = [];
      }
      opened.pop();
      semantics[pickOpened()].push(template(semantics[tagname]));
      semantics[tagname] = [];
    }
    else {
      opened.push(tagname);
    }
  }

  for (let i = 0; i < characters.length;) {
    if (characters[i] !== '\\') {
      text += characters[i++];
    }
    else if (characters[i+1]) {
      i++
      if (characters[i] === 't') {
        semantics[pickOpened()].push(<>{text}</>);
        semantics[pickOpened()].push(<div className="tab"></div>);
        i++;
        text = '';
      }
      else if (characters[i] === 'n') {
        semantics[pickOpened()].push(<>{text}</>);
        semantics[pickOpened()].push(<br/>);
        i++;
        text = '';
      }
      else if (characters[i] === 'c') {
        i++;
        handleOpenCloseTag('code', createCodeBlock);
      }
      else if (characters[i] === 'i') {
        i++;
        handleOpenCloseTag('italic', createItalicBlock);
      }
      else if (characters[i] === 'b') {
        i++;
        handleOpenCloseTag('bold', createBoldBlock);
      }
      else if (characters[i] === 'u') {
        i++;
        handleOpenCloseTag('underline', createUnderlineBlock);
      }
      else if (characters[i] === 'l') {
        i++;
        handleOpenCloseTag('uList', createUnorderedList);
      }
      else if (characters[i] === '*') {
        i++;
        handleOpenCloseTag('uListItem', createListItem);
      }
      else if (characters[i] === 'a') {
        i++;
        handleOpenCloseTag('img', createImg);
      }
      else if (characters[i] === '\\') {
        i++;
        text += '\\';
      }
    }
    else { break; }
  }
  semantics[pickOpened()].push(<>{text}</>);
  while (opened.length > 1) {
    const toPush = semantics[opened.pop()];
    semantics[pickOpened()].push(<>{toPush}</>);
  }
  return <div className="mt-3 mb-1 ms-2">{semantics.result}</div>
}