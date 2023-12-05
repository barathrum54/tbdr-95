type IAction = {
  name: string;
  callback: () => void;
};

const NavigateToGithub: IAction = {
  name: "Navigate to Github Repository",
  callback: () =>
    (window.location.href = "https://github.com/barathrum54/tbdr-95"),
};
const NavigateToLinkedin: IAction = {
  name: "Navigate to Linkedin Profile",
  callback: () => (window.location.href = "https://www.linkedin.com/in/tbdr/"),
};

const SendEmail: IAction = {
  name: "Contact via email",
  callback: () => (window.location.href = "mailto:tahabdurmus0@gmail.com"),
};

export const actionMapping = {
  github: NavigateToGithub,
  linkedin: NavigateToLinkedin,
  email: SendEmail,
};
