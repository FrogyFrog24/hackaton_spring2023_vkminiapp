import { PanelTypes } from "6.entities/structure";
import {
	Button,
	CustomSelectOption,
	Div,
	PanelHeader,
	Select,
	Spacing,
} from "@vkontakte/vkui";
import React from "react";

export const ChooseUniversityPage = ({ toPanel }) => {
	const defaultOptions = [
		{
			value: "dstu",
			label: "Донской Государственный Технический Университет",
		},
	];

	return (
		<>
			<PanelHeader>Добро пожаловать!</PanelHeader>
			<Div>
				<Spacing size={16} />
				<Select
					placeholder='Не выбран'
					options={defaultOptions}
					renderOption={({ option, ...restProps }) => (
						<CustomSelectOption {...restProps} key={option.value} />
					)}
				/>
				<Spacing size={32} />
				<Button
					onClick={() => {
						toPanel(PanelTypes.CHOOSE_SCHEDULE_TYPE);
					}}
				>
					Готово
				</Button>
			</Div>
		</>
	);
};
