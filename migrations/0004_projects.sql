create table if not exists project_bot.projects
(
    id       uuid default uuid_generate_v4() not null
        constraint projects_pk
            primary key,
    name     text                            not null,
    assignee bigint
        constraint projects_users_id_fk
            references project_bot.users
);

alter table project_bot.projects
    owner to postgres;

create unique index if not exists projects_id_uindex
    on project_bot.projects (id);

