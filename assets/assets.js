import logo from './lo.svg'
import logo_dark from './lo.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from "./h.png"
import brand_img from './brand_img.png'
import project_img_1 from './project-1.jpg'
import project_img_2 from './project-2.webp'
import project_img_3 from './project-3.jpg'
import project_img_4 from './project-4.jpg'
import project_img_5 from './project-5.webp'
import project_img_6 from './project-6.webp'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Luxury Villa",
      price: "5.8 Crore",
      location: "Delhi",
      image: project_img_1
    },
    {
      title: "Marriage Hall",
      price: "2.50 Crore",
      location: "Indore",
      image: project_img_2
    },
    {
      title: "International School",
      price: "1.20 Crore",
      location: "Mumbai",
      image: project_img_3
    },
    {
      title: "Oceanview Apartments",
      price: "4.5 Crore",
      location: "Goa",
      image: project_img_4
    },
    {
      title: "Farmhouse",
      price: "3.00 Crore",
      location: "Udaipur",
      image: project_img_5
    },
    {
      title: "Family Complex",
      price: "2.50 Crore",
      location: "Dewas M.P.",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Ananya Desai",
        title: "Corporate Lawyer",
        image: profile_img_1,
        alt: "Portrait of Ananya Desai",
        rating: 5,
        text: " The 3D visualization and architectural planning for our luxury villa were simply outstanding. Yash and the team at Modi Construction took our vague ideas and turned them into a stunning, modern reality. Every square foot feels meticulously designed for both elegance and comfort. "
    },
    {
        name: "Rajesh Sharma",
        title: "Event Management Director",
        image: profile_img_2,
        alt: "Portrait of Rajesh Sharma",
        rating: 4,
        text: "Designing a high-capacity event space requires a deep understanding of crowd flow, aesthetics, and structural integrity. Modi Construction delivered on all fronts. The 2D floor plans maximized our seating capacity without making the hall feel cramped, and the final build is the premier venue in the city."
    },
    {
        name: "Dr. Siddharth Rao",
        title: "Cardiologist",
        image: profile_img_3,
        alt: "Portrait of Dr. Siddharth Rao",
        rating: 5,
        text: "We wanted a weekend retreat that felt connected to nature but still had a highly modern infrastructure. Modi Construction struck that balance perfectly for our farmhouse. The transition from the outdoor landscape to the interior living spaces is seamless. It is exactly what we envisioned."
    }
];