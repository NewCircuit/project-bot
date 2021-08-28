create table project_bot.updates
(
    id         uuid      default uuid_generate_v4() not null
        constraint updates_pk
            primary key,
    project    uuid                                 not null
        constraint updates_projects_id_fk
            references project_bot.projects,
    update     text                                 not null,
    created_at timestamp default now()              not null
);

alter table project_bot.updates
    owner to postgres;

create unique index updates_id_uindex
    on project_bot.updates (id);


