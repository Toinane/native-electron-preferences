const preferences = {
    title: "Preferences",
    categories: [
        {
            name: "General",
            icon: "advanced",
            content: [
                {
                    type: "checkbox",
                    description: "Open Colorpicker at login",
                    value: false,
                    onChange: (value) => console.log(value),
                },
                {
                    type: "list",
                    description: "Color profile:",
                    value: [
                        {
                            name: "sRGB",
                            selected: true,
                        },
                        {
                            name: "Display P3",
                        },
                    ],
                    onChange: (value) => console.log(value),
                },
                {
                    type: "separator",
                },
                {
                    type: "group",
                    name: "Tools",
                    content: [
                        {
                            type: "checkbox",
                            description: "Show tools in Colorpicker",
                            onChange: (value) => console.log(value),
                        },
                    ],
                },
                {
                    type: "separator",
                },
                {
                    type: "radio",
                    description: "Change the position of app's icons:",
                    value: [
                        {
                            name: "Left position",
                            value: true,
                        },
                        {
                            name: "Right position",
                        },
                    ],
                },
            ],
        },
        {
            name: "Picker",
            icon: "./assets/picker.svg",
            content: [
                {
                    type: "checkbox",
                    description: "Show color in realtime",
                    value: true,
                },
            ],
        },
    ],
};
