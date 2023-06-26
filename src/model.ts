// App.tsx & SingleTask.tsx
export interface Tasks {
	_id: string;
	name: string;
	description: string;
	points: string;
	createdby: string;
}

// PlayerProfile.tsx
export interface PlayerProfileProps {
	nameNode: string;
	profilePicture: string;
}

// GameInfoModal.tsx
export interface GameInfoModalProps {
	show: boolean;
	onHide: () => void;
}

// SingleTaskModal.tsx
export interface SingleTaskModalProps extends GameInfoModalProps {
	_id: string;
	name: string;
	description: string;
	points: number | string;
	createdby: string;
}

// TaskHolder.tsx
export interface TaskHolderProps {
	tasks:
		| {
				_id: string;
				name: string;
				description: string;
				points: string;
				createdby: string;
		  }[]
		| null;
}
