import './index.css'
import BlogItem from '../BlogItem'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="profile-container">
        <img src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="profile" className="profile-img" />
        <p className="name">Wade Warren</p>
        <p className="profession">Software Developer at UK</p>
    </div>
    <ul>
        {blogsList.map(eachItem=><BlogItem details={eachItem} key={eachItem.id} />)}
    </ul>
  </div>
)

export default Home
