// App.tsx & SingleTask.tsx
export interface Tasks {
	_id: string;
	name: string;
	description: string;
	points: string;
	createdby: string;
}

export interface Players {
    _id: string;
    level: string;
    name: string;
    score: number;
    email: string;
}

// PlayerProfile.tsx
export interface PlayerProfileProps {
	name: string;
	profilePictureUrl: string;
	userName: string;
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

// AllPlayersPage.tsx
export interface AllPlayersPageProps {
	players: Players[] | null;
}
