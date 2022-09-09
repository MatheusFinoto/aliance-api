import { IEventImage } from '../../eventsImages/dtos/EventsImages';

export interface IEvent {
	eve_id: string;
	eve_title: string;
	eve_created_at: Date;
	eve_image: string;
	eve_description: string;
	eve_date: Date;
	eve_active: boolean;
	eve_updated_at: Date | null;
	eve_created_by: string;
	eve_updated_by: string | null;
}

export interface IEventCreate {
	eve_id: string;
	eve_title: string;
	eve_created_at: Date;
	eve_image: string;
	eve_description: string;
	eve_date: Date;
	eve_updated_at?: Date | null;
	eve_created_by: string;
	eve_updated_by?: string | null;
}

export interface IEventList {
	eve_id: string;
	eve_title: string;
	eve_image: string;
	eve_description: string;
	eve_date: Date;
	tb_account_tb_accountTotb_events_eve_created_by: {
		acc_name: string;
	};
	tb_events_images: IEventImage[];
}

export interface IEventUpdate {
	eve_id: string;
	eve_title: string;
	eve_image: string;
	eve_description: string;
	eve_date: Date;
	eve_updated_at: Date | null;
	eve_updated_by: string | null;
}
