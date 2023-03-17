//роуты для View
export const ViewTypes = {
	CHOOSE: "CHOOSE",
	SETTINGS: "SETTINGS"
}

//роуты для Panel
export const PanelTypes = {
	CHOOSE_UNIVERSITY: "CHOOSE_UNIVERSITY",
	CHOOSE_SCHEDULE_TYPE: "CHOOSE_SCHEDULE_TYPE",
}

const structure = [
	{
		id: ViewTypes.CHOOSE,
		hash: "choose",
		panels: [
			{
				id: PanelTypes.CHOOSE_UNIVERSITY,
				hash: "/university"
			},
			{
				id: PanelTypes.CHOOSE_SCHEDULE_TYPE,
				hash: "/schedule-type"
			},

		]
	},
	{
		id: ViewTypes.SETTINGS,
		hash: "/settings",
		panels: [
			{
				id: PanelTypes.SETTINGS,
				hash: ""
			}
		]
	}
];

export default structure;

// Структура роута для Panel и View
//
//IPanel {
//     id: string;
//     hash?: string;
// }
//IView {
//     id: string;
//     hash?: string;
//     panels: IPanel[];
// }