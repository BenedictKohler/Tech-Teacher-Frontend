let baseImg = 'https://tech-teacher-backend.herokuapp.com/images/';
let baseVid = 'https://tech-teacher-backend.herokuapp.com/videos/';

let data = [
    {
        "title": "WhatsApp",
        "description": "Allows users to send text and voice messages, make voice and video calls, share images, documents, user locations, and other content.",
        "image": baseImg + "WhatsApp.png",
        "videos": 
        [
            {
                "path": baseVid + "WhatsApp1.mp4",
                "description": "In this video you learn about what WhatsApp is and some basic features."
            },
            {
                "path": baseVid + "WhatsApp2.mp4",
                "description": "Here you learn a bit about the app store and how to install WhatsApp."
            },
            {
                "path": baseVid + "WhatsApp3.mp4",
                "description": "In this episode you will learn about how to configure WhatsApp including adding a profile picture."
            },
            {
                "path": baseVid + "WhatsApp4.mp4",
                "description": "Learn about sending, receiving and keeping track of your messages."
            }
        ]
    },
    {
        "title": "Facebook",
        "description": "An online social networking site that makes it easy for you to connect and share content with family, friends, and the rest of the world.",
        "image": baseImg + "Facebook.png",
        "videos": 
        [
            {
                "path": baseVid + "Facebook1.mp4",
                "description": "Learn how to correctly sign into Facebook after installing it."
            },
            {
                "path": baseVid + "Facebook2.mp4",
                "description": "Here you will learn about setting up and customizing your profile."
            },
            {
                "path": baseVid + "Facebook3.mp4",
                "description": "Learn about connecting with and adding friends."
            },
            {
                "path": baseVid + "Facebook4.mp4",
                "description": "All you need to know about creating your first post."
            },
            {
                "path": baseVid + "Facebook5.mp4",
                "description": "Liking and replying to other peoples posts."
            },
            {
                "path": baseVid + "Facebook6.mp4",
                "description": "How messaging other users on Facebook works."
            }
        ]
    },
    {
        "title": "Zoom",
        "description": "A convenient way for you to host business meetings or chat with friends and family through video teleconferencing.",
        "image": baseImg + "Zoom.png",
        "videos": 
        [
            {
                "path": baseVid + "Zoom1.mp4",
                "description": "Learn about what exactly Zoom is and why you should use it."
            },
            {
                "path": baseVid + "Zoom2.mp4",
                "description": "Joining a Zoom call and the features you are able to use during a call."
            },
            {
                "path": baseVid + "Zoom3.mp4",
                "description": "Tired of only being able to join a meeting? Learn how to host your own."
            }
        ]
    },
    {
        "title": "FaceTime",
        "description": "FaceTime is a great way for iPhone users to make video calls with each other.",
        "image": baseImg + "FaceTime.png",
        "videos": 
        [
            {
                "path": baseVid + "FaceTime1.mp4",
                "description": "What exactly is FaceTime and who is able to use it."
            }
        ]
    },
    {
        "title": "Online Scams",
        "description": "`There are many different types of online scams these days. Learn about what they look like and how to avoid them.`",
        "image": baseImg + "ScamImage.png",
        "pdfData": baseImg + "scam.pdf"
    }
]

export default data;