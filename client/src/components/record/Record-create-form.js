import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { Navigate } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import './record.css';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBTypography } from "mdb-react-ui-kit";
import { useState } from "react";

export default function RecordCreate({ sectionId }) {
  const user = useSelector(({ auth }) => auth.user);

  const [tag, setTag] = useState('');
  const [sourceName, setSourceName] = useState('');
  const [sourceLink, setSourceLink] = useState('');
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [sources, setSources] = useState(() => []);
  const [tags, setTags] = useState(() => []);
  const [isPublic, setIsPublic] = useState(false);

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
        problemDescription: problem,
        solutionDescription: solution,
        creator: user.email,
        isPublic,
        tags,
        sources,
        sectionId
      }
      console.log(r);
    }
  }

  return (
  <>
    <Navigation showSearch={false} />
  
    <main className="record-view-container">
      <form>
        <div className="input-group mb-2">
          <div className="input-group-text" >Title</div>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required/>
        </div>
        <i className='text-secondary'>By: {user ? user.email : ''}</i>
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
        <textarea className="form-control" rows="4" value={solution} onChange={e => setSolution(e.target.value)} required></textarea>
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
    </main>
  </>);
}