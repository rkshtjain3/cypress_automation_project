/**
 * Navigation links for homepage
 */
export const NAVIGATION_LINKS = {
    desktop: [
        { text: 'Home', url: '/' },
        { text: 'Courses', url: '/courses' },
        { text: 'Practice', url: '/practice' },
        { text: 'Career Switch', url: '/career-switch' },
        { text: 'Interview Prep', url: '/interview-preparation' },
        { text: 'Blog', url: '/blog' },
        { text: 'About', url: '/about' },
        { text: 'Internship', url: '/internship' },
        { text: 'Get Hired', url: '/get-hired' }
    ],
    cta: [
        { text: 'Hire Testers', url: '/hire' },
        { text: 'Join Now', url: '/get-started' }
    ]
};

/**
 * Course options
 */
export const COURSES = [
    'Manual Testing Fundamentals',
    'Selenium + Java Automation',
    'Cypress Automation Testing',
    'API Testing with Postman',
    'AI-Powered Testing with Amazon Q',
    'Complete Testing Bootcamp'
];

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PHONE: 'Please enter a valid phone number'
};

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
    FORM_SUBMITTED: 'Message sent successfully',
    SUBSCRIPTION: 'Successfully subscribed'
};
