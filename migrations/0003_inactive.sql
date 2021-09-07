create table if not exists project_bot.inactive
(
    id      uuid    default uuid_generate_v4() not null
        constraint inactive_pk
            primary key,
    user_id  bigint                             not null
        constraint inactive_users_id_fk
            references project_bot.users,
    start   timestamp                          not null,
    "end"   timestamp,
    refresh integer default 0                  not null,
    active  boolean default true               not null
);

alter table project_bot.inactive
    owner to postgres;

create unique index if not exists inactive_id_uindex
    on project_bot.inactive (id);
