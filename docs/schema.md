# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## project_workers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## chats
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
user_id     | integer   | not null, foreign key (references users), indexed
content	    | text      | not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body	    | text      | not null

## post_listeners
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## to_dos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## steps
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
to_do_id        | integer   | not null, foreign key (references to_dos), indexed
author_id       | integer   | not null, foreign key (references users), indexed
details         | text      | not null
completed       | boolean   | not null, default: false
start_date_time | datetime  |
end_date_time   | datetime  |

## step_assignments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
step_id         | integer   | not null, foreign key (references steps), indexed
user_id         | integer   | not null, foreign key (references users), indexed

## check_ins
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | text      | not null
start_date_time | datetime  | not null
end_date_time   | datetime  |
interval        | time      | not null

## check_in_assignments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
check_in_id     | integer   | not null, foreign key (references check_ins), indexed
user_id         | integer   | not null, foreign key (references users), indexed

## events
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
all_day         | boolean   | not null, default: false
start_date_time | datetime  | not null
end_date_time   | datetime  | not null
details	        | text      | not null
project_id      | integer   | not null, foreign key (references projects), indexed
author_id       | integer   | not null, foreign key (references users), indexed

## event_members
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references users), indexed
event_id          | integer   | not null, foreign key (references events), indexed

## event_member_responses
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
event_member_id   | integer   | not null, foreign key (references event_members), indexed
content           | string    | not null

## notifications
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references users), indexed
notifiable_id     | integer   | not null, foreign key (references posts, to_dos, steps, events, event_reminders, check_ups, docs, comments, chats), indexed
notifiable_type   | string    | not null
project_id        | integer   | not null, foreign key (references projects), indexed

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content	        | text      | not null
commentable_id  | integer   | not null, foreign key (references posts, to_dos, steps, events, check_ups, docs), indexed
commentable_type| string    | not null
author_id       | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
title           | string    | not null
organization_name| string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_file_name    | string    |
avatar_content_type | string    |
avatar_updated_at   | datetime  |

## applauds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
comment_id      | integer   | not null, foreign key (references comment), indexed
user_id         | integer   | not null, foreign key (references users), indexed
