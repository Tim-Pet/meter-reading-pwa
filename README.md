# meter-reading-pwa
This is a project created in cooperation with BPC AG and got created as our final project of the Digital Shaper Track from Techlabs.
We worked in a team of 4 (1 UX/UI-Designer, 2 Backend, 1 Frontend #me). Credits for the idea and scope of the created MVP belongs to BPC.

## Goal
- Create a PWA which lets the user enter meter data as a minimal viable product

## Challenges
- The PWA is supposed to work offline after an initial Login process and upload data to an API as soon as the user gets reconnected
- Fetch, alter and post data to an individual API provided by BPC
- Create an own backend to acces from the frontend to bypass CORS-Policies
- Use React

## Result
| User Workflow | Connection loss |
| --- | --- |
| <img src="./showcase/userFlow.gif" width="300" /> | <img src="./showcase/ConnectionSwitch.gif" width="300" /> |

| Offline Entry | FAQ section |
| --- | --- |
| <img src="./showcase/OfflineEntry.gif" width="300" /> | <img src="./showcase/FAQ.gif" width="300" /> |

## Tools & Libraries used
- React
- styled Components
- Axios
- Bootstrap
- date-fns
- express
- is-offline
- node-fetch
- nodemon
- react-datepicker
- React-Spring
- service worker

## Learnings
- How to connect BE and FE to handle Data
- Basic Setup to work with offline & online functionalities
- Authentification process
- React setState is asynchron (!) --> Custom onPromise-Hooks or useEffect
- Styled components aren't always the way to go
- How to use "useRef"
- Process from (Figma-)Design to code
- Date-picker & Date handling
- Proper use of a new API

## Next Steps
### FrontEnd:
- Testing

### Backend:
- Node
- Express
- MongoDB
