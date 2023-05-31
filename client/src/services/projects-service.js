import { getUsers } from "./users";

const projects = [
  {
    id: '123',
    name: 'Project 1',
    creator: {
      email: 'test@at.ua',      
      username: 'testerforever'
    },
    sections: [
      {
        id: 'section1',
        name: 'Records without section',
        isDefault: true
      }
    ],
    users: []
  },
  {
    id: '1234',
    name: 'Project 2',
    creator: {
      email: 'abc@d.t',      
      username: 'Pastor Luke'
    },
    sections: [
      {
        id: 's1',
        name: 'Records without section',
        isDefault: true
      },
      {
        id: 's2',
        name: 'My new section',
        isDefault: false
      }
    ],
    users: [
      {
        email: 'test@at.ua',      
        username: 'testerforever'
      }
    ]
  },
];

export default class ProjectsService {
  getProjectsOfUser(payload) {
    return projects.filter(p => p.creator.email === payload.email);
  }

  getSharedProjects(payload) {
    return projects.filter(p => p.users.map(u => u.email).includes(payload.email));
  }

  getProjectInfo(payload) {
    return projects.find(p => p.id === payload);
  }

  addProject(payload) {
    const newProject = {
      id: 'p' + Math.random().toString(),
      name: payload.name,
      creator: {
        email: payload.user.email,
        username: payload.user.username
      },
      sections: [
        {
          id: 's' + Math.random().toString(),
          name: 'Records without section',
          isDefault: true
        }
      ],
      users: []
    };
    projects.unshift(newProject);
    return newProject;
  }

  addSection(payload) {
    const i = projects.map(p => p.id).indexOf(payload.projectId);
    const newSection = {
      id: 's' + Math.random().toString(),
      name: payload.name,
      isDefault: false
    };
    const upd = { ...projects[i], sections: [newSection, ...projects[i].sections] };
    projects.splice(i, 1, upd);
    return upd;
  }

  addUser(payload) {
    const i = projects.map(p => p.id).indexOf(payload.projectId);
    
    const users = getUsers();
    const userExist = users.map(u => u.email).includes(payload.email);
    const alreadyAdded = projects[i].users.map(u => u.email).includes(payload.email);
    if (!userExist || alreadyAdded || projects[i].creator.email === payload.email) return null;

    const user = users.find(u => u.email === payload.email);
    if (user.role === 'admin') return null;
    const upd = { ...projects[i], users: [...projects[i].users, {
      email: user.email,
      username: user.username
    }]};
    projects.splice(i, 1, upd);
    return upd;
  }

  removeUser(payload) {
    const i = projects.map(p => p.id).indexOf(payload.projectId);
    const upd = { ...projects[i], users: projects[i].users.filter(u => u.email !== payload.email) };
    projects.splice(i, 1, upd);
    return upd;
  }
}