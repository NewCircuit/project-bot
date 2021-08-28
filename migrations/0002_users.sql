create table if not exists project_bot.users
(
    id bigint not null
        constraint users_pk
            primary key
);

alter table project_bot.users
    owner to postgres;

create unique index if not exists users_id_uindex
    on project_bot.users (id);
