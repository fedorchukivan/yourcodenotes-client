import { useDispatch, useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { Navigate, useParams } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import './record.css';
import { MDBBadge, MDBFile, MDBListGroup, MDBListGroupItem, MDBTypography } from "mdb-react-ui-kit";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from "react";
import { recordsActionCreator } from "../../store/actions";
import { useEffect } from "react";
import showParsedSolution from "./helpers/show-parsed-solution";
import { cloudinaryUpload } from "./helpers/upload-img";

export default function RecordCreate({ path }) {
  const user = useSelector(({ auth }) => auth.user);
  const status = useSelector(({ records }) => records.DataStatus);

  const params = useParams();
  
  const [tag, setTag] = useState('');
  const [sourceName, setSourceName] = useState('');
  const [sourceLink, setSourceLink] = useState('');
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [photo, setPhoto] = useState();
  const [sectionId, setSectionId] = useState('');
  const [sources, setSources] = useState(() => []);
  const [tags, setTags] = useState(() => []);
  const [isPublic, setIsPublic] = useState(false);
  const [backLink, setBackLink] = useState(path);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const dispatch = useDispatch();
  
  useEffect(() => { 
    switch(path) {
      case AppRoute.ROOT:
        setSectionId(null);
        break;
      case AppRoute.PROJECTS:
        setSectionId(params.sectionId);
        setBackLink(path + '/' + params.projectId + '/' + params.sectionId);
        break;
      case AppRoute.SHARED:
        setSectionId(params.sectionId);
        setBackLink(path + '/' + params.projectId + '/' + params.sectionId);
        break;
      default: {}
    }
  }, [params, path])

  if (!user) return <Navigate to={AppRoute.SIGN_IN} />

  const handlePublicSwitch = (e) => {
    setIsPublic(e.target.checked);
  }

  const handleAddTag = () => {
    if (!tags.includes(tag) && tag) {
      setTags(t => [...t, tag]);
    }
    setTag('');
  }

  const handleAddSource = () => {
    if (sourceName && sourceLink) {
      const source = {
        name: sourceName,
        link: sourceLink
      }
      setSources(s => [...s, source]);
      setSourceLink('');
      setSourceName('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && solution && problem) {
      const r = {
        title,
        problem_description: problem,
        solution_description: solution,
        creator_id: user.user_id,
        is_public: isPublic,
        tags,
        sources,
        section_id: sectionId,
        image_link: ''
      }
      dispatch(recordsActionCreator.addRecord(r));
    }
  }
  
  const addPairTag = pairTag => {
    const txtarea = document.getElementById("solution");
    const start = txtarea.selectionStart;
    const finish = txtarea.selectionEnd;
    setSolution(txtarea.value.substring(0, start) + `${pairTag} `
                    + txtarea.value.substring(start, finish) + `${pairTag} `
                    + txtarea.value.substring(finish));
  }

  const addSingleTag = singleTag => {
    const txtarea = document.getElementById("solution");
    const start = txtarea.selectionStart;
    setSolution(txtarea.value.substring(0, start) + `${singleTag} `
                    + txtarea.value.substring(start));
  }

  const handleAddPhoto = async photo => {
    cloudinaryUpload(photo).then(link => addSingleTag(`\\a ${link}\\a`));
  }

  return !(status === 'success') ? (
  <>
    <Navigation showSearch={false} />
  
    <main className="record-view-container">
      <form>
        <div className="input-group mb-2">
          <div className="input-group-text" >Title</div>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required/>
        </div>
        <i className='text-secondary'>By: {user ? user.username : ''}</i>
        <hr/>
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tag name"
              value={tag}
              onChange={e => setTag(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={handleAddTag}>
              Add tag
            </button>
            <button className="btn btn-danger" type="button" onClick={() => setTags([])}>
              Clear
            </button>
          </div>
          {
            tags.map((tag, index) =>
              <MDBBadge pill className='mx-2' color='info' light key={index}>
                {tag}
              </MDBBadge>)

          }
        </div>
        <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Problem description</MDBTypography>
        <textarea className="form-control" rows="2" value={problem} onChange={e => setProblem(e.target.value)} required></textarea>
        <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Solution</MDBTypography>
        <div className="d-flex mt-2 ms-2">
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addPairTag('\\b')}>
            <i className="fas fa-bold"></i>
          </button>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addPairTag('\\i')}>
            <i className="fas fa-italic"></i>
          </button>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addPairTag('\\u')}>
            <i className="fas fa-underline"></i>
          </button>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addPairTag('\\c')}>
            <i className="fas fa-code"></i>
          </button>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addPairTag('\\l')}>
            <i className="fas fa-list-ul"></i>
          </button>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addPairTag('\\*')}>
            <i className="fas fa-circle"></i>
          </button>
          <MDBBtn className="btn btn-light btn-floating" onClick={toggleShow}><i className="far fa-image"></i></MDBBtn>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addSingleTag('\\t')}>
            <i className="fas fa-bars-staggered"></i>
          </button>
          <button type="button" className="btn btn-light btn-floating" data-mdb-ripple-color="dark" onClick={() => addSingleTag('\\n')}>
            <i className="fas fa-arrow-turn-down"></i>
          </button>
        </div>
        <textarea id="solution" className="form-control" rows="4" value={solution} onChange={e => setSolution(e.target.value)} required></textarea>
        <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Preview</MDBTypography>
        { showParsedSolution(solution) }
        <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Sources</MDBTypography>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Source name"
            value={sourceName}
            onChange={e => setSourceName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Source URL"
            value={sourceLink}
            onChange={e => setSourceLink(e.target.value)}
          />
          <button className="btn btn-primary" type="button" onClick={handleAddSource}>
            Add source
          </button>
          <button className="btn btn-danger" type="button" onClick={() => setSources([])}>
            Clear
          </button>
        </div>
        <MDBListGroup className="ms-3" light numbered style={{ minWidth: '22rem' }}>
          {
            sources.map(source =>
              <MDBListGroupItem key={source.link}><a href={source.link} rel="noreferrer" target="_blank">{source.name}</a></MDBListGroupItem>
            )
          }
        </MDBListGroup>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input ms-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isPublic} onChange={handlePublicSwitch}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Public record</label>
        </div>
        <button className="btn btn-primary w-100" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBFile id='customFile' onChange={e => {
                setPhoto(e.target.files[0]);
              }}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={async () => { handleAddPhoto(photo); toggleShow() }}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </main>
  </>)
  :
  <Navigate to={backLink} />;
}