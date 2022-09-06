DDL BANCO

CREATE TABLE public.tb_account (
acc_id varchar(40) NOT NULL,
acc_name varchar(25) NOT NULL,
acc_password varchar(100) NOT NULL,
acc_salt varchar(25) NOT NULL,
acc_email varchar(200) NOT NULL,
acc_created_at timestamp NOT NULL,
acc_image varchar(25),
acc_country varchar(25),
acc_active bool DEFAULT true NOT NULL,
PRIMARY KEY (acc_id)
);

CREATE TABLE public.tb_events (
eve_id varchar(40) NOT NULL,
eve_title varchar(100) NOT NULL,
eve_created_at timestamp NOT NULL,
eve_image varchar(40) NOT NULL,
eve_description varchar(2000) NOT NULL,
eve_date timestamp NOT NULL,
eve_active bool DEFAULT true NOT NULL,
eve_updated_at timestamp,
eve_created_by varchar(40) NOT NULL,
eve_updated_by varchar(40),
PRIMARY KEY (eve_id)
);

CREATE TABLE public.tb_events_images (
eve_img_id varchar(40) NOT NULL,
eve_id varchar(40) NOT NULL,
eve_img_link varchar(40) NOT NULL,
PRIMARY KEY (eve_img_id)
);

CREATE TABLE public.tb_media (
med_id varchar(40) NOT NULL,
med_title varchar(100) NOT NULL,
med_created_at timestamp NOT NULL,
med_type integer DEFAULT 0 NOT NULL,
med_link varchar(500) NOT NULL,
med_image varchar(40) NOT NULL,
med_description varchar(2000),
med_active bool DEFAULT true NOT NULL,
PRIMARY KEY (med_id)
);

ALTER TABLE public.tb_events
ADD FOREIGN KEY (eve_created_by)
REFERENCES public.tb_account (acc_id);

ALTER TABLE public.tb_events
ADD FOREIGN KEY (eve_updated_by)
REFERENCES public.tb_account (acc_id);

ALTER TABLE public.tb_events_images
ADD FOREIGN KEY (eve_id)
REFERENCES public.tb_events (eve_id);
CREATE TABLE public.tb_account (
acc_id varchar(40) NOT NULL,
acc_name varchar(25) NOT NULL,
acc_password varchar(100) NOT NULL,
acc_salt varchar(100) NOT NULL,
acc_email varchar(200) NOT NULL,
acc_created_at timestamp NOT NULL,
acc_image varchar(25),
acc_country varchar(25),
acc_active bool DEFAULT true NOT NULL,
PRIMARY KEY (acc_id)
);

CREATE TABLE public.tb_events (
eve_id varchar(40) NOT NULL,
eve_title varchar(100) NOT NULL,
eve_created_at timestamp NOT NULL,
eve_image varchar(40) NOT NULL,
eve_description varchar(2000) NOT NULL,
eve_date timestamp NOT NULL,
eve_active bool DEFAULT true NOT NULL,
eve_updated_at timestamp,
eve_created_by varchar(40) NOT NULL,
eve_updated_by varchar(40),
PRIMARY KEY (eve_id)
);

CREATE TABLE public.tb_events_images (
eve_img_id varchar(40) NOT NULL,
eve_id varchar(40) NOT NULL,
eve_img_link varchar(40) NOT NULL,
PRIMARY KEY (eve_img_id)
);

CREATE TABLE public.tb_media (
med_id varchar(40) NOT NULL,
med_title varchar(100) NOT NULL,
med_created_at timestamp NOT NULL,
med_type integer DEFAULT 0 NOT NULL,
med_link varchar(500) NOT NULL,
med_image varchar(40) NOT NULL,
med_description varchar(2000),
med_active bool DEFAULT true NOT NULL,
PRIMARY KEY (med_id)
);

ALTER TABLE public.tb_events
ADD FOREIGN KEY (eve_created_by)
REFERENCES public.tb_account (acc_id);

ALTER TABLE public.tb_events
ADD FOREIGN KEY (eve_updated_by)
REFERENCES public.tb_account (acc_id);

ALTER TABLE public.tb_events_images
ADD FOREIGN KEY (eve_id)
REFERENCES public.tb_events (eve_id);

CREATE UNIQUE INDEX tb_account_pkey ON public.tb_account USING btree (acc_id);

CREATE UNIQUE INDEX tb_events_images_pkey ON public.tb_events_images USING btree (eve_img_id);

CREATE UNIQUE INDEX tb_events_pkey ON public.tb_events USING btree (eve_id);

CREATE UNIQUE INDEX tb_media_pkey ON public.tb_media USING btree (med_id);

CREATE UNIQUE INDEX tb_account_pkey ON public.tb_account USING btree (acc_id);

CREATE UNIQUE INDEX tb_events_images_pkey ON public.tb_events_images USING btree (eve_img_id);

CREATE UNIQUE INDEX tb_events_pkey ON public.tb_events USING btree (eve_id);

CREATE UNIQUE INDEX tb_media_pkey ON public.tb_media USING btree (med_id);
