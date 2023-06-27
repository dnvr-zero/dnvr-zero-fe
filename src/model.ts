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
	name: string;
	profilePicture: string;
}

// GameInfoModal.tsx
export interface GameInfoModalProps {
	show: boolean;
	onHide: () => void;
}

// SingleTaskModal.tsx
export interface SingleTaskModalProps extends GameInfoModalProps, Tasks {}

// TaskHolder.tsx
export interface TaskHolderProps {
	tasks: Tasks[] | null;
}
