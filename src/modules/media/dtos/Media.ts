export interface IMedia {
	med_id: string;
	med_title: string;
	med_created_at: Date;
	med_type: number;
	med_link: string;
	med_image: string;
	med_description?: string | null;
	med_active: boolean;
}

export interface IMediaCreate {
	med_id: string;
	med_title: string;
	med_created_at: Date;
	med_type: number;
	med_link: string;
	med_image: string;
	med_description?: string | null;
}

export interface IMediaUpdate {
	med_id: string;
	med_title: string;
	med_type: number;
	med_link: string;
	med_image: string;
	med_description: string | null;
}
