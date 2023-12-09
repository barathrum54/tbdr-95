import { MenuItem } from "../../../types/menu-item.types";

export const Help: MenuItem = {
  title: "Help",
  icon: "/img/help.png",
  component: {
    type: "tabs",
    initialPosition: "center",
    initialSize: {
      width: 500,
      height: 400,
    },
    props: {
      title: "Help",
      items: [
        {
          title: "Help Topics",
          content: {
            title: "Skills",
            items: [
              {
                title: "Frontend",
                subItems: [
                  {
                    title: "ReactJS",
                    content: {
                      src: "https://reactjs.org/",
                    },
                  },
                  {
                    title: "VueJS",
                    content: {
                      src: "https://vuejs.org/",
                    },
                  },
                ],
              },
              {
                title: "Backend",
                subItems: [
                  {
                    title: "NodeJS",
                    content: {
                      src: "https://nodejs.org/en/",
                    },
                  },
                  {
                    title: "ExpressJS",
                    content: {
                      src: "https://expressjs.com/",
                    },
                  },
                ],
              },
              {
                title: "Database",
                subItems: [
                  {
                    title: "MongoDB",
                    content: {
                      src: "https://www.mongodb.com/",
                    },
                  },
                  {
                    title: "PostgreSQL",
                    content: {
                      src: "https://www.postgresql.org/",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          title: "What's This?",
          content: {
            title: "What's This?",
            items: [
              {
                title: "This is a Windows 95 clone made with ReactJS",
                content: {
                  src: "",
                },
              },
            ],
          },
        },
      ],
    },
  },
};
